@echo off
echo ========================================
echo WICEN Next.js - Lancement du projet
echo ========================================
echo.
echo Installation des dependances...
call npm install
echo.
echo Lancement du serveur de developpement...
echo Le site sera accessible sur http://localhost:3000
echo.
echo Pressez Ctrl+C pour arreter le serveur
echo.
call npm run dev
