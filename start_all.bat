@echo off
echo Starting Web Server Make...
start "Webserver Make (Port 3000)" /D "C:\Users\User\.gemini\antigravity\scratch\webservermake" npm run dev

echo Starting Flooring App...
start "Flooring App (Port 3001)" /D "C:\Users\User\.gemini\antigravity\scratch\scratch\scratch\flooring-app" npm run dev

echo Both servers are starting in separate windows.
echo You can close this window now.
pause
