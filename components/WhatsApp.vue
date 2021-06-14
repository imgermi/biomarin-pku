<template>
  <!-- TODO: Botón WhatsApp: texto predefinido y número al que se enviaría el mensaje -->
  <a class="whatsapp" href="#" title="Escribinos por WhatsApp">
    <img
      width="83"
      height="83"
      src="~assets/icons/whatsapp.svg"
      alt="WhatsApp"
    />
  </a>
</template>

<style lang="scss" scoped>
.whatsapp {
  display: block;
  img {
    display: block;
    width: 45px;
    height: auto;
  }
  @include mq($from: tablet) {
    img {
      width: rem(83px);
    }
  }
}
</style>
