<template>
  <div class="container">
    <InternaTema>Información Útil</InternaTema>

    <h1 v-font="$getFont('Playfair Display', 400)">Consultas</h1>
    <FormContacto />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Consultas',
      bodyAttrs: {
        class: 'es-consultas has-brand-color-bg',
      },
    }
  },
}
</script>

<style lang="scss">
.es-consultas {
  main {
    padding-bottom: 2rem;
  }
}
</style>

<style lang="scss" scoped>
h1 {
  &::after {
    content: '';
    display: inline-block;
    width: 3em;
    height: 1px;
    margin-left: 0.2em;
    background-color: #000000;
  }
  @include mq($from: tablet) {
    &::after {
      width: 7em;
    }
  }
}
</style>
