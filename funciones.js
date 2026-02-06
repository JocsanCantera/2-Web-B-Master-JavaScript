function saludar(nombre){ //nombre es un parametro
    // lo que va a hacer la funcion
    return 'Hola ' + nombre; //retornando el resultado
}

saludar(); // Llamando a funcion saludar

let saludo = saludar('Fatima')

console.log(saludar('Randy'));
console.log(saludo);

function sumar(a,b){
    console.log(a + b); // Resultado en consola
}

sumar(2,3);

// return entrega un valor para usarlo despues
function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado; // esta variable es local
}

console.log(resta(10, 7));

let resultado; // variable global

function sinReturn(){
    let x = 5;
}

// Logra ejecutar la funcion pero NO regresa nada
console.log(sinReturn());

console.log(resultado);

function multiplicar(dato1, dato2){
    return dato1 * dato2;
}

console.log(multiplicar(4)); // Not A Number NaN, hace falta pasarle un argumento

//console.log(Ana); // Error de variable no definida

// Arrow function - Funcion de flecha

const dividir = (a, b) => a/b;

console.log(dividir(15, 2));

const suma = (a, b) =>{ // Una funcion mas larga con {} no tiene return automatico
    return a + b;
}

console.log(suma(3,4));

const multi = (a, b) => { return a*b }

console.log(multi(10, 5));

// Funcion anonima (no necesitas darle nombre, ejecuta algo puntual)

setTimeout(function() {
    console.log("Esto se ejecutara despues...")
}, 5000);

// CUANDO NO UTILIZAR FUNCIONES ANONIMAS
/*Se tiene que reutilizar muchas veces
Tiene logica grande
Necesita ser testeada
Se necesita claridad*/


function mascotas(a, b, c){
    console.log("Nombre de las mascotas " + a + " " + b + " " + c);
}

mascotas('Puppy', 'Bombon', 'Milaneso');

// 3 funciones
// Funcion para calcular el area de un triangulo
// Funcion para verificar si un numero es primo
// Funcion para generar numeros fibonacci

// Utilizar la funcion con dos ejemplos

// Función para calcular el área de un triángulo
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log("Área del triángulo:", areaTriangulo(10, 5));
console.log("Área del triángulo:", areaTriangulo(43, 23));

// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("¿Es primo el número 3?:", esPrimo(3));

// Función para generar la serie Fibonacci
function fibonacci(n) {
  const serie = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    serie.push(a);
    [a, b] = [b, a + b];
  }

  return serie;
}

console.log("Serie Fibonacci (6 números):", fibonacci(6));
