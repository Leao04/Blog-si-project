const nome = document.getElementById("nome");
const comentario = document.getElementById("comentario");
const resposta = document.getElementById("resposta");

formulario.onsubmit = (event) => {
  event.preventDefault();

  if (validarNomes() | validarComentarios()) return;

  const nome = {
    nome: nome.value.trim(),
    comentario: comentario.value.trim(),
  };

  function validarNomes() {
    nome.value = nome.value.trim();

    if (!nome.value) {
      resposta.textContent = "Campo é obrigatório!";
      resposta.className = "error";
      nomes.focus();
      return false;
    }
    nomes.classList.remove("error");
    return true;
  }

  function validarComentarios() {
    comentario.value = comentario.value.trim();

    if (!comentario.value) {
      resposta.textContent = "Campo é obrigatório!";
      resposta.className = "erro";
      nomes.focus();
      return false;
    }
    nomes.classList.remove("erro");
    return true;
  }
};
