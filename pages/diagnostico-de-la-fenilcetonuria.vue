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

      <!-- TODO: Cambiar imagen de Diagnóstico -->
      <div class="img-wrapper">
        <img
          width="850"
          height="604"
          src="https://placeholder.pics/svg/850x604/CCC/CCC"
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
    padding: 4rem 3rem 0;
  }
}
h2 {
  font-size: rem(75px);
  text-align: center;
  line-height: 1.1;
  margin-bottom: 3rem;
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
