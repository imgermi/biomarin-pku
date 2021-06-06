<template>
  <div class="container">
    <InternaTema>Información Útil</InternaTema>

    <h1 v-font="$getFont('Playfair Display', 400)">Consultas</h1>
    <div class="inner-container">
      <div>
        <h2 v-font="$getFont('Playfair Display', 400)">
          ¡Muchas gracias<br />
          por tu mensaje!
        </h2>
        <p v-font="$getFont('Roboto', 200)">
          Mientras te enviamos más información,<br class="is-hidden-mobile" />
          podes seguirnos en nuestras redes.
        </p>

        <RedesSociales />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Consultas',
      bodyAttrs: {
        class: 'has-brand-color-bg',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: rem(50px);
}
h2 {
  font-size: 60px;
  line-height: 1;
  margin: 0.6em 0 0.5em 0;
  @include mq($from: tablet) {
    font-size: rem(90px);
    line-height: 1.1;
  }
  @include mq($from: wide) {
    font-size: rem(115px);
  }
}
p {
  font-size: rem(30px);
  line-height: 1.2;
  font-weight: 200;
  margin-bottom: 2.5rem;
}
</style>
