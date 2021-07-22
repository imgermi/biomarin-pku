<template>
  <div>
    <div class="has-black-bg"></div>

    <div class="has-white-bg">
      <div class="container">
        <div class="equilibrio">
          <h2 v-font="$getFont('Playfair Display', 700)">
            Todo se trata de <strong>equilibrio</strong>
          </h2>

          <div class="equilibrio-parte-1">
            <div class="img-wrapper">
              <img
                width="856"
                height="633"
                src="~assets/img/equilibrio-1.png"
                srset="~assets/img/equilibrio-1.png 1x, ~assets/img/equilibrio-1_2x.png 2x"
                alt=""
              />
            </div>

            <img
              width="747"
              height="557"
              src="~assets/img/equilibrio-2.png"
              srset="~assets/img/equilibrio-2.png 1x, ~assets/img/equilibrio-2_2x.png 2x"
              alt=""
            />
          </div>

          <div class="equilibrio-parte-2">
            <img
              width="659"
              height="139"
              src="~assets/img/equilibrio-acordate-de-mi.svg"
              alt="Acordate de mí"
            />

            <img
              width="813"
              height="542"
              src="~assets/img/equilibrio-3.png"
              srset="~assets/img/equilibrio-3.png 1x, ~assets/img/equilibrio-3_2x.png 2x,"
              alt=""
            />
          </div>

          <div class="tomar-las-riendas">
            <p>
              Tomé las riendas de mi vida cambiando mis hábitos. Comprendí la
              importancia de mantener un control adecuado y continuo,
              principalmente asistiendo a las consultas pactadas con mi médico y
              mi nutricionista.
            </p>
            <div class="img-wrapper">
              <img
                width="859"
                height="663"
                src="~assets/img/tomar-las-riendas.png"
                alt=""
                srcset="
                  ~assets/img/tomar-las-riendas.png    1x,
                  ~assets/img/tomar-las-riendas_2x.png 2x
                "
              />
            </div>
          </div>
        </div>

        <p v-font="$getFont('Playfair Display', 400)" class="crear-conciencia">
          Ayudemos a crear conciencia entre quienes lo necesitan para comprender
          y no subestimar a la FENILCETONURIA, para que asistan a su consulta
          médica y se informen sobre las opciones de tratamiento disponibles.
        </p>
      </div>

      <div v-font="$getFont('Playfair Display', 400)" class="cita">
        <div class="container">
          <p>
            "La falta de control<br />
            y el desequilibro<br />
            como consecuencia, me llevó a tomar las riendas de mi vida cambiando
            mis hábitos"
          </p>
        </div>
      </div>

      <div class="container">
        <div class="seccion-visita-medico">
          <h2>Visitá a tu médico</h2>
          <div v-font="$getFont('Playfair Display', 400)" class="slogan">
            Acordate <br />
            <span>de <b>mí.</b></span>
          </div>
          <p>
            Cuando creas que todo es cuesta arriba,<br />
            recordá que
            <strong>nunca es tarde para retomar el equilibrio.</strong>
          </p>
        </div>
      </div>
    </div>

    <section class="seccion-contacto">
      <div class="container">
        <InternaTema>Consultas</InternaTema>
        <FormContacto />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
      bodyAttrs: {
        class: 'is-home has-black-header',
      },
    }
  },
}
</script>

<style lang="scss">
.is-home {
  background-color: #000000;
  main {
    padding: 0;
  }
}
</style>

<style lang="scss" scoped>
.equilibrio {
  padding: 8.5rem 0 3rem;
  h2 {
    line-height: 1;
    text-align: center;
    font-size: 30px;
    color: $brand-color;
    text-transform: uppercase;
    strong {
      font-size: 45px;
    }
  }
  @include mq($from: tablet) {
    h2 {
      font-size: 2.44rem;
      strong {
        font-size: 6.94rem;
      }
    }
  }
}

.equilibrio-parte-1 {
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 6rem auto 0;
  > :first-child {
    margin-left: -14%;
  }
  > :last-child {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  @include mq($from: tablet) {
    flex-direction: row;
    align-items: flex-start;
    > :first-child {
      width: 65%;
      margin-right: 2rem;
    }
    > :last-child {
      width: 55%;
      margin-top: 8rem;
    }
  }
}

.equilibrio-parte-2 {
  display: flex;
  flex-direction: column-reverse;
  max-width: 90%;
  margin: 0 auto;
  > :first-child {
    max-width: 80vw;
    margin: 0 0 3rem auto;
  }
  > :last-child {
    width: 90%;
    height: auto;
    margin: 3rem auto 0 0;
  }
  @include mq($from: tablet) {
    flex-direction: row;
    align-items: flex-start;
    > :first-child {
      width: 45%;
      margin-top: 3rem;
      margin-left: -20%;
      margin-right: 2rem;
    }
    > :last-child {
      width: 55%;
    }
  }
}

.tomar-las-riendas {
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  > * {
    flex: 1 1 50%;
  }
  p {
    font-weight: 200;
    font-size: 18px;
    margin: 0 0 2em 0;
  }
  .img-wrapper {
    max-width: 80%;
  }
  @include mq($from: tablet) {
    flex-direction: row;
    align-items: center;
    .img-wrapper {
      max-width: auto;
    }
    p {
      font-size: rem(30px);
      margin: 0 5rem 0 0;
    }
  }
}

.crear-conciencia {
  font-size: 30px;
  line-height: 1;
  color: $brand-color;
  text-align: center;
  margin: 7rem 0 8rem;
  @include mq($from: tablet) {
    font-size: 2.81rem;
  }
}

.cita {
  position: relative;
  overflow: hidden;
  br {
    display: none;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 38%;
    width: 1016px;
    height: 709px;
    background: url('~assets/img/riendas-de-mi-vida.png') no-repeat center;
    background-size: contain;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url('~assets/img/riendas-de-mi-vida_2x.png');
    }
    opacity: 0.5;
  }
  p {
    font-size: 30px;
    line-height: 1.1;
    max-width: 48rem;
    text-transform: uppercase;
    padding: 7rem 0 15rem 0;
    margin: 0 0 0 auto;
    position: relative;
  }
  @include mq($from: tablet) {
    p {
      font-size: 2.8rem;
    }
    br {
      display: block;
    }
  }
}

.seccion-visita-medico {
  padding: 12.5rem 0;
  h2 {
    font-size: rem(53px);
    font-weight: 200;
    color: $brand-color;
  }
  .slogan {
    font-size: 70px;
    line-height: 1.1;
    margin: 2.5rem 0 4rem;
    span {
      display: block;
      width: max-content;
      margin: 0 1em 0 auto;
    }
    b {
      font-weight: 400;
      text-decoration: underline;
    }
  }
  p {
    font-size: rem(30px);
    font-weight: 200;
  }
  @media (min-width: 400px) {
    .slogan {
      font-size: 80px;
    }
  }
  @include mq($from: tablet) {
    .slogan {
      font-size: 8.74rem;
    }
  }
}

.seccion-contacto {
  background-color: $brand-color;
  padding: 4rem 0 2rem;
  margin-bottom: 0;
}
</style>
