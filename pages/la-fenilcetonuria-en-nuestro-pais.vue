<template>
  <div class="container">
    <InternaTema>Fenilcetonuria (PKU)</InternaTema>
    <h1 v-font="$getFont('Playfair Display', 400)">
      La enfermedad en nuestro país
    </h1>

    <div class="inner-container con-imagen">
      <img
        src="~assets/img/pku-en-argentina.svg"
        width="556"
        height="1274"
        alt=""
      />
      <div
        v-font="[
          $getFont('Roboto', 400),
          $getFont('Roboto', 500, 'normal', { selector: 'b' }),
          $getFont('Roboto', 200, 'italic', { selector: 'small' }),
          $getFont('Playfair Display', 700, 'normal', { selector: 'strong' }),
        ]"
        class="texto"
      >
        <p>
          La pesquisa neonatal de hiperfenilalaninemias (HPA) realizada por la
          <b>Fundación de Endocrinología Infantil (FEI)</b> en la Argentina
          comenzó en 1985 y sigue coexistiendo en la actualidad con diversos
          programas realizados desde el sector público.
        </p>

        <hr />

        <p class="texto-inner">
          A la fecha <strong>1,300,000</strong> niños estudiados, la
          Fenilcetonuria (PKU) mostró una incidencia de
          <strong>1:12,000</strong> recién nacidos (RN).
        </p>
        <p>
          Esto coincide con otros programas actualmente en marcha en nuestro
          país, aunque con ligeras variaciones posiblemente debidas a
          diferencias étnicas de los individuos rastreados.
        </p>
      </div>
    </div>

    <div class="inner-container">
      <p v-font="$getFont('Playfair Display', 400)" class="destacado">
        Contar con un programa de pesquisa neonatal permite realizar un
        diagnóstico oportuno, para ofrecer seguimiento y tratamiento.
      </p>
      <p>
        La experiencia adquirida hasta la fecha ha permitido diagnosticar y
        tratar tanto a pacientes detectados tempranamente, como a niños sin
        diagnóstico oportuno, debido a la falta de la pesquisa neonatal y a
        errores en el diagnóstico y seguimiento¹.
      </p>

      <p>
        <small>
          Referencia:1. Chiesa A y cols. Acta Pediátrica de México Volumen 33,
          Núm. 6, noviembre-diciembre, 2012
        </small>
      </p>
    </div>

    <SeccionContacto />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'La enfermedad en nuestro país',
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  color: $brand-color;
}
.inner-container {
  &.con-imagen {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
    img {
      width: 100%;
      height: auto;
      margin-top: 2rem;
    }
  }
}
.texto-inner {
  max-width: rem(540px);
  margin: 3em auto;
}
p {
  font-size: rem(30px);
  font-weight: 200;
  text-align: center;
  b {
    font-weight: 500;
  }
  strong {
    font-size: rem(95px);
    font-weight: 700;
    color: $brand-color;
    display: block;
  }
  small {
    font-size: rem(25px);
    font-style: italic;
    display: block;
    margin-top: 4rem;
  }
}
.destacado {
  font-size: rem(75px);
  line-height: 1.1;
  font-weight: 400;
}
@include mq($from: tablet) {
  .inner-container {
    padding: 0 3rem;
    &.con-imagen {
      flex-direction: row;
      img {
        flex: 1 0 auto;
        width: 40%;
        padding-right: 15px;
        margin-top: 0;
      }
      .texto {
        margin-top: 8rem;
      }
    }
  }
  .destacado {
    font-size: 32px;
  }
}
</style>
