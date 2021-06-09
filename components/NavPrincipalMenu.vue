<template>
  <div v-font="$getFont('Roboto', 200)" class="menu" data-inclusive-menu>
    <button
      ref="btn"
      class="menu-boton"
      :class="{
        'nuxt-link-active': rutas.includes($route.name),
      }"
      :data-inclusive-menu-opens="id"
    >
      {{ titulo }}
    </button>
    <div :id="id" class="menu-opciones" data-inclusive-menu-from="left">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MenuButton from 'inclusive-menu-button'
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    rutas: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.button = new MenuButton(this.$refs.btn)
  },
}
</script>

<style lang="scss" scoped>
button:focus-visible {
  outline: 1px dotted grey;
}

/**
 * Inclusive Menu Button
 * @link https://github.com/Heydon/inclusive-menu-button
 */
[data-inclusive-menu] {
  position: relative;
  display: inline-block;
}

[data-inclusive-menu-opens],
[data-inclusive-menu] [role^='menuitem'] {
  text-align: left;
  border: 0;
}

[data-inclusive-menu] [role='menu'] {
  left: 0;
}

[data-inclusive-menu] [data-inclusive-menu-from='right'] {
  left: auto;
  right: 0;
}

[data-inclusive-menu] [role^='menuitem'] {
  white-space: nowrap;
}

[data-inclusive-menu] [role^='menuitem'][aria-checked='true']::before {
  content: '\2713\0020';
}

// Estilos personalizados
.menu {
  color: inherit;
  button {
    font-weight: inherit;
    background: none;
  }
}
.menu-boton {
  display: flex !important;
  align-items: center;
  padding: 0;
  font-size: 15.5px;
  color: inherit;
  &.nuxt-link-active {
    font-weight: 400;
  }
  &::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 5px;
    background: url('~assets/icons/flecha-abajo.svg') no-repeat center;
    background-size: contain;
    margin-left: 4px;
  }
}
.menu-opciones {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0 0.2em;
  border: 1px solid #000;
  border-right: 0;
  border-bottom: 0;

  overflow: hidden;
  // opacity: 1;
  transition: visibility 0s ease, max-height 500ms ease, opacity 500ms ease;
  max-height: 80em;
  /* magic number for max-height = enough height */
  visibility: visible;
  transition-delay: 0s;

  &[hidden] {
    max-height: 0;
    // opacity: 0;
    visibility: hidden;
    transition-delay: 2s, 0s, 0s;
  }
  button {
    width: max-content;
    font-size: 9.5px;
    padding: 0 0.1em;
    margin: 0.4em 0;
    line-height: 1.2;
    border-radius: 2px;
    &:focus-visible {
      outline: 0;
      background-color: rgba(187, 171, 148, 0.6);
    }
  }
}

@include mq($from: desktop) {
  .menu-opciones {
    position: absolute;
  }
}
</style>
