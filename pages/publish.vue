<template>
  <div>
    <form class="publicação" id="formulario" novalidate>
      <h1>Faça uma publicação</h1>
      <label class="label" for="nome">Nome da publicação* :</label>
      <input
        class="nome-label"
        type="text"
        placeholder="Nome da publicação* "
      />

      <p><label class="label" for="nome">Digite sua Publicação* </label></p>
      <textarea
        class="nome-label"
        id="comentario"
        cols="50"
        rows="5"
        placeholder="Digite aqui sua publicação*"
      ></textarea>
      <br />
      <button class="btn" type="submit">Publicar</button>
    </form>
    <p class="erro" id="resposta"></p>
  </div>
</template>


 <script 
 @import "../assets/js/publish.js";
 </script>
<style>@import "../assets/css/estilo.scss";</style>;
