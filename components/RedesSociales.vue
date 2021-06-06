<template>
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
          class="is-facebook"
          width="10"
          height="18"
          src="~assets/icons/facebook.svg"
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
          class="is-instagram"
          width="17"
          height="17"
          src="~assets/icons/instagram.svg"
          alt="Instagram"
        />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}
li {
  margin-bottom: 0.9em;
  &:not(:last-child) {
    margin-right: 26px;
  }
  a {
    display: flex;
    font-size: 55px;
    width: 1em;
    height: 1em;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #000000;
    color: inherit;
    text-decoration: none;
  }
  img {
    width: auto;
    filter: invert(100%);
    &.is-instagram {
      height: 0.45em;
    }
    &.is-facebook {
      height: 0.4em;
    }
  }
  @include mq($from: tablet) {
    li a {
      font-size: 72px;
    }
  }
}
</style>
