const libro = {

  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  anio: 1943,
  estado: "disponible",
  capitulos: [],

  describirLibro: function() {
    console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
  },

  agregarCapitulo: function(capitulo) {
    this.capitulos.push(capitulo); 
    console.log(`Capitulo "${capitulo}" agregado.`);
  },

  eliminarCapitulo: function(capitulo) {
    this.capitulos = this.capitulos.filter(c => c !== capitulo);
    console.log(`Capitulo "${capitulo}" eliminado.`);
  }
};

libro.describirLibro();  
libro.agregarCapitulo("Capitulo 1");
libro.agregarCapitulo("Capitulo 2");
libro.agregarCapitulo("Capitulo 3");
libro.agregarCapitulo("Capitulo 4");
libro.agregarCapitulo("Capitulo 5");
libro.agregarCapitulo("Capitulo")
console.log(libro.capitulos);
libro.eliminarCapitulo("Capitulo 4");
libro.eliminarCapitulo("Capitulo")
console.log(libro.capitulos);
