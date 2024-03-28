var listaPeliculasAgregadas = [];
var listaTrailersPeliculasAgregadas = [];

function agregarPelicula() {
  var peliculaAgregada;
  var trailerPeliculaAgregada;

  //Se utiliza el getElementById para tomar un valor que tenga id, y le agregamos en .value para que solamente tome el valor de dicho id

  peliculaAgregada = document.getElementById("pelicula").value;
  trailerPeliculaAgregada = document.getElementById("trailer").value;

  if (peliculaAgregada.endsWith("jpg") || peliculaAgregada.endsWith("jpeg")) {
    document.getElementById("mensajeDeError").innerHTML = "";
    listaPeliculasAgregadas.push(peliculaAgregada);
    listaTrailersPeliculasAgregadas.push(trailerPeliculaAgregada);

    limpiarCampos();
    recargarPeliculas();
  } else {
    document.getElementById("mensajeDeError").innerHTML =
      "Dirección de imagen no válida, inténtalo de nuevo";
    limpiarCampos();
  }
}

function recargarPeliculas() {
  var elementoListaPeliculas;
  elementoListaPeliculas = document.getElementById("listaPeliculas");
  elementoListaPeliculas.innerHTML = "";
  for (i = 0; i < listaPeliculasAgregadas.length; i++) {
    elementoListaPeliculas.innerHTML += `
      <div class="pelicula">
        <a href="${listaTrailersPeliculasAgregadas[i]}" target="_blank"><img src="${listaPeliculasAgregadas[i]}"></a>
        <button class="botonEliminar" onclick="eliminarPelicula(${i})">Eliminar</button>
      </div>
    `;
  }
}

function limpiarCampos() {
  document.getElementById("pelicula").value = "";
  document.getElementById("trailer").value = "";
}

function eliminarPelicula(index) {
  listaPeliculasAgregadas.splice(index, 1);
  listaTrailersPeliculasAgregadas.splice(index, 1);
  recargarPeliculas();
}
