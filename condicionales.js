let edad = 20;
let tieneINE = true;

if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}


let calificacion = 9;

if (calificacion >= 9){
    console.log("Eres increible");
} else if(calificacion >= 6){
    console.log("Pansaste...");
}else{
    console.log("Reprobaste");
}

// AND (y) &&
// OR (o) ||
// NOT (negacion) !

if(edad >= 18 && tieneINE){
    console.log("Puedes votar")
}else{
    console.log("No puedes votar")
}