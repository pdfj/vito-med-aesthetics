$logFile = "$PSScriptRoot\setup-github-log.txt"
function Log($msg) { Write-Host $msg; Add-Content $logFile "$msg" }

"" | Set-Content $logFile
Log "=== GitHub Setup Script ==="
Log (Get-Date)

# Check/install gh
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Log "gh not found, installing via winget..."
    winget install --id GitHub.cli --silent --accept-source-agreements --accept-package-agreements
    $env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Log "ERROR: gh still not found after install attempt. Refreshing PATH..."
    # Try common install location
    $ghPaths = @(
        "$env:ProgramFiles\GitHub CLI\gh.exe",
        "$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe"
    )
    foreach ($p in $ghPaths) {
        if (Test-Path $p) { $env:PATH += ";$(Split-Path $p)"; Log "Found gh at $p" }
    }
}

$ghVersion = gh --version 2>&1
Log "gh version: $ghVersion"

# Check auth
$authStatus = gh auth status 2>&1
Log "Auth status: $authStatus"

if ($authStatus -match "not logged") {
    Log "Not logged in. Starting browser auth..."
    gh auth login --web --hostname github.com
}

# Stage any unstaged changes (the package.json fix)
Set-Location $PSScriptRoot
git add -A
$diffStat = git diff --cached --stat
if ($diffStat) {
    Log "Committing: $diffStat"
    git commit -m "Add private:true to root package.json for Yarn workspaces"
} else {
    Log "No uncommitted changes."
}

# Create GitHub repo
Log "Creating GitHub repo vito-med-aesthetics..."
$createResult = gh repo create vito-med-aesthetics --public --source=. --remote=origin --push 2>&1
Log "Create result: $createResult"

if ($LASTEXITCODE -ne 0) {
    Log "Repo create failed (may already exist). Trying to just set remote and push..."
    $ghUser = gh api user --jq '.login' 2>&1
    Log "GitHub user: $ghUser"
    git remote remove origin 2>$null
    git remote add origin "https://github.com/$ghUser/vito-med-aesthetics.git"
    git push -u origin main 2>&1 | ForEach-Object { Log $_ }
}

Log "=== Done ==="
Log "Remote: $(git remote get-url origin 2>&1)"
Read-Host "Press Enter to close"
