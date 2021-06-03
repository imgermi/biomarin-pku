<template>
  <footer
    v-font="[
      $getFont('Roboto', 200),
      $getFont('Roboto', 400, 'normal', { selector: 'h2' }),
    ]"
    class="pie"
  >
    <div class="container">
      <div class="pie-contenedor-interno">
        <section class="pie-seccion-redes">
          <h2>Acordate de <u>mí.</u></h2>
          <ul>
            <!-- TODO: Cambiar Facebook -->
            <li>
              <a
                href="https://www.facebook.com/xxxxxxxx/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <img
                  width="10"
                  height="18"
                  src="https://placeholder.pics/svg/10x18/DEDEDE/DEDEDE"
                  alt="Facebook"
                />
              </a>
            </li>
            <!-- TODO: Cambiar instagram -->
            <li>
              <a
                href="https://www.instagram.com/xxxxxxxx/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <img
                  width="23"
                  height="23"
                  src="https://placeholder.pics/svg/23/DEDEDE/DEDEDE"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </section>

        <section class="pie-seccion-menu">
          <h2>Menú</h2>
          <nav>
            <ul>
              <li>
                <NuxtLink to="/"> Home </NuxtLink>
              </li>
              <li>
                <NuxtLink to="campania"> La campaña </NuxtLink>
              </li>
              <li>
                <NuxtLink to="fenilcetonuria-pku">
                  Fenilcetonuria (PKU)
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="fundacion-enhue">Información Útil </NuxtLink>
              </li>
            </ul>
          </nav>
        </section>

        <section class="pie-seccion-contacto">
          <h2>Contact Info</h2>
          <address
            class="contacto-caja"
            itemscope
            itemtype="http://schema.org/LocalBusiness"
          >
            <div class="contacto-item is-ubicacion">
              <span class="sr-only">Ubicación</span>
              <!-- TODO: Cambiar dirección -->
              <span
                itemprop="address"
                itemscope
                itemtype="http://schema.org/PostalAddress"
              >
                <span itemprop="streetAddress">Lorem Ipsum 2233</span><br />
                <span itemprop="addressRegion">Argentina</span>
              </span>
            </div>

            <div>
              <div class="contacto-item is-telefono">
                <span class="sr-only">Teléfono</span>
                <a
                  itemprop="telephone"
                  href="tel:1-555-123-4567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 555 123 4567
                </a>
              </div>

              <div class="contacto-item is-email">
                <span class="sr-only">Email:</span>
                <a itemprop="email" href="mailto:info@pku.com">
                  info@pku.com
                </a>
              </div>
            </div>
          </address>
        </section>
      </div>
      <div>
        <!-- TODO: Definir si agregarle enlace a logo de la fundación Enhue del pie -->
        <img
          class="pie-logo"
          width="240"
          height="69"
          src="~assets/img/logo-fundacion-enhue.png"
          alt="Fundación Enhué"
        />

        <p class="pie-legales">Copyright @ 2020 All Rights Reserved.</p>
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
  padding: 70px 0 60px;
  section {
    margin: 0 20px 60px 0;
  }
  h2 {
    font-size: 33.5px;
    font-weight: 400;
    color: #1d1d1b;
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

/* Sección: Redes */
.pie-seccion-redes {
  flex-grow: 2;
  h2 {
    font-size: 24.5px;
    margin-bottom: 60px;
    u {
      text-decoration: underline;
    }
  }
  ul {
    display: flex;
  }
  li {
    &:not(:last-child) {
      margin-right: 26px;
    }
    a {
      display: flex;
      width: 47px;
      height: 47px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid #b1b1b1;
    }
  }
}

/* Sección: Contacto */
.pie-seccion-contacto {
  flex-grow: 2;
  $pieAddressLineHeight: 2.8em;
  $pieCajaGap: 15px;
  .contacto-caja {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-style: normal;
    line-height: $pieAddressLineHeight;
    > div {
      flex-basis: calc(50% - #{$pieCajaGap});
    }
  }
  .contacto-item {
    min-width: 200px;
    &:not(:last-child) {
      margin-right: $pieCajaGap;
    }
    &.is-ubicacion,
    &.is-telefono,
    &.is-email {
      position: relative;
      padding-left: 45px;
      &::before {
        content: '';
        display: block;
        width: 20px;
        height: $pieAddressLineHeight;
        background: url('https://placeholder.pics/svg/20/DEDEDE/DEDEDE')
          no-repeat center;
        background-size: contain;
        position: absolute;
        left: 0;
      }
    }
  }
}

.pie-logo {
  margin: 0 0 20px;
}
.pie-legales {
  color: #6f6f6e;
  font-size: 21px;
}

@include mq($from: tablet) {
  .pie-contenedor-interno {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .pie-seccion-redes {
    flex-grow: 2;
  }
  .pie-seccion-menu {
    flex-grow: 1;
  }
  .pie-seccion-contacto {
    flex-grow: 2;
  }
}
</style>
