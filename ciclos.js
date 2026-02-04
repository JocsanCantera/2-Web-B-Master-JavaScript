// Repite mientras la condicion sea true

let i = 0;

while(i <= 2){
    console.log("while:", i);
    i++; // variable de control
}

//let entrada = "";

//while(entrada !== "salir"){
//    entrada = prompt("Escribe algo:")
//}

console.log('--------------------------------')

// arrays o arreglos
let frutas = ['Manzana', 'Pera', 'Lulo', 'Cereza', 'Mango', 'Papaya'];

console.log(frutas.length);

for(let indice = 0; indice < frutas.length; indice++){
    console.log("Fruta =", frutas[indice])
}


console.log("Metodos de los arreglos")
let alumno = []; //arreglo vacio

// metodo push agrega al final
alumno.push('Ana');
alumno.push('Bruno');
alumno.push('Fernanda');
alumno.push('Natalia');

console.log(alumno)

//metodo pop quita el ultimo
alumno.pop();

console.log(alumno);

// metodo unshift agrega al inicio
alumno.unshift('Nina');
alumno.unshift('Misael');
alumno.unshift('Beto');
console.log(alumno);

//metodo shift quita al principio
alumno.shift();
console.log(alumno);


// arreglo de una lista de super
// Impriman lista del super
// se imprima en indice (1 Manzana, 2 Jabon)

// Extra total de productos
// Extra promt (guardar la lista que da el usuario dentro de un arreglo)

let listaDeMercado = ["manzana", "jabón", "pan", "leche", "arroz"];

for (let i = 0; i < listaDeMercado.length; i++) {
  console.log((i + 1) + " - " + listaDeMercado[i]);
}

console.log("Total de productos:", listaDeMercado.length);


console.log('--------------------------')


let listaSuper = [];
let producto = "inicio";

while (producto !== ""){
    producto = prompt('Ingresa un producto del super.')

    if (producto !== ""){
        listaSuper.push(producto);
    }
}

for (let indice = 0; indice < listaSuper.length; indice++){
    console.log((indice+1) + " - " + listaSuper[indice]);
}

console.log("Total de la lista=", listaSuper.length)