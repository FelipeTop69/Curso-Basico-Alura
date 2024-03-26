var nombreUsuario;
var valorEnDolar;
var pesosMexicanosEnUsd = 16.69;
var conversion;

nombreUsuario = prompt("Ingrese su nombre, por favor");
valorEnDolar = prompt("Ingrese la cantidad de dolares");

valorEnDolar = parseFloat(valorEnDolar);

conversion = (valorEnDolar * pesosMexicanosEnUsd).toFixed(2);

alert(
  "Hola " +
    nombreUsuario +
    "! " +
    "Los " +
    valorEnDolar +
    " dolares en pesos mexicanos es: " +
    conversion +
    " USD"
);
