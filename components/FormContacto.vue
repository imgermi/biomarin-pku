<template>
  <div class="form-contacto">
    <div class="inner-container">
      <div>
        <p v-font="$getFont('Playfair Display', 400)">
          Ponete en contacto para recibir más información.
        </p>
      </div>

      <div>
        <form
          v-font="[$getFont('Roboto', 200)]"
          method="GET"
          action="thank-you-page"
        >
          <div class="form-control">
            <label for="nombre">Nombre y Apellido:</label>
            <input id="nombre" type="text" name="nombre" />
          </div>

          <div class="form-control">
            <label for="email">Mail:</label>
            <input id="email" type="email" name="email" />
          </div>

          <div class="form-control">
            <label for="edad">Edad:</label>
            <input id="edad" type="text" pattern="[0-9]+" name="edad" />
          </div>

          <div class="form-checkbox">
            <input
              id="consentimiento"
              type="checkbox"
              name="consentimiento"
              value="1"
            />
            <!-- TODO: Formulario: Términos y condiciones en español -->
            <label for="consentimiento">
              Ao clicar nesta caixa ao lado e submeter minhas informações no
              botão abaixo, eu confirmo que tenho pelo menos 18 anos de idade; e
              confirmo consentimento às Mães Metabólicas* e BioMarin Brasil
              Farmacêutica Ltda. (assim como suas agências) a utilizarem meus
              dados e e-mail para manter-me informado sobre a campanha LEMBRE DE
              MIM PKU e outras oportunidades que podem ser do meu interesse; e
              confirmo estar de acordo com as Políticas de Privacidade da e
              Termos de Uso da BioMarin.
            </label>
          </div>

          <CButton type="submit">Enviar</CButton>
        </form>
      </div>
    </div>
    <WhatsApp class="whatsapp" />
  </div>
</template>

<style lang="scss" scoped>
.inner-container {
  margin-top: rem(70px);
  @include mq($from: desktop) {
    display: flex;
    > div {
      flex: 1;
      &:nth-child(1) {
        flex: 1 0 auto;
        width: 50%;
      }
    }
  }
  @include mq($from: wide) {
    display: flex;
    > div {
      flex: 1;
      &:nth-child(1) {
        flex: 1 0 auto;
        width: 60%;
      }
    }
  }
}

p {
  font-size: 50px;
  line-height: 1.1;
  margin: 0 0 1em 0;
  @include mq($from: tablet) {
    font-size: rem(90px);
  }
  @include mq($from: desktop) {
    margin: -0.2em 0.5em 0 0;
  }
  @include mq($from: wide) {
    font-size: rem(115px);
  }
}

form {
  @include mq($from: tablet) {
    max-width: rem(550px);
  }
}

.form-control {
  display: flex;
  align-items: flex-end;
  font-size: rem(30px);
  margin-bottom: 1.1em;
  label {
    flex: 0 0 auto;
    line-height: 1;
    margin-right: 0.4em;
  }
  input {
    flex: 1 1 auto;
    min-width: rem(100px);
    background: none;
    border: 0;
    border-bottom: 1px solid black;
    transition: all 100ms;
    &:focus {
      outline: 0;
      transform: translateY(3px);
    }
  }
}

/**
 * Basado en "Create custom keyboard accessible radiobuttons"
 * @link https://www.a11ywithlindsey.com/blog/create-custom-keyboard-accesible-checkboxes
 */
input[type='checkbox'] {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  & + label {
    display: block;
    position: relative;
    padding: 0 0 0 2.6em;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 22px;
      height: 22px;
      border-radius: 3px;
      background: white;
    }
  }
  &:checked + label::before {
    background: url('~assets/icons/checkbox-checked.svg') no-repeat;
    background-size: contain;
  }
  &:focus + label::before {
    outline: #5d9dd5 solid 1px;
    box-shadow: 0 0px 8px #5e9ed6;
  }
  &:disabled + label {
    color: #575757;
  }
  &:disabled + label::before {
    background: #ddd;
  }
}
.form-contacto .whatsapp {
  display: block;
  width: max-content;
  margin: 3rem 0 0 auto;
}
</style>
