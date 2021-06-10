<template>
  <div class="container">
    <InternaTema>Información Útil</InternaTema>
    <h1 v-font="$getFont('Playfair Display', 400)">Apoyo al Paciente</h1>

    <div class="inner-container">
      <img
        class="imagen"
        width="434"
        height="434"
        src="~assets/img/apoyo-al-paciente.png"
        srcset="
          ~assets/img/apoyo-al-paciente.png    1x,
          ~assets/img/apoyo-al-paciente-2x.png 2x
        "
        alt="Tres chicos abrazándose"
      />
      <div
        v-font="[
          $getFont('Roboto', 200),
          $getFont('Roboto', 500, 'normal', { selector: 'a' }),
        ]"
        class="texto"
      >
        <p>
          Si deseás obtener más información <br class="is-hidden-mobile" />
          sobre la organización de pacientes que han colaborado para crear e
          impulsar esta campaña, el apoyo que ofrecen y el trabajo que realizan,
          podés ponerte en contacto a través de
          <a href="mailto:fundacionenhue@fundacionenhue.org">
            fundacionenhue@fundacionenhue.org
          </a>
        </p>

        <p>
          <small>
            Esta campaña ha sido financiada y desarrollada
            <br class="is-hidden-mobile" />
            por BioMarin en colaboración con la Fundación Enhué.
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Apoyo al paciente',
    }
  },
}
</script>

<style lang="scss" scoped>
.inner-container {
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  .texto,
  .imagen {
    flex: 1;
  }
  @include mq($from: tablet) {
    flex-direction: row;
    align-items: center;
  }
  @include mq($from: wide) {
    padding: 3rem 5rem;
  }
}

.imagen {
  width: 100%;
  height: auto;
  max-width: 90%;
}

.texto {
  margin-top: 1.5rem;
}
p {
  font-size: rem(35px);
  line-height: 1.2;
  font-size: 200;
  a {
    font-size: 500;
    text-decoration: none;
    word-wrap: break-word;
    &:hover {
      text-decoration: underline;
    }
  }
  small {
    display: block;
    font-size: 1.3rem;
    font-weight: 400;
    color: $brand-color;
  }
}
@include mq($from: tablet) {
  .imagen {
    max-width: 33%;
    margin-right: 3rem;
  }
}
@include mq($from: desktop) {
  .imagen {
    margin-right: 83px;
  }
}
</style>
