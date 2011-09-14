@echo off

set HERE=%~dp0
set CPL=%HERE%\..\app\cpl.js
set NODE_PATH=%HERE%\..\app
set NODE_EXE=%HERE%\node.exe

%NODE_EXE% %CPL% %*
