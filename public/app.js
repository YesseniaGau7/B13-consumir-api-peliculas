const movieGrid = document.getElementById("movieGrid");
const message = document.getElementById("message");
const movieCount = document.getElementById("movieCount");
const apiStatus = document.getElementById("apiStatus");

async function cargarPeliculas() {
    try {
        const respuesta = await fetch("/api/peliculas");
        if (!respuesta.ok) throw new Error("La API respondió con un error.");
        const peliculas = await respuesta.json();
        apiStatus.innerHTML = '<span class="status-dot online"></span> API conectada';
        movieCount.textContent = `${peliculas.length} títulos disponibles`;
        message.textContent = "";
        if (!peliculas.length) {
            message.textContent = "No hay películas registradas en la API.";
            return;
        }
        movieGrid.innerHTML = peliculas.map(pelicula => `
            <article class="movie-card">
                <div class="poster-wrap">
                    <img src="${escapar(pelicula.imagen)}" alt="Póster de ${escapar(pelicula.titulo)}" loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/500x750/202633/f5b544?text=Sin+imagen';">
                    <span class="poster-label">${escapar(pelicula.anio)}</span>
                </div>
                <div class="movie-info">
                    <div class="movie-meta">${escapar(pelicula.genero)}</div>
                    <h3>${escapar(pelicula.titulo)}</h3>
                    <p class="movie-description">${escapar(pelicula.descripcion)}</p>
                    <div class="movie-details"><span>Dir. ${escapar(pelicula.director)}</span><span>${escapar(pelicula.duracion)}</span></div>
                </div>
            </article>`).join("");
    } catch (error) {
        apiStatus.innerHTML = '<span class="status-dot offline"></span> API sin conexión';
        movieCount.textContent = "No disponible";
        message.textContent = "No se pudieron cargar las películas. Verifica que el servidor esté funcionando.";
        message.classList.add("error");
        console.error(error);
    }
}
function escapar(valor) {
    return String(valor ?? "").replace(/[&<>"']/g, caracter => ({
        "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
    })[caracter]);
}
cargarPeliculas();
