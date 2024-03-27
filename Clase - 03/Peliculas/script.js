var carteleraPeliculas = [];

carteleraPeliculas[0] =
  "https://mx.web.img3.acsta.net/pictures/20/03/04/23/48/3618241.jpg";

carteleraPeliculas[1] =
  "https://images.justwatch.com/poster/99742363/s718/vengadores-la-era-de-ultron.jpg";

carteleraPeliculas[2] =
  "https://images.justwatch.com/poster/221788889/s718/los-mercenarios.jpg";

carteleraPeliculas.push(
  "https://es.web.img3.acsta.net/pictures/14/03/17/13/47/352013.jpg",
  "https://es.web.img2.acsta.net/pictures/15/10/23/15/15/128425.jpg",
  "https://es.web.img3.acsta.net/pictures/23/05/25/13/41/1835431.jpg"
);

var nombrePeliculas = [
  "Rapidos y Furiosos",
  "Vengadores",
  "Indestructibles",
  "Top Gun",
  "Piratas del Caribe",
  "Oppenheimer"
];

// Se crea un contenedor para almacenar las peliculas junto con sus nombres

document.write("<div class='container_todosFilmes'>");

/*El comando "carteleraPeliculas.length" le da el tamaño asignado a la variable del array
que en este caso seria 2*/

for (var i = 0; i < carteleraPeliculas.length; i++) {
  if (
    carteleraPeliculas[i].endsWith("jpg") ||
    carteleraPeliculas[i].endsWith("jpeg")
  ) {
    document.write("<div class='container_filme'>");
    document.write("<img src=" + carteleraPeliculas[i] + ">");
    document.write("<p>" + nombrePeliculas[i] + "</p>");
    document.write("</div>");
  } else {
    document.write(
      "<p> La imagen " +
        i +
        " no se leyó porque no es un archivo jpeg o jpg </p>"
    );
  }
}
document.write("</div>");
