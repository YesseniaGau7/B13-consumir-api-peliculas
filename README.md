# B13 — Consumir su propia API

## Ejecutar localmente
1. Instala Node.js LTS.
2. Extrae el ZIP y abre esta carpeta en Visual Studio Code.
3. En Terminal > Nueva terminal ejecuta `npm install`.
4. Ejecuta `npm start`.
5. Abre `http://localhost:3000`.
6. API JSON: `http://localhost:3000/api/peliculas`.
7. Película individual: `http://localhost:3000/api/peliculas/1`.

## Subir a GitHub
Crea un repositorio vacío llamado `B13-consumir-api-peliculas`. En la terminal de esta carpeta:
```bash
git init
git add .
git commit -m "Proyecto B13: consumir API de películas"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/B13-consumir-api-peliculas.git
git push -u origin main
```
Sustituye `TU-USUARIO` por tu usuario real de GitHub y usa la URL que GitHub te muestre.

## Publicar en Render
1. Entra a https://render.com y conecta tu cuenta de GitHub.
2. Selecciona New + > Web Service.
3. Selecciona el repositorio del proyecto.
4. Usa Build Command `npm install` y Start Command `npm start`.
5. Crea el servicio y espera a que finalice el despliegue.
6. Abre la URL pública de Render; comprueba también la ruta `/api/peliculas`.

Las imágenes de póster se obtienen desde URLs externas, por lo que necesitan conexión a Internet.
