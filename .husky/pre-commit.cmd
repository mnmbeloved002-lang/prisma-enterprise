@echo off
echo [Husky] Running lint-staged...
npx lint-staged
exit /b %errorlevel%
