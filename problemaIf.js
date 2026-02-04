let nota = prompt('Ingresa tu calificaion entre 0 y 100:')

if(nota >= 90 &&  nota <= 100){
    console.log('Excelente')
} else if(nota >= 75 && nota <= 89){
    console.log('Bien')
} else if(nota >= 60 && nota <= 74){
    console.log('Suficiente')
} else{
    console.log('Reprobaste')
}