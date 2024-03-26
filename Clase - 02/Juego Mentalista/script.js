var invitacion;
invitacion = prompt("¿Quieres entrar a Jugar? (Si o No)");

if (invitacion == "Si") {
  var numeroShh = parseInt(Math.random() * 1000) + 1;
  var numeroUsuario;
  var intentosUsuario = 0;
  var maxIntentos = 15;

  console.log(numeroUsuario);

  while (numeroUsuario != numeroShh && intentosUsuario != maxIntentos) {
    numeroUsuario = prompt("Ingrese un número entre 1 y 1000");
    intentosUsuario = intentosUsuario + 1;

    var intentosRestantes;
    intentosRestantes = maxIntentos - intentosUsuario;

    if (numeroUsuario == numeroShh) {
      alert("Felicidades Mentalista!! Acertaste con el número");
    } else if (numeroUsuario > numeroShh) {
      alert(
        "El número secreto es menor que " +
          numeroUsuario +
          " te quedan " +
          intentosRestantes +
          " intentos"
      );
    } else if (numeroUsuario < numeroShh) {
      alert(
        "El número secreto es mayor que " +
          numeroUsuario +
          " te quedan " +
          intentosRestantes +
          " intentos"
      );
    }
  }
  if (intentosUsuario == maxIntentos) {
    alert("Se te acabaron los intentos mentalista :( ");
    alert("El número secreto era: " + numeroShh);
  }
} else {
  alert("Gallina");
}
