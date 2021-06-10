<template>
  <div class="container">
    <InternaTema>Fenilcetonuria (PKU)</InternaTema>
    <h1 v-font="$getFont('Playfair Display', 400)">Tratamiento y avances</h1>
    <h2 v-font="$getFont('Playfair Display', 400)">
      La Fenilcetonuria es una enfermedad crónica, por lo tanto, debe ser
      tratada durante toda la vida.
    </h2>

    <p>
      El tratamiento más regular consiste en la adopción de una dieta con bajo
      contenido en fenilalanina asociada al uso de la fórmula metabólica. Se
      puede agregar, según la evaluación médica y nutricional, un tratamiento
      medicamentoso.
    </p>

    <ul>
      <li>
        El tratamiento debe ser seguido estrictamente,
        <strong>durante toda la vida</strong>, pues los cambios en los niveles
        de Fenilalanina en la sangre, también pueden generar daños cerebrales.
        Es importante señalar que los avances en el tratamiento de la
        Fenilcetonuria siguen en desarrollo, como las pautas de manejo, nuevos
        tratamientos y la consideración de los aspectos neuropsicológicos de la
        PKU.
      </li>
      <li>
        El tratamiento para cada paciente con Fenilcetonuria debe ser
        individualizado y acompañado por el equipo médico y nutricional, ya que
        los niveles adecuados de nutrientes, así como la limitación de la
        ingesta de Fenilalanina, varían en cada persona.
      </li>
    </ul>

    <p>
      <small v-font="$getFont('Roboto', 200, 'italic')">
        Siempre se deben conocer las opciones de tratamiento y seguir las
        recomendaciones del médico y nutricionista.
      </small>
    </p>

    <SeccionContacto />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Tratamiento y avances',
      bodyAttrs: {
        class: 'is-tratamiento',
      },
    }
  },
}
</script>

<style lang="scss">
.is-tratamiento {
  background-color: #e5ddd3;
}
</style>

<style lang="scss" scoped>
h2 {
  font-size: rem(65px);
  line-height: 1.1;
  font-weight: 400;
  margin: 1em 0 0.5em;
}
p,
li {
  font-size: rem(30px);
  font-weight: 200;
}
ul {
  padding-left: 0;
  margin: 5rem 0;
}
li {
  list-style: none;
  padding-left: 30px;
  margin-bottom: 2rem;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background-color: $brand-color;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 0;
  }
}
small {
  display: block;
  font-size: 1em;
  max-width: rem(900px);
  color: white;
  font-style: italic;
  background-color: $brand-color;
  padding: rem(15px) rem(30px);
  border-radius: 12px;
  margin-left: 30px;
}
@include mq($from: tablet) {
  h2 {
    font-size: rem(75px);
  }
  li {
    padding-left: rem(84px);
    &::before {
      width: rem(36px);
      height: rem(36px);
      top: 4px;
    }
  }
  small {
    margin-left: rem(84px);
  }
}
</style>
