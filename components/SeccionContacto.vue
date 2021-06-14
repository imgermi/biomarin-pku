<template>
  <div class="contacto">
    <CButton class="boton" to="/consultas-sobre-la-fenilcetonuria">
      Escribinos tu consulta
    </CButton>

    <WhatsApp />
  </div>
</template>

<style lang="scss" scoped>
.contacto {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 0 0 0;
  .boton {
    margin-top: 0;
  }
}
</style>
