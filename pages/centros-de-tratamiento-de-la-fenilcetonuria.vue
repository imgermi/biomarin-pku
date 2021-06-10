<template>
  <div class="container">
    <InternaTema>Información Útil</InternaTema>
    <h1 v-font="$getFont('Playfair Display', 400)">Centros de tratamiento</h1>
    <h2 v-font="$getFont('Roboto', 200)">Encontrá tu doctor</h2>

    <div class="inner-container">
      <Tabs>
        <Tab
          v-for="(tab, tabIndex) in tabs"
          :id="`tab-${tabIndex + 1}`"
          :key="`tab-panel-${tabIndex}`"
          :name="`${tabIndex + 1}`"
        >
          <ul>
            <li v-for="(doctor, doctorIndice) in tab" :key="doctorIndice">
              <div v-font="$getFont('Roboto', 200)" class="card">
                <header>
                  <h3 v-font="$getFont('Playfair Display', 400)">
                    {{ doctor.nombre }}
                  </h3>
                  <p>{{ doctor.especialidad }}</p>
                </header>

                <div
                  v-font="
                    $getFont('Playfair Display', 400, 'normal', {
                      selector: 'dt',
                    })
                  "
                >
                  <dl>
                    <dt>Teléfono:</dt>
                    <dd>{{ doctor.telefono }}</dd>
                  </dl>

                  <dl>
                    <dt>Mail:</dt>
                    <dd>
                      <a
                        class="dont-break-out"
                        :href="`mailto:${doctor.email}`"
                      >
                        {{ doctor.email }}
                      </a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>Dirección:</dt>
                    <dd>{{ doctor.direccion }}</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </Tab>
      </Tabs>

      <!-- TODO: Centros de tratamiento: Email de contacto para pedir ser incluido en el listado -->
      <p v-font="$getFont('Roboto', 200, 'italic')" class="nota">
        Los médicos de Encontrá tu Doctor en Acordate de Mí se registran de
        forma voluntaria y son totalmente responsables de la información
        profesional proporcionada en el momento del registro. Las decisiones
        relativas a la elección e interacción con los médicos registrados en el
        buscador de médicos son responsabilidad exclusiva del paciente. <br />
        <br />

        Si usted es profesional y desea ser incluido dentro de este listado,
        favor de escribirnos a
        <a href="mailto:XXX@biomarin.com">XXX@biomarin.com</a>
      </p>

      <CButton to="/consultas-sobre-la-fenilcetonuria">
        Escribinos tu consulta
      </CButton>
    </div>
  </div>
</template>

<script>
import doctores from '@/config/doctores.json'

export default {
  data() {
    return {
      doctores,
    }
  },
  head() {
    return {
      title: 'Centros de tratamiento',
      bodyAttrs: {
        class: 'is-centros',
      },
    }
  },
  computed: {
    tabs() {
      const chunkSize = 9
      const tabs = []
      for (let i = 0; i < this.doctores.length; i += chunkSize) {
        const chunk = this.doctores.slice(i, i + chunkSize)
        tabs.push(chunk)
      }
      return tabs
    },
  },
}
</script>

<style lang="scss">
.is-centros {
  background-color: #e5ddd3;
}
</style>

<style lang="scss" scoped>
.inner-container {
  padding: 3rem 0 0;
  @include mq($from: wide) {
    padding: 4rem 2rem 0;
  }
}
h2 {
  font-size: rem(35px);
  text-transform: uppercase;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
}
li {
  flex: 0 1 auto;
  width: 100%;
  margin: 1.2rem 0;
  @media (min-width: 400px) {
    max-width: rem(486px);
  }
  @include mq($from: tablet) {
    margin: rem(15px) rem(20px) rem(15px) 0;
    width: calc(50% - 60px);
  }
  @include mq($from: desktop) {
    width: calc(33% - 60px);
  }
}

.card {
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  padding: 20px 30px;
  border-radius: 21px;
  box-shadow: 9px 9px 15px 0px rgba(0, 0, 0, 0.25);
  header {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid #00000082;
    h3 {
      margin: 0;
    }
    p {
      font-weight: 200;
      margin: 0;
    }
  }
  dt {
    font-size: 1.5rem;
    display: inline-block;
    margin-bottom: 0.3rem;
  }
  dd {
    display: inline;
    font-size: 1.3rem;
    font-weight: 200;
    margin-left: 0.8em;
  }
}

.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

.nota {
  font-size: 1.3rem;
  line-height: 1.3;
  font-weight: 200;
  font-style: italic;
  color: #333333;
  margin-bottom: 6rem;
  a {
    font-weight: 400;
    font-style: normal;
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @include mq($from: tablet) {
    max-width: 60%;
  }
}
</style>
