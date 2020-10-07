<template>
  <div>
    <div>
      <b-carousel id="carousel-fade" fade indicators>
        <b-carousel-slide class="imagem" img-src="../assets/img/jeff.jpg">
        </b-carousel-slide>
        <b-carousel-slide class="imagem" img-src="../assets/img/blair.jpg">
        </b-carousel-slide>
        <b-carousel-slide class="imagem" img-src="../assets/img/satan.jpg">
        </b-carousel-slide>
      </b-carousel>
    </div>

    <br />

    <div class="grid-main">
      <div class="card1">
        <b-card
          title="Irmãos"
          img-src="../assets/img/irmão.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Creepypasta publicada por Victor Leão Dal Rovere
          </b-card-text>

          <NuxtLink to="/publications">Ler</NuxtLink>
        </b-card>
      </div>

      <div class="card2">
        <b-card
          title="Um lugar feliz"
          img-src="../assets/img/casa.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Creepypasta publicada por Gabriel Azevedo </b-card-text>

          <NuxtLink to="/publications">Ler</NuxtLink>
        </b-card>
      </div>

      <div class="card3">
        <b-card
          title="Alguém está dentro do corpo do meu marido"
          img-src="../assets/img/possesso.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Creepypasta publicada por Gabriel Azevedo </b-card-text>

          <NuxtLink to="/publications">Ler</NuxtLink>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
