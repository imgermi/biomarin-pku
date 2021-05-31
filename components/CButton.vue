<template>
  <Component
    :is="is"
    :to="to"
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
<style lang="scss" scoped></style>
