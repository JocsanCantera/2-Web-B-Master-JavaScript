document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formComentario");
    const textarea = document.getElementById("textoComentario");
    const lista = document.getElementById("listaComentarios");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        const texto = textarea.value.trim();

        if (texto === "") {
            alert("El comentario no puede estar vacío");
            return;
        }

        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        const contenido = document.createElement("p");
        contenido.textContent = texto;

        const fecha = document.createElement("div");
        fecha.classList.add("fecha");

        const ahora = new Date();
        fecha.textContent = "Publicado el " + ahora.toLocaleString();

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.classList.add("eliminar");

        btnEliminar.addEventListener("click", function () {
            lista.removeChild(comentarioDiv);
        });

        comentarioDiv.appendChild(btnEliminar);
        comentarioDiv.appendChild(contenido);
        comentarioDiv.appendChild(fecha);

        lista.appendChild(comentarioDiv);

        textarea.value = "";
    });

});
