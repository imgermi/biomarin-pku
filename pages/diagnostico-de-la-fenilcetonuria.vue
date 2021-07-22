<template>
  <div class="container">
    <InternaTema>Fenilcetonuria (PKU)</InternaTema>
    <h1 v-font="$getFont('Playfair Display', 400)">Diagnóstico</h1>
    <div class="inner-container">
      <h2 v-font="$getFont('Playfair Display', 400)">
        La Fenilcetonuria (PKU) puede detectarse fácilmente por medio de un
        simple análisis de sangre.
      </h2>
      <p
        v-font="[
          $getFont('Roboto', 200),
          $getFont('Roboto', 500, 'normal', { selector: 'strong' }),
        ]"
      >
        La pesquisa neonatal es el modo más eficaz de diagnosticar la
        Fenilcetonuria. La recolección de sangre debe realizarse preferentemente
        <strong>entre 48 horas y cinco días después</strong> de la primera
        exposición a la dieta proteica, es decir, a la lactancia materna.
      </p>

      <div class="img-wrapper tiene-decoracion-diagnostico">
        <img
          width="851"
          height="605"
          src="~assets/img/diagnostico-pku.png"
          srcset="
            ~assets/img/diagnostico-pku.png    1x,
            ~assets/img/diagnostico-pku-2x.png 2x
          "
          alt=""
        />
      </div>

      <hr />

      <div v-font="$getFont('Roboto', 200, 'italic')" class="nota">
        Los recién nacidos detectados con niveles elevados de Fenilalanina son
        recetados para una nueva evaluación diagnóstica. En caso de confirmarse
        el diagnóstico de Fenilcetonuria, deben iniciar el tratamiento.
      </div>

      <SeccionContacto />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Diagnóstico',
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  color: $brand-color;
}
.inner-container {
  @include mq($from: desktop) {
    width: 80%;
    margin: 0 auto;
    padding: 4rem 3rem 0;
  }
}
h2 {
  font-size: rem(65px);
  text-align: center;
  line-height: 1.1;
  margin: 1em 0 3rem;
}
p {
  font-size: rem(30px);
  font-weight: 200;
  text-align: center;
  strong {
    font-weight: 500;
  }
}
.img-wrapper {
  margin-top: 3rem;
  &.tiene-decoracion-diagnostico {
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 100px;
      height: 20px;
      margin-left: 50%;
      transform: translateX(-50vw);
      background: url('~assets/img/diagnostico-decoracion-1x.png') no-repeat
        left bottom;
      background-size: contain;
      position: absolute;
      left: 0;
      bottom: 20px;
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: url('~assets/img/diagnostico-decoracion-2x.png');
      }
    }
  }
  @include mq($from: desktop) {
    max-width: 75%;
  }
}
.nota {
  display: block;
  padding: rem(15px) rem(30px);
  margin: 0 auto;
  border-radius: 12px;
  color: white;
  text-align: center;
  font-size: rem(30px);
  font-style: italic;
  background-color: $brand-color;
}
</style>
