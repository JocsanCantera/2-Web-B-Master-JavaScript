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