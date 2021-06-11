<template>
  <div>
    <div class="has-black-bg"></div>

    <div class="has-white-bg">
      <div class="container">
        <h2>Todo se trata de <strong>equilibrio</strong></h2>

        <img src="" alt="" />

        <div class="img-wrapper">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <img src="" alt="" />

        <img src="" alt="Acordate de mi" />

        <div>
          <p>
            Tomé las riendas de mi vida cambiando mis hábitos. Comprendí la
            importancia de mantener un control adecuado y continuo,
            principalmente asistiendo a las consultas pactadas con mi médico y
            mi nutricionista.
          </p>
          <img src="" alt="" srcset="" />
        </div>

        <p>
          Ayudemos a crear conciencia entre quienes lo necesitan para comprender
          y no subestimar a la FENILCETONURIA, para que asistan a su consulta
          médica y se informen sobre las opciones de tratamiento disponibles.
        </p>

        <p>
          "La falta de control y el desequilibro como consecuencia, me llevó a
          tomar las riendas de mi vida cambiando mis hábitos"
        </p>

        <div>
          Visitá a tu médico
          <span>
            Acordate <br />
            de <b>mí</b>.
          </span>
          <p>
            Cuando creas que todo es cuesta arriba, recordá que
            <strong>nunca es tarde para retomar el equilibrio.</strong>
          </p>
        </div>
      </div>
    </div>

    <section class="seccion-contacto">
      <div class="container">
        <InternaTema>Consultas</InternaTema>
        <FormContacto />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
      bodyAttrs: {
        class: 'is-home',
      },
    }
  },
}
</script>

<style lang="scss">
.is-home {
  background-color: #000000;
  main {
    padding: 0;
  }
}
</style>

<style lang="scss" scoped>
.seccion-contacto {
  background-color: $brand-color;
  padding: 4rem 0 9rem;
  margin-bottom: 0;
}
</style>
