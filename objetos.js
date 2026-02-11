// un objeto es una coleccion de pares clave - valor (propiedades)

const disco = {
    // propiedades (datos del disco) atributos del objeto
    titulo: 'Mirare al Rey',
    artista: 'La IBI',
    anio: 2023,
    disponible: true,

    // propiedad de tipo arreglo
    canciones: ['Mirare al Ray', '¿El es Digno', 'Tu eres Santo', 'Santo por Siempre', 'Mi alma te canta'],

    // Podemos guardar ACCIONES relacionadas con los datos
    
    // Metodo que muestra la informacion
    mostrarInfo(){
        console.log(`${this.titulo} de ${this.artista} lnzado en ${this.anio}`);
        // this apunta a este objeto (disco)
    },

    // Metodo que liste las canciones
    mostrarCanciones(){
        this.canciones.forEach((cacnion, i) => { 
        console.log(`${i + 1}. ${cacnion}`);
        }
    )},

    // Agregar una cancion
    agregarCacnion(nombre){
        this.canciones.push(nombre);
        console.log(`Cancion agregada: ${nombre}`);
    },

    // Eliminar cancion
    //  Cambiar estado de disco a no disponible

}

// Acceder a los datos con notacion de .
console.log(disco.artista);
console.log(disco.canciones);

// Acceder a los datos con notacion de []
console.log(disco['titulo']);
console.log(disco['disponible']);

// Llamar a nuestro metodo
disco.mostrarInfo();
disco.mostrarCanciones();
disco.agregarCacnion('Te Seguire');
disco.mostrarCanciones();


//Desestructuracion es SACAR cosas de un objeto SIN necesidad de escribir objeto.propiedad

const { canciones } = disco;
const [primera, segunda, tercera] = canciones;
console.log(primera);
console.log(segunda);
console.log(tercera);

console.log('------------------------')
const { canciones: [pista1, pista2, pista3 ]} = disco;
console.log(pista1);
console.log(pista2);
console.log(pista3);

// Error comun: Desestructurar no crea datos, solo los extrae

// Renombrar variables
const { titulo: NombreDisco, anio: lanzamiento } = disco;
// Se asigna el valor de la propiedad a una variable con otro nombre
console.log(NombreDisco);
console.log(lanzamiento);

//Desestructuracion basica
const { titulo, artista } = disco;
console.log(titulo);
console.log(artista);