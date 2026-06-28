@echo off
chcp 65001 >nul
title KeyCraft Studio - Fresh Start
echo.
echo ==========================================
echo    KEYCRAFT STUDIO - FRESH START
echo ==========================================
echo.
echo This will:
echo  1. Kill all Node.js processes
echo  2. Clear all caches
echo  3. Start the server on a NEW port
echo  4. Open your browser automatically
echo.
echo Press any key to continue...
pause >nul

echo.
echo [1/5] Stopping all Node.js processes...
taskkill /F /IM node.exe 2>nul
taskkill /F /IM node.exe 2>nul
taskkill /F /IM node.exe 2>nul
echo ✓ Node processes stopped
echo.

echo [2/5] Clearing Next.js cache...
if exist .next (
    rmdir /S /Q .next
    echo ✓ .next folder cleared
) else (
    echo ✓ No .next folder to clear
)
echo.

echo [3/5] Clearing npm cache...
call npm cache clean --force 2>nul
echo ✓ npm cache cleared
echo.

echo [4/5] Starting development server...
echo ✓ Server will start on http://localhost:3005
echo.
echo ==========================================
echo    OPENING BROWSER IN 3 SECONDS...
echo ==========================================
echo.
echo IMPORTANT: If browser shows old cache errors:
echo  1. Press Ctrl+Shift+R to hard refresh
echo  2. Or open cleanup.html for auto-cleanup
echo.

timeout /t 3 /nobreak >nul
start http://localhost:3005

echo [5/5] Starting Next.js dev server...
npm run dev
