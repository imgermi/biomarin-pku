<template>
  <div>
    <div class="container">
      <InternaTema>Información Útil</InternaTema>
      <h1 v-font="$getFont('Playfair Display', 400)">Fundación Enhué</h1>

      <div class="inner-container">
        <div v-font="[$getFont('Roboto', 200)]">
          <p>
            Enhué fue creada en 2010 con el fin de dar a conocer a la sociedad
            las Enfermedades Poco Frecuentes (EPOF), el 50% de este tipo de
            patologías son crónicas y graves.
          </p>
          <p>
            Nuestro compromiso es brindar asistencia para mejorar la calidad de
            vida de personas que conviven con una Enfermedad Poco Frecuente.
            Buscamos capacitar a los profesionales de la salud, apoyar la
            investigación y su difusión.
          </p>
        </div>
      </div>
    </div>

    <div class="container slider">
      <ClientOnly>
        <VueTinySlider
          :mouse-drag="true"
          :center="true"
          :items="1"
          :nav="false"
          :autoplay="false"
        >
          <div>
            <figure>
              <div class="img-wrapper">
                <img
                  width="695"
                  height="521"
                  src="~assets/img/fundacion-enhue-slide-1.png"
                  srcset="
                    ~assets/img/fundacion-enhue-slide-1.png    1x,
                    ~assets/img/fundacion-enhue-slide-1-2x.png 2x
                  "
                  alt=""
                />
              </div>
              <figcaption v-font="$getFont('Roboto', 200)">
                Concientizamos a la comunidad médica y al público en general en
                la sospecha de una EPOF.
              </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <div class="img-wrapper">
                <img
                  width="695"
                  height="521"
                  src="~assets/img/fundacion-enhue-slide-2.png"
                  srcset="
                    ~assets/img/fundacion-enhue-slide-2.png    1x,
                    ~assets/img/fundacion-enhue-slide-2-2x.png 2x
                  "
                  alt=""
                />
              </div>
              <figcaption>
                Brindar acompañamiento integral a familias que conviven con una
                EPOF.
              </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <div class="img-wrapper">
                <img
                  width="695"
                  height="521"
                  src="~assets/img/fundacion-enhue-slide-3.png"
                  srcset="
                    ~assets/img/fundacion-enhue-slide-3.png    1x,
                    ~assets/img/fundacion-enhue-slide-3-2x.png 2x
                  "
                  alt=""
                />
              </div>
              <figcaption>
                Generar espacios de formación e intercambio para grupos y
                asociaciones de pacientes.
              </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <div class="img-wrapper">
                <img
                  width="695"
                  height="521"
                  src="~assets/img/fundacion-enhue-slide-4.png"
                  srcset="
                    ~assets/img/fundacion-enhue-slide-4.png    1x,
                    ~assets/img/fundacion-enhue-slide-4-2x.png 2x
                  "
                  alt=""
                />
              </div>
              <figcaption>
                Capacitar en los diferentes escenarios y desafíos que presentan
                actualmente las EPOF.
              </figcaption>
            </figure>
          </div>
        </VueTinySlider>
      </ClientOnly>
    </div>

    <div class="container">
      <div class="contenedor-logos">
        <a
          href="https://www.fundacionenhue.org"
          target="_blank"
          rel="noopener noreferrer"
          class="logo logo--enhue"
        >
          <img
            width="113"
            height="123"
            src="~assets/img/fundacion-enhue-isologo.svg"
            alt="Fundación Enhué"
          />
          <div class="logo-mensaje">Visitá nuestro sitio</div>
        </a>

        <!-- TODO: Enlace a sitio de Facebook de FENI -->
        <a class="logo logo--feni">
          <img
            width="121"
            height="129"
            src="~assets/img/feni-isologo.png"
            srcset="
              ~assets/img/feni-isologo.png    1x,
              ~assets/img/feni-isologo-2x.png 2x
            "
            alt="FENI"
          />
          <div class="logo-mensaje">Seguinos en facebook</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Fundación Enhué',
      bodyAttrs: {
        class: 'is-fundacion',
      },
    }
  },
}
</script>

<style lang="scss">
.is-fundacion {
  background-color: #e5ddd3;
  @include mq($from: desktop) {
    background-image: url('~assets/img/fundacion-enhue-2x.png');
    background-repeat: no-repeat;
    background-position: 55vw 200px;
    background-size: 37% auto;
  }
}
@import 'tiny-slider/src/tiny-slider';
</style>

<style lang="scss" scoped>
.inner-container {
  @include mq($from: desktop) {
    width: 55%;
    padding-right: 4rem;
  }
}
p {
  font-size: rem(30px);
  font-weight: 200;
  margin-top: 0;
}

// SLIDER
.slider {
  box-sizing: border-box;
  position: relative;
  margin-top: 3rem;
  @media (min-width: 500px) {
    padding: 5rem;
  }
}
figure {
  display: flex;
  align-items: center;
  flex-direction: column;
  // Evita recortar el img-wrapper
  margin: 7px;
}
.img-wrapper {
  flex: 1 0 auto;
}
figcaption {
  flex: 1 1 auto;
  font-size: rem(30px);
  font-weight: 200;
  margin-top: 1rem;
}
@include mq($from: desktop) {
  .slider {
    padding: 3rem;
  }
  figure {
    flex-direction: row;
    align-items: center;
  }
  .img-wrapper {
    width: calc(50% - 14px);
  }
  figcaption {
    margin-left: 2rem;
    margin-top: 0;
  }
}
// TODO: Mostrar controles en mobile
/deep/ .tns-controls {
  display: none;
  justify-content: center;
  margin-top: 1 rem;
  width: 100%;
  box-sizing: border-box;
  button {
    width: 40px;
    height: 40px;
    margin: 5px;
    text-indent: -9999999999px;
    border: 0;
    appearance: none;
    background: url('~assets/icons/slider-arrow-right.svg') no-repeat center;
    &[data-controls='prev'] {
      background-image: url('~assets/icons/slider-arrow-left.svg');
    }
  }
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
  }
}

// LOGOS
.contenedor-logos {
  text-align: center;
  margin-top: 6rem;
}
a.logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin: 0 0 3rem;
  img {
    height: 7rem;
    width: auto;
  }
  @include mq($from: desktop) {
    margin-right: 2rem;
    img {
      height: 5rem;
      width: auto;
    }
  }
}
.logo-mensaje {
  font-size: 1.3rem;
  padding: 0.75em 1em;
  margin-left: 1.2em;
  border-radius: 9px;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  .logo--feni & {
    color: black;
    background-color: #a6ce3a;
  }
  .logo--enhue & {
    color: white;
    background-color: #482a6d;
    border: 1px solid black;
  }
  @include mq($from: desktop) {
    font-size: 1rem;
  }
}
</style>
