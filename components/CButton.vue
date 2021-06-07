<template>
  <Component
    :is="is"
    v-font="$getFont('Roboto', 400, 'normal')"
    :to="/to"
    class="btn"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </Component>
</template>
<script>
export default {
  props: {
    tipo: {
      type: String,
      default: 'normal',
    },
    to: {
      type: [String, Object],
      default: null,
    },
  },
  computed: {
    is() {
      return this.to ? 'nuxt-link' : 'button'
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 12px 22px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 9px;
  appearance: none;
  @include mq($from: tablet) {
    font-size: rem(19px);
  }
}
</style>
