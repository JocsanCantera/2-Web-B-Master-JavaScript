// Seleccionamos nuestroe elemento del DOM

const titulo = document.getElementById("titulo");
console.log(titulo);

const texto = document.getElementById("texto");
console.log(texto);

const caja = document.getElementById("caja");
console.log(caja);

const BtnClase = document.getElementById("BtnClase");

const BtnTexto = document.getElementById("BtnTexto");
const BtnColor = document.getElementById("BtnColor");
const BtnOcultar = document.getElementById("BtnOcultar");

// Cambiar texto
BtnTexto.addEventListener("click", () =>{
    titulo.textContent = 'Cambiaste el texto desde JavaScript'
});

// Cambiar colores
BtnColor.addEventListener("click", () =>{
    titulo.style.color = 'brown';
    caja.style.backgroundColor = 'red';
});

// Ocultar caja
BtnOcultar.addEventListener("click", () =>{
    if (caja.style.display === "none") {
        caja.style.display = "block";        
    } else{
        caja.style.display = "none";
    }
});

// Cambiar de clase
BtnClase.addEventListener("click", () =>{
    caja.classList.toggle("activa");
});