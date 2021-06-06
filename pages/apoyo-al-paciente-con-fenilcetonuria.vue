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
        srcset="~assets/img/apoyo-al-paciente.png x1, ~assets/img/apoyo-al-paciente-2x.png x2"
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
  @include mq($from: desktop) {
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
  max-width: rem(434px);
  margin-right: 83px;
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
    font-size: rem(20px);
    font-weight: 400;
    color: $brand-color;
  }
}
</style>
