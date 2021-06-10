<template>
  <div class="container">
    <InternaTema>Fenilcetonuria (PKU)</InternaTema>
    <div
      v-font="[
        $getFont('Roboto', 200),
        $getFont('Roboto', 400, 'normal', { selector: 'strong' }),
        $getFont('Roboto', 200, 'italic', { selector: 'em' }),
      ]"
      class="inner-container"
    >
      <h1 v-font="$getFont('Playfair Display', 400)">
        ¿Qué es la fenilcetonuria (PKU)?
      </h1>
      <p>
        La fenilcetonuria, que también es conocida como PKU
        <em> (del inglés, phenylketonuria) </em>
        es una enfermedad poco frecuente, congénita, causa por una alteración
        genética de herencia autosómica recesiva, es decir, el padre y la madre
        transmiten, cada uno, el gen mutado al bebé.
      </p>
      <ul class="has-flechas">
        <li>
          Esta <strong>alteración genética</strong> causa un error en el
          metabolismo de la fenilalanina, lo que genera la acumulación de ese
          aminoácido en la sangre y reduce la producción de otras importantes
          sustancias cerebrales y sistémicas. El mayor efecto de la acumulación
          de la fenilalanina en la sangre es un
          <strong>efecto tóxico</strong> que puede dañar el cerebro y causar
          lesiones permanentes, como la discapacidad intelectual.
        </li>
        <li>
          Los <strong>recién nacidos</strong> con fenilcetonuria no presentan
          los síntomas inicialmente. Sin embargo, los bebés sin tratamiento
          generalmente desarrollan señales de la enfermedad en los primeros
          meses de vida. Los síntomas pueden ser leves o graves e incluyen la
          discapacidad intelectual.
        </li>
        <li>
          <strong>Síntomas</strong> de la fenilcetonuria:
          <ul class="has-circulos">
            <li>Problemas sociales o de conducta</li>
            <li>Problemas neurológicos como convulsiones y temblores</li>
            <li>Hiperactividad</li>
            <li>Alteraciones en el crecimiento</li>
            <li>Dermatitis atópica (eccema)</li>
            <li>Microcefalia</li>
            <li>
              Olor desagradable en la respiración, piel u orina del menor.
            </li>
          </ul>
        </li>
        <li>
          Los <strong>niños</strong> con la forma clásica de fenilcetonuria
          (PKU), que es la más grave, pueden desarrollar discapacidad
          intelectual permanente si no reciben tratamiento. Los pacientes con
          las formas menos graves de la enfermedad pueden presentar alteraciones
          neurológicas y conductuales en niveles variables, pero la mayoría de
          los niños con estas formas menos severas, igualmente necesitan
          tratamiento para evitar el retraso intelectual, entre otras
          complicaciones.
        </li>
      </ul>
    </div>

    <div class="texto-decorativo">
      <img
        width="659"
        height="139"
        src="~assets/img/acordate-de-mi.svg"
        alt="Acordate de mi"
      />
    </div>

    <SeccionContacto />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '¿Qué es la fenilcetonuria (PKU)?',
    }
  },
}
</script>

<style lang="scss" scoped>
.inner-container {
  max-width: rem(980px);
}
h1 {
  color: $brand-color;
}
p {
  font-size: rem(35px);
  font-weight: 200;
  em {
    font-style: italic;
  }
}

ul.has-flechas {
  position: relative;
  padding: 0;
  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    position: absolute;
    left: 1rem;
    top: 0;
    background-color: black;
  }
  > li {
    font-size: rem(30px);
    font-weight: 200;
    margin: 1rem 0;
    padding: 2rem 0 2rem 4.5rem;
    list-style: none;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 35px;
      height: 35px;
      background: url('~assets/icons/slider-arrow-right.svg') no-repeat center;
      background-size: contain;
      position: absolute;
      left: 0;
    }
    strong {
      font-weight: 500;
    }
  }
  @include mq($from: tablet) {
    > li {
      &::before {
        width: 40px;
        height: 40px;
      }
    }
  }
}

ul.has-circulos {
  position: relative;
  padding: 0;
  > li {
    font-size: rem(28.9px);
    margin: 1.1rem 0;
    padding-left: 1.5rem;
    list-style: none;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: rem(10.5px);
      height: rem(10.5px);
      border-radius: 50%;
      background-color: $brand-color;
      position: absolute;
      left: 0;
      top: calc(0.6em - 5.25px);
    }
  }
}

.texto-decorativo {
  height: 139px;
  margin: 5rem 0;
  position: relative;
  img {
    max-width: calc(80vw);
    position: absolute;
    right: 0;
  }
  @include mq($from: tablet) {
    max-width: 500px;
  }
}
</style>
