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
  text-align: center;
  padding: 0;
  margin: 1rem 0 0.5rem;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  // Centra horizontalmente. Queremos centrar el texto, sin tener en cuenta la flecha.
  transform: translateX(8px);
  &:hover {
    text-decoration: underline;
  }
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
  background: #f5f5f5;
  border-radius: 9px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.02);

  overflow: hidden;
  opacity: 1;
  transition: visibility 0s ease, max-height 500ms ease, opacity 500ms ease;
  /* magic number for max-height = enough height */
  max-height: 80em;
  visibility: visible;
  transition-delay: 0s;

  &[hidden] {
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    transition-delay: 500ms, 0s, 0s;
  }
  button {
    width: max-content;
    font-size: 14px;
    padding: 0 1rem;
    margin: 0.5em 0;
    line-height: 1.2;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &:first-child {
      padding-top: 1rem;
    }
    &:last-child {
      padding-bottom: 1rem;
    }
  }
}

@include mq($from: desktop) {
  .menu-boton {
    text-align: left;
    margin: 0 0 0.5rem;
  }
  .menu-opciones {
    position: absolute;
  }
}
</style>
