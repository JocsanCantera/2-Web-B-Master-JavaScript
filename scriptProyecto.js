const form = document.getElementById("comentarioForm");
const input = document.getElementById("comentarioInput");
const libroSelect = document.getElementById("libroSelect");

form.addEventListener("submit", function (e) {

    e.preventDefault();
    const texto = input.value.trim();
    const libroId = libroSelect.value;

    if (texto === "" || libroId === "") return;

    const libro = document.getElementById(libroId);
    const contenedorComentarios = libro.querySelector(".comentarios");

    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    const contenido = document.createElement("p");
    contenido.textContent = texto;

    const fecha = document.createElement("div");
    fecha.classList.add("fecha");
    fecha.textContent = new Date().toLocaleString();

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "X";
    eliminarBtn.classList.add("eliminar");

    eliminarBtn.addEventListener("click", function () {
        comentarioDiv.remove();
    });

    comentarioDiv.appendChild(contenido);
    comentarioDiv.appendChild(fecha);
    comentarioDiv.appendChild(eliminarBtn);

    contenedorComentarios.prepend(comentarioDiv);

    input.value = "";
    libroSelect.value = "";
});