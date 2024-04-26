$env:VITE_APP_DISABLE_SENTRY = $true 
$env:VITE_APP_DISABLE_TRACKING = $true
$env:VITE_APP_ENABLE_ESLINT = "false"
echo $env:VITE_APP_ENABLE_ESLINT
cd excalidraw-app
#npx vite build --out-dir ../build --mode production
npx vite build --out-dir ../build --mode development

cd ..
docker build -t excalidraw-app .
