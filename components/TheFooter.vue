<template>
  <footer v-font="[$getFont('Roboto', 200)]" class="pie">
    <div class="container">
      <div class="pie-contenedor-interno">
        <nav class="menu">
          <ul v-font="$getFont('Playfair Display', 400)" class="menu-lista">
            <li>
              <NuxtLink to="/"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/la-campana"> La campaña </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/que-es-la-fenilcetonuria">
                Fenilcetonuria (PKU)
              </NuxtLink>
              <ul v-font="$getFont('Roboto', 200)">
                <li>
                  <NuxtLink to="/que-es-la-fenilcetonuria">
                    ¿Qué es la fenilcetonuria (PKU)?
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/diagnostico-de-la-fenilcetonuria">
                    Diagnóstico
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tratamiento-y-avances-sobre-la-fenilcetonuria">
                    Tratamiento y avances
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/la-fenilcetonuria-en-nuestro-pais">
                    La enfermedad en nuestro país
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/fundacion-enhue">Información Útil </NuxtLink>
              <ul v-font="$getFont('Roboto', 200)">
                <li>
                  <NuxtLink to="/fundacion-enhue"> Fundación Enhué </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/centros-de-tratamiento-de-la-fenilcetonuria">
                    Centros de tratamiento
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/apoyo-al-paciente-con-fenilcetonuria">
                    Apoyo al paciente
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/consultas-sobre-la-fenilcetonuria">
                    Consultas
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="redes">
          <h2 v-font="$getFont('Playfair Display', 400)">
            <NuxtLink to="/">Acordate de <u>mí.</u></NuxtLink>
          </h2>

          <RedesSociales color="gris" />

          <div class="logos">
            <!-- TODO: Enlace al sitio de la fundación Enhué -->
            <a href="" rel="noopener noreferrer" target="_blank">
              <img
                width="180"
                height="52"
                src="~assets/img/fundacion-enhue-logo.png"
                srcset="
                  ~assets/img/fundacion-enhue-logo.png    1x,
                  ~assets/img/fundacion-enhue-logo-2x.png 2x
                "
                alt="Fundación Enhué"
              />
            </a>

            <!-- TODO: Enlace al sitio de FENI -->
            <a href="" rel="noopener noreferrer" target="_blank">
              <img
                width="48.5"
                height="52"
                src="~assets/img/feni-isologo.png"
                srcset="
                  ~assets/img/feni-isologo.png    1x,
                  ~assets/img/feni-isologo-2x.png 2x
                "
                alt="FENI"
              />
            </a>

            <a
              href="https://www.biomarin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                width="188"
                height="28"
                src="~assets/img/biomarin-logo.svg"
                alt="BioMarin"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="legales">
        <p class="legales-copy">Copyright @ 2021 All Rights Reserved.</p>

        <nav id="legales" class="legales-nav">
          <!-- TODO: Enlace a Términos y Condiciones -->
          <a href="" target="_blank">Términos y Condiciones</a>
          <!-- TODO: Enlace a Política de Privacidad -->
          <a href="" target="_blank">Política de Privacidad</a>
        </nav>

        <a
          href="https://www.biomarin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          www.biomarin.com
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.pie {
  font-size: 19.3px;
  font-weight: 200;
  color: #868686;
  background-color: #fbfbfb;
  padding: 70px 0 30px;
  section {
    margin: 0 20px 20px 0;
  }
  h2 {
    font-size: 31.5px;
    font-weight: 400;
    color: black;
    margin-bottom: 40px;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 0.9em;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
}

.pie-contenedor-interno {
  display: flex;
  flex-direction: column;
}

/* Redes y logos */
.redes {
  flex-grow: 2;
  h2 {
    font-size: 24.5px;
    margin-bottom: 40px;
    u {
      text-decoration: underline;
    }
    a {
      text-decoration: none;
    }
  }
  .logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 40px;
    a {
      display: block;
      margin: 20px 0;
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
}

/* Menú */
.menu-lista {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > li {
    font-size: 20px;
    color: #1a1a1a;
    &:not(:last-child) {
      margin-right: 1rem;
    }
    > a {
      display: block;
      margin-bottom: rem(30px);
    }
    li {
      font-size: 14px;
      font-weight: 200;
      margin-bottom: rem(26px);
    }
  }
  @include mq($from: tablet) {
    flex-direction: row;
  }
}

/* Legales */
.legales {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid #9b9b9b;
  margin-top: 2rem;
  padding: 1rem 0;
  color: #6f6f6e;
  font-size: 12px;
  font-weight: 200;
  line-height: 1.2;
  @include mq($from: tablet) {
    padding-right: 30px;
  }
}
.legales-nav {
  margin-right: 1em;
  a {
    &:hover {
      text-decoration: underline;
    }
    &:not(:last-child) {
      &::after {
        content: '|';
        display: inline-block;
        margin: 0 0.6em;
      }
    }
  }
}

@include mq($from: tablet) {
  .pie-contenedor-interno {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .redes {
    flex-grow: 1;
  }
  .menu {
    flex-grow: 2;
  }
}
</style>
