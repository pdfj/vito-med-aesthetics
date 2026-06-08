$log = "$PSScriptRoot\check-gh-log.txt"
"" | Set-Content $log
function L($m) { Write-Host $m; Add-Content $log $m }

L "=== Check gh status ==="
L (Get-Date)

# Kill any stuck winget
Get-Process -Name "winget","DesktopAppInstaller" -ErrorAction SilentlyContinue | ForEach-Object { L "Killing $($_.Name)"; $_ | Stop-Process -Force }

# Refresh PATH
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")

# Find gh
$found = $false
$ghPaths = @("gh") + (Get-ChildItem "$env:ProgramFiles\*\gh.exe","$env:LOCALAPPDATA\Programs\*\gh.exe","$env:ProgramFiles\GitHub CLI\gh.exe","$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName)
foreach ($p in $ghPaths) {
    try {
        $v = & $p --version 2>&1
        if ($LASTEXITCODE -eq 0) { L "Found gh: $p | $v"; $found = $true; $ghExe = $p; break }
    } catch {}
}
if (-not $found) { L "gh NOT found anywhere" }

# Also check vercel
$vcl = vercel --version 2>&1
L "Vercel: $vcl"

# Check git remote
Set-Location $PSScriptRoot
$remote = git remote -v 2>&1
L "Git remotes: $remote"

L "=== Done ==="
