let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "kiwi"];
let conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log("Este es tu total de cada fruta", conteoFrutas);
