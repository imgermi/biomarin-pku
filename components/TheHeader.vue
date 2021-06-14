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

        <button
          class="overlay-open hamburger hamburger--elastic"
          :class="{
            'is-active': isOpen,
          }"
          aria-expanded="false"
          type="button"
          aria-label="Menu"
          data-target="menu-principal"
          @click="toggleOverlay"
          @keyup.enter="toggleOverlay"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          <span class="hamburger-label sr-only">Menú</span>
        </button>
      </div>

      <div
        id="menu-principal"
        ref="overlay"
        class="seccion-b overlay overlay-hugeinc"
        :class="{
          open: isOpen,
          close: !isOpen,
        }"
        :hidden="!isOpen"
      >
        <button
          type="button"
          class="overlay-close"
          @click="toggleOverlay"
          @keyup.enter="toggleOverlay"
        >
          Cerrar
        </button>

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

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    $route() {
      this.isOpen = false
    },
  },
  methods: {
    toggleOverlay() {
      if (this.isOpen) {
        this.isOpen = false
        // const onEndTransitionFn = function (ev) {
        //   if (ev.propertyName !== 'visibility') return
        //   this.removeEventListener('transition', onEndTransitionFn)
        // }
        // this.$refs.overlay.addEventListener('transition', onEndTransitionFn)
      } else {
        this.isOpen = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cabecera {
  padding: 20px 0;
  color: #000;
  background: transparent;
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.seccion-a {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  img {
    height: 25px;
    width: auto;
    margin-right: 10px;
  }
}
.titulo {
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
}

// https://jonsuh.com/hamburgers/
$hamburger-padding-y: 0.5em;
$hamburger-padding-x: 0.5em;
$hamburger-layer-width: 25px;
$hamburger-layer-height: 2px;
$hamburger-layer-spacing: 5px;
$hamburger-types: (elastic);

@import 'hamburgers/_sass/hamburgers/hamburgers.scss';

.overlay-open {
  margin-left: auto;
}

.redes {
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-right: 30px;
    }
    img {
      display: block;
      width: auto;
      height: 35px;
      filter: brightness(0%);
    }
  }
}

@media (min-width: 360px) {
  .cabecera {
    padding: 30px 0 20px;
  }
  .seccion-a {
    img {
      height: 2.5rem;
      // margin-right: 1.2rem;
    }
  }
  .titulo {
    font-size: 1.5rem;
  }
}
@include mq($from: desktop) {
  .cabecera {
    padding: 50px 0 20px;
    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .seccion-a {
    width: auto;
    justify-content: space-between;
    &:not(:last-child) {
      margin-right: 26px;
    }
    img {
      height: a3remuto;
    }
  }
  .titulo {
    font-size: rem(26px);
  }
  .overlay-open {
    display: none;
  }

  .seccion-b {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // Centra items
    transform: translateY(0.25rem);
  }

  .redes {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 0 2rem;
    li img {
      height: auto;
    }
  }
}
@include mq($from: wide) {
  .seccion-a {
    img {
      height: auto;
    }
  }
}

/**
* Overlay Menu by Typanius
* @link https://tympanus.net/codrops/2014/02/06/fullscreen-overlay-effects/
* Thanks to Mary Lou.
*/

.overlay .overlay-close {
  display: none;
}

@include mq($until: desktop) {
  /* Overlay style */
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $brand-color;
    z-index: 100;
    box-sizing: border-box;
    overflow-y: auto;
  }

  /* Overlay closing cross */
  .overlay .overlay-close {
    display: block;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 25px;
    top: 25px;
    overflow: hidden;
    border: none;
    background: url('~assets/icons/cruz.png') no-repeat center center;
    background-size: contain;
    filter: brightness(0);
    text-indent: 200%;
    cursor: pointer;
    color: transparent;
    outline: none;
    z-index: 200;
  }

  /* Menu style */
  .overlay .nav-ppal {
    text-align: center;
    position: relative;
    font-size: 2rem;
    margin: 12rem 0 4rem;
    > ul {
      margin: 0 auto;
      display: inline-block;
      height: 100%;
      position: relative;
      > li {
        display: block;
        min-height: 1em;
      }
    }
  }

  /* Effects */
  .overlay-hugeinc {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0s 0.5s;
  }

  .overlay-hugeinc.open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s;
  }

  .overlay-hugeinc .nav-ppal {
    perspective: 1200px;
    > ul {
      opacity: 0.4;
      transform: translateY(-25%) rotateX(35deg);
      transition: transform 0.5s, opacity 0.5s;
    }
  }

  .overlay-hugeinc.open .nav-ppal > ul {
    opacity: 1;
    transform: rotateX(0deg);
  }

  .overlay-hugeinc.close .nav-ppal > ul {
    transform: translateY(25%) rotateX(-35deg);
  }

  // @media screen and (max-height: 30.5em) {
  //   .overlay nav {
  //     height: 70%;
  //     font-size: 34px;
  //   }
  //   .overlay ul li {
  //     min-height: 34px;
  //   }
  // }
}
</style>
