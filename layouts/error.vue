<template>
  <div class="error">
    <div class="container">
      <img width="105" height="89" src="~assets/icons/error-404.svg" alt="" />
      <!-- eslint-disable vue/no-v-html -->
      <h1
        v-font="$getFont('Playfair Display', 400)"
        class="titulo"
        v-html="titulo"
      ></h1>
      <!-- eslint-enable vue/no-v-html -->
      <p
        v-if="statusCode === 404"
        v-font="$getFont('Roboto', 200)"
        class="mensaje"
      >
        Lo sentimos, no hemos podido encontrar la página solicitada.
      </p>
      <CButton to="/">Volver a la página principal</CButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.titulo,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    titulo() {
      return this.statusCode === 404
        ? 'Página no encontrada'
        : this.error.message || 'Hubo un problema'
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  color: $brand-color;
  font-size: rem(75px);
  line-height: 1;
  margin: 0.5em 0 0.2em;
}
p {
  font-size: rem(30px);
  font-weight: 200;
  line-height: 1.3;
  margin-bottom: 2.2em;
}
@include mq($from: tablet) {
  h1 {
    margin: 0;
    line-height: 1.4;
  }
  p {
    line-height: 1.4;
  }
}
</style>
