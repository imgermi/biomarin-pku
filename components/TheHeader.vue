<template>
  <header v-font="$getFont('Roboto', 400)" class="cabecera">
    <div class="container">
      <div class="slogan">Acordate de <u>mí.</u></div>

      <NavPrincipal />

      <ul class="redes">
        <!-- TODO: Cambiar instagram -->
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
              src="~assets/icons/facebook.svg"
              alt="Facebook"
            />
          </a>
        </li>
      </ul>
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

.slogan {
  font-size: 24.5px;
  margin-top: -0.3em;
}

.redes {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding-left: 0;
  margin: 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-right: 26px;
    }
    img {
      display: block;
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
