<template>
  <nav
    v-font="[
      $getFont('Roboto', 200, 'normal', { selector: 'a' }),
      $getFont('Roboto', 400, 'normal', { selector: 'a.nuxt-link-active' }),
    ]"
    class="nav-ppal"
  >
    <ul>
      <li>
        <NuxtLink to="/la-campana"> La campaña </NuxtLink>
      </li>
      <li>
        <NavPrincipalMenu
          id="menu-pku"
          titulo="Fenilcetonuria (PKU)"
          :rutas="[
            'que-es-la-fenilcetonuria',
            'diagnostico-de-la-fenilcetonuria',
            'tratamiento-y-avances-sobre-la-fenilcetonuria',
            'la-fenilcetonuria-en-nuestro-pais',
          ]"
        >
          <NuxtLink tag="button" to="/que-es-la-fenilcetonuria">
            ¿Qué es la fenilcetonuria (PKU)?
          </NuxtLink>
          <NuxtLink tag="button" to="/diagnostico-de-la-fenilcetonuria">
            Diagnóstico
          </NuxtLink>
          <NuxtLink
            tag="button"
            to="/tratamiento-y-avances-sobre-la-fenilcetonuria"
          >
            Tratamiento y avances
          </NuxtLink>
          <NuxtLink tag="button" to="/la-fenilcetonuria-en-nuestro-pais">
            La enfermedad en nuestro país
          </NuxtLink>
        </NavPrincipalMenu>
      </li>
      <li>
        <NavPrincipalMenu
          id="menu-info"
          titulo="Información Útil"
          :rutas="[
            'fundacion-enhue',
            'centros-de-tratamiento-de-la-fenilcetonuria',
            'apoyo-al-paciente-con-fenilcetonuria',
            'consultas-sobre-la-fenilcetonuria',
          ]"
        >
          <NuxtLink tag="button" to="/fundacion-enhue">
            Fundación Enhué
          </NuxtLink>
          <NuxtLink
            tag="button"
            to="/centros-de-tratamiento-de-la-fenilcetonuria"
          >
            Centros de tratamiento
          </NuxtLink>
          <NuxtLink tag="button" to="/apoyo-al-paciente-con-fenilcetonuria">
            Apoyo al paciente
          </NuxtLink>
          <NuxtLink tag="button" to="/consultas-sobre-la-fenilcetonuria">
            Consultas
          </NuxtLink>
        </NavPrincipalMenu>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-ppal {
  font-size: 15.5px;
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
  }
  li {
    // Evita que se note espacio dejado por el contenido oculto con visibility: hidden
    min-height: 2.5em;
    margin-right: 20px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a.nuxt-link-active {
    font-weight: 400;
    text-decoration: underline;
  }
}

@include mq($from: desktop) {
  .nav-ppal {
    width: auto;
    ul {
      flex-direction: row;
      justify-content: flex-end;
    }
    li {
      min-height: auto;
    }
  }
}
</style>
