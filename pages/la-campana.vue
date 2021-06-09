<template>
  <div>
    <div
      v-font="$getFont('Playfair Display', 400, 'normal', { selector: 'h2' })"
      class="container"
    >
      <InternaTema>La campaña</InternaTema>

      <div class="bloque-introductorio">
        <div>
          <p v-font="$getFont('Roboto', 200)" class="intro">
            La Campaña “Acordate de Mí” es un movimiento para concientizar sobre
            los retos a los que se enfrentan las personas que viven con
            Fenilcetonuria (PKU) todos los días, y para fomentar la mejora de la
            calidad de vida de estos pacientes y sus familiares.
          </p>

          <section>
            <h2>Acordate de mí</h2>

            <p>
              La campaña tiene un enfoque especial a las personas con
              Fenilcetonuria adultas que ya han transitado un largo camino con
              la enfermedad. Desde muy temprano tuvieron que adaptarse a una
              serie de dietas y restricciones que seguramente provocaron
              momentos no muy felices en sus vidas.
            </p>
            <p>
              Recordar es volver a vivir a través de la memoria un suceso, una
              acción, es bucear en el pasado teniendo la esperanza de encontrar
              algo que ayude a resignificar el presente.
            </p>
            <p>
              Aunque la sensación de lo vivido no se puede cambiar, sí se puede
              usar como motivación para seguir avanzando y sentar nuevas bases
              para construir un futuro mejor.
            </p>
            <p>
              La historia de Julia es la historia de muchas personas con PKU que
              han atravesado la enfermedad y al día de hoy sienten que no se
              puede hacer más nada.
            </p>
          </section>
        </div>

        <div class="contenedor-imagenes">
          <div class="img-wrapper">
            <img
              width="616"
              height="710"
              src="~assets/img/campania.png"
              srcset="
                ~assets/img/campania.png    1x,
                ~assets/img/campania-2x.png 2x
              "
              alt=""
            />
          </div>
          <div class="texto-decorativo">
            <img
              width="659"
              height="139"
              src="~assets/img/acordate-de-mi.svg"
              alt="Acordate de mi"
            />
          </div>
        </div>
      </div>

      <section>
        <h2>Algunas de nuestras causas en esta campaña:</h2>

        <div class="causa">
          <img
            width="412"
            height="412"
            src="~assets/img/campania-causa-1.png"
            srcset="
              ~assets/img/campania-causa-1.png    1x,
              ~assets/img/campania-causa-1-2x.png 2x
            "
            alt=""
          />
          <p>
            Demostrar quiénes son los pacientes y cuidadores que viven a diario
            con los desafíos de la Fenilcetonuria.
          </p>
        </div>

        <div class="causa">
          <img
            width="412"
            height="412"
            src="~assets/img/campania-causa-2.png"
            srcset="
              ~assets/img/campania-causa-2.png    1x,
              ~assets/img/campania-causa-2-2x.png 2x
            "
            alt=""
          />
          <p>
            Apoyar el regreso y seguimiento al tratamiento para los pacientes
            adultos con Fenilcetonuria.
          </p>
        </div>
      </section>

      <section class="seccion-apoyo">
        <h2>¿Cómo podés apoyar esta campaña?</h2>

        <div class="apoyo-inner">
          <div class="apoyo apoyo--instagram">
            <div>
              Seguinos en el Instagram de <br />la campaña
              <!-- TODO: Enlace a Instagram de la campaña -->
              <a
                v-font="$getFont('Roboto', 500)"
                href="https://www.instagram.com/acordatedemi/"
                target="_blank"
                rel="noreferrer noopener"
                >@acordatedemi</a
              >
            </div>
          </div>

          <div class="apoyo apoyo--compartir">
            Interectuá con nuestro contenido<br />
            y compartilo en tus redes sociales.
          </div>
        </div>
      </section>
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
      title: 'La campaña',
      bodyAttrs: {
        class: 'la-campana',
      },
    }
  },
}
</script>

<style lang="scss">
.la-campana {
  main {
    padding-bottom: 0;
  }
}
</style>

<style lang="scss" scoped>
.bloque-introductorio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div {
    flex: 1 1 auto;
    width: 60%;
  }
  .contenedor-imagenes {
    width: 40%;
    margin: 0 0 10rem;
  }
  .img-wrapper {
    width: calc(100% - 14px);
  }
  @include mq($from: tablet) {
    flex-direction: row;
    .contenedor-imagenes {
      margin: 10rem 0 0 1rem;
    }
  }
}

h2 {
  font-size: rem(50px);
  font-weight: 400;
  color: $brand-color;
  margin-bottom: 1em;
}
p {
  font-size: rem(30px);
  font-weight: 200;
  &.intro {
    font-size: rem(35px);
    margin: 3rem 0 4rem;
  }
}
section {
  margin-bottom: 10rem;
}

.texto-decorativo {
  margin: 4rem 0;
  img {
    position: absolute;
    right: 0;
    max-width: calc(40vw - 4rem);
    height: auto;
  }
  @media (min-width: 1350px) {
    img {
      max-width: 100%;
    }
  }
}

.causa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1px solid #00000052;
  }
  p {
    max-width: rem(570px);
    font-size: rem(35px);
    text-align: center;
  }
  @include mq($from: tablet) {
    flex-direction: row;
    p {
      text-align: left;
    }
    img {
      margin-right: 2rem;
    }
    &:nth-child(odd) {
      flex-direction: row-reverse;
      img {
        margin-right: 0;
        margin-left: 2rem;
      }
    }
  }
}

.apoyo-inner {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 8rem 0;
}
.apoyo {
  display: flex;
  align-items: center;
  font-size: rem(35px);
  font-weight: 200;
  margin: 0 1em 2.5em 0;
  &::before {
    content: '';
    display: block;
    width: 87px;
    height: 87px;
    margin-right: 0.9em;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: brightness(0) saturate(100%) invert(77%) sepia(9%) saturate(674%)
      hue-rotate(356deg) brightness(90%) contrast(84%);
  }
  &--instagram::before {
    background-image: url('~assets/icons/instagram.svg');
  }
  &--compartir::before {
    background-image: url('~assets/icons/compartir.svg');
  }
  a {
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
  @include mq($from: desktop) {
    justify-content: center;
  }
}

.seccion-contacto {
  background-color: $brand-color;
  padding: 4rem 0;
  margin-bottom: 0;
}
</style>
