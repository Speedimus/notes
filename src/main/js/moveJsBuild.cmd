@echo off
rem rm -r ../resources/static/static/
rem rm ../resources/static/asset-manifest.json
rem rm ../resources/static/manifest.json
rem rm ../resources/static/favicon.ico

rem rm build/service-worker.js
rem cp -r build/* ../resources/static
rem rm -r build

rd /s /q ..\resources\static\static
del ..\resources\static\asset-manifest.json
del ..\resources\static\manifest.json
del ..\resources\static\favicon.ico

del build\service-worker.js
xcopy /s /y build\* ..\resources\static\*
rd /s /q build
