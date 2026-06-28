@echo off
echo ==========================================
echo KeyCraft Studio - Clean Start
echo ==========================================
echo.
echo Stopping any running Node processes...
taskkill /F /IM node.exe 2>nul
echo.
echo Clearing Next.js cache...
if exist .next rmdir /S /Q .next
echo.
echo Waiting 2 seconds...
timeout /t 2 /nobreak >nul
echo.
echo Starting fresh...
start http://localhost:3000
npm run dev
