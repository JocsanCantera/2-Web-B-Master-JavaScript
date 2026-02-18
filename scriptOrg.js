const tareaInput = document.getElementById("tareaInput");
const categoriaSelect = document.getElementById("categoriaSelect");
const agregarBtn = document.getElementById("agregarBtn");

const agregarTarea = () => {
  const texto = tareaInput.value.trim();
  const categoria = categoriaSelect.value;

  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  const btnEliminar = document.createElement("span");
  btnEliminar.textContent = "❌";
  btnEliminar.classList.add("eliminar");

  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnEliminar);

  document.getElementById(categoria).appendChild(li);

  tareaInput.value = "";
};

agregarBtn.addEventListener("click", agregarTarea);
