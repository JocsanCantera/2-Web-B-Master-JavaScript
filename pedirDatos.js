console.log("Hola me llamo")

console.log("Como te llamas?")

//let nombre = prompt("Como te llamas?");
//document.write(nombre);
//alert(nombre);

//let fecha = prompt("Cuando es tu cumple??");
//document.write(fecha);
//alert(fecha);

//let mascota = prompt("Cuantas mascotas tienes?");
//document.write(mascota);
//alert(nombre);
//alert(fecha);
//alert(mascota);

// Console.log para imprimir en consola o navegador (depurar codigo)
// document.write para imprimir texto en html
//alert para mostrar en pantalla

// Preguntar cuantos perros tienes
// Preguntar cuantos gatos tienes
// mostrar como respuesta: Tienes en total x mascotas

let perro = prompt("Cuantos perros tienes?");
let gato = prompt("Cuantos gatos tienes:");
// Convertir a tipo numero
// parseInt es más tolerable y util cuando el usuario escribe texto
perro = parseInt(perro);
gato = parseInt(gato); 

console.log("Tienes " +  perro + " perros y tienes " + gato + " gatos");
document.write("Tienes " +  perro + " perros y tienes " + gato + " gatos");
let totalMascotas = perro + gato;
console.log("Tienes " + totalMascotas + " mascotas");

// Numbre es estricto y falla cuando hay texto escrito
let hermanos = Number(prompt("Cuantos hermanos tienes?"));
let hermanas = Number(prompt("Cuantas hermanas tienes:"));

let totalH = hermanas + hermanos;
console.log("Tienes " + totalH + " hermanos");