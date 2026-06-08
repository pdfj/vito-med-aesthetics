$logFile = "$PSScriptRoot\setup-github-log.txt"
function Log($msg) { Write-Host $msg; Add-Content $logFile "$msg" }

Set-Content $logFile ""
Log "=== GitHub Setup Script v2 ==="
Log (Get-Date)

# Kill any stuck winget processes
Get-Process -Name "winget" -ErrorAction SilentlyContinue | Stop-Process -Force
Log "Cleaned up any stuck winget processes."

# Try gh directly first
$gh = $null
foreach ($p in @("gh", "$env:ProgramFiles\GitHub CLI\gh.exe", "$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe")) {
    try { $v = & $p --version 2>&1; if ($LASTEXITCODE -eq 0) { $gh = $p; Log "Found gh at: $p ($v)"; break } } catch {}
}

if (-not $gh) {
    Log "gh not found. Downloading directly..."
    $ghZip = "$env:TEMP\gh_windows.zip"
    $ghDir = "$env:TEMP\gh_cli"

    # Download gh 2.62.0 directly
    $url = "https://github.com/cli/cli/releases/download/v2.62.0/gh_2.62.0_windows_amd64.zip"
    Log "Downloading from: $url"
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $url -OutFile $ghZip -UseBasicParsing
        Log "Download complete. Extracting..."
        Expand-Archive -Path $ghZip -DestinationPath $ghDir -Force
        $ghExe = (Get-ChildItem -Path $ghDir -Recurse -Filter "gh.exe" | Select-Object -First 1).FullName
        Log "Extracted gh.exe to: $ghExe"
        $gh = $ghExe
        $env:PATH = "$([IO.Path]::GetDirectoryName($ghExe));$env:PATH"
    } catch {
        Log "ERROR downloading: $_"
    }
}

if (-not $gh) { Log "FATAL: Cannot find or install gh. Exiting."; Read-Host "Press Enter"; exit 1 }

Log "gh version: $(& $gh --version 2>&1)"

# Check auth
$authOut = & $gh auth status 2>&1
Log "Auth: $authOut"

if ("$authOut" -match "not logged|no credential") {
    Log "Not logged in. Opening browser for authentication..."
    & $gh auth login --web -h github.com
}

# Stage and commit the package.json change
Set-Location $PSScriptRoot
$staged = git diff --cached --stat
$unstaged = git diff --stat
Log "Staged: $staged | Unstaged: $unstaged"

git add package.json 2>&1 | ForEach-Object { Log $_ }
$diff = git diff --cached --stat
if ($diff) {
    git commit -m "Add private:true to root package.json for Yarn workspaces" 2>&1 | ForEach-Object { Log $_ }
    Log "Committed package.json change."
} else {
    Log "package.json already committed."
}

# Create repo and push
Log "Creating vito-med-aesthetics repo and pushing..."
$result = & $gh repo create vito-med-aesthetics --public --source=. --remote=origin --push 2>&1
Log "Result: $result"

if ($LASTEXITCODE -ne 0) {
    Log "gh repo create failed — trying manual remote + push..."
    $user = (& $gh api user --jq ".login" 2>&1).Trim()
    Log "GitHub user: $user"
    git remote remove origin 2>$null
    git remote add origin "https://github.com/$user/vito-med-aesthetics.git"
    git push -u origin HEAD 2>&1 | ForEach-Object { Log $_ }
}

$remote = git remote get-url origin 2>&1
Log "Final remote: $remote"
Log "=== Done ==="
Read-Host "Press Enter to close"
