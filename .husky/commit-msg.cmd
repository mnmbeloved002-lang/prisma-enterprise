@echo off
echo [Husky] Running commitlint...
npx --no-install commitlint --edit "%1"
exit /b %errorlevel%
