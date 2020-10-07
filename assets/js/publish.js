const nome = document.getElementById('nome')
const comentario = document.getElementById('comentario')
const resposta = document.getElementById('resposta')



formulario.onsubmit = event => {
    event.preventDefault()

    if (
        validarnome() &&
        validarcomentario()
    ) {
        alert("Publicado com sucesso ")
        resposta.textContent = ""
    }

    function validarnome() {

        nome.value = nome.value.trim()

        if (!nome.value) {
            resposta.textContent = 'O campo Nome da publicação deve ser preenchido!'
            nome.focus()
            return false
        }

        function validarcomentario() {
            comentario.value = comentario.value.trim()

            if (!comentario.value) {

                resposta.textContent = 'Publicação é obrigatorio!'
                comentario.focus()

            }

            if (comentario.value.length < 100) {
                resposta.textContent = 'o campo deve ter no minino 100 caracteres!'
                comentario.focus
                return false
            }
            return true
        }
    }
}