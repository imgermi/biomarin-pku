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
        <NuxtLink to="campania"> La campaña </NuxtLink>
      </li>
      <li>
        <NavPrincipalMenu id="menu-pku" titulo="Fenilcetonuria (PKU)">
          <NuxtLink tag="button" to="fenilcetonuria-pku">
            ¿Qué es la fenilcetonuria (PKU)?
          </NuxtLink>
          <NuxtLink tag="button" to="diagnostico"> Diagnóstico </NuxtLink>
          <NuxtLink tag="button" to="tratamieno-y-avances">
            Tratamiento y avances
          </NuxtLink>
          <NuxtLink tag="button" to="enfermedad-en-nuestro-pais">
            La enfermedad en nuestro país
          </NuxtLink>
        </NavPrincipalMenu>
      </li>
      <li>
        <NavPrincipalMenu id="menu-info" titulo="Información Útil">
          <NuxtLink tag="button" to="fundacion-enhue">
            Fundación Enhué
          </NuxtLink>
          <NuxtLink tag="button" to="centros-de-tratamiento">
            Centros de tratamiento
          </NuxtLink>
          <NuxtLink tag="button" to="apoyo-al-paciente">
            Apoyo al paciente
          </NuxtLink>
          <NuxtLink tag="button" to="consultas">Consultas</NuxtLink>
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
