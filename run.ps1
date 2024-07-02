Set-Location "$PSScriptRoot\web"
if (-not (Test-Path .env)) { Copy-Item .env.example .env }
if (-not (Test-Path prisma\data)) { New-Item -ItemType Directory -Path prisma\data -Force | Out-Null }
npm run db:push
npm run db:seed
npm run dev
