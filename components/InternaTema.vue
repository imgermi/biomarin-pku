<template>
  <div v-font="$getFont('Roboto', 400)" class="tema">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tema {
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  &::after {
    content: '';
    display: inline-block;
    width: 3em;
    height: 1px;
    margin-left: 0.8em;
    background-color: #000000;
  }
  @include mq($from: tablet) {
    &::after {
      width: 7em;
    }
  }
}
</style>
