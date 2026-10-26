const express = require("express");
const path = require("path");
const peliculas = require("./data/peliculas.json");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
    res.json({ mensaje: "API de películas funcionando", rutas: ["/api/peliculas", "/api/peliculas/1"] });
});

app.get("/api/peliculas", (req, res) => res.json(peliculas));

app.get("/api/peliculas/:id", (req, res) => {
    const pelicula = peliculas.find(item => item.id === Number(req.params.id));
    if (!pelicula) return res.status(404).json({ error: "Película no encontrada" });
    res.json(pelicula);
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
    console.log(`API disponible en http://localhost:${PORT}/api/peliculas`);
});
