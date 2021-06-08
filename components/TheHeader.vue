<template>
  <header v-font="$getFont('Roboto', 400)" class="cabecera">
    <div class="container">
      <div class="seccion-a">
        <!-- TODO: Enlace a sitio de la Fundación Enhué -->
        <a href="" target="_blank">
          <img
            width="146"
            height="47"
            src="~assets/img/fundacion-enhue-logo-negro.png"
            srcset="
              ~assets/img/fundacion-enhue-logo-negro.png    1x,
              ~assets/img/fundacion-enhue-logo-negro-2x.png 2x
            "
            alt="Fundación Enhué"
          />
        </a>

        <!-- TODO: Enlace a sitio de FENI-->
        <a href="" target="_blank">
          <img
            width="52"
            height="55"
            src="~assets/img/feni-logo-negro.png"
            srcset="
              ~assets/img/feni-logo-negro.png    1x,
              ~assets/img/feni-logo-negro-2x.png 2x
            "
            alt="FENI"
          />
        </a>

        <NuxtLink
          v-font="$getFont('Playfair Display', 400)"
          to="/"
          class="titulo"
        >
          Acordate de <u>mí.</u>
        </NuxtLink>
      </div>

      <div class="seccion-b">
        <NavPrincipal />

        <ul class="redes">
          <!-- TODO: Enlace a sitio de Instagram -->
          <li>
            <a
              href="https://www.instagram.com/xxxxxxxx/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <img
                width="17"
                height="17"
                src="~assets/icons/instagram.svg"
                alt="Instagram"
              />
            </a>
          </li>

          <!-- TODO: Enlace a sitio de Facebook -->
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
                src="~assets/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.cabecera {
  padding: 50px 0 20px;
  color: #000;
  background: transparent;
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }
}

.seccion-a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  img {
    margin-right: 1rem;
  }
}
.titulo {
  font-size: rem(26px);
  font-weight: 400;
  text-decoration: none;
}

.seccion-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.redes {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding-left: 0;
  margin: 0 0 0 3rem;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-right: 26px;
    }
    img {
      display: block;
      filter: brightness(0%);
    }
  }
}

@include mq($from: desktop) {
  .cabecera {
    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
