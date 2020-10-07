<template>
  <div>
    <div>
      <b-navbar type="danger" variant="dark">
        <b-navbar-nav>
          <NuxtLink to="/">Início</NuxtLink>
          <div class="divmenu">
            <NuxtLink to="/publications">Publicações</NuxtLink>
          </div>
          <div class="divmenudois">
            <NuxtLink to="/publish">Publicar</NuxtLink>
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>