<template>
  <div class="error">
    <div class="container">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="titulo" v-html="titulo"></div>
      <p v-if="statusCode === 404" class="mensaje">
        La página solicitada puede no estar disponible o haber cambiado de URL
      </p>
      <CButton><NuxtLink to="/">Ir al inicio</NuxtLink></CButton>
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
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    titulo() {
      return this.statusCode === 404
        ? 'Página <br>No encontrada'
        : this.error.message || 'Hubo un problema'
    },
  },
  head() {
    return {
      title: this.titulo.replace('<br>', ''),
    }
  },
}
</script>