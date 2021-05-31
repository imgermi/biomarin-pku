export default function ({ app, $axios }) {
  $axios.setHeader('x-api-key', 'jvHrlN55WO3Cu9FNRVk2j7UH9FcktB0B7jH2DL2O')

  $axios.onError((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorData = error.response.data.error
      if (process.env.NODE_ENV !== 'production') {
        console.error('AXIOS Error (response):', errorData)
      }
      let defaultMessage =
        (errorData && errorData.message) || 'Hubo un problema'
      // Parche: El back devuelve el mismo código para dos errores distintos
      if (
        errorData &&
        errorData.message ===
          'User cannot be confirmed. Current status is CONFIRMED'
      ) {
        errorData.code = 'UserCurrentStatusConfirmed'
      }
      if (
        errorData &&
        errorData.message ===
          'Cannot reset password for the user as there is no registered/verified email or phone_number'
      ) {
        errorData.code = ''
        const { href } = app.router.resolve({ name: 'auth-activar-cuenta' })
        defaultMessage = `Para poder generar la contraseña primero debes <a href="${href}">activar tu cuenta</a>`
      }

      return Promise.reject(
        new Error(
          (errorData &&
            errorData.code &&
            app.$config.mensajes.error[errorData.code]) ||
            defaultMessage
        )
      )
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request)
      return new Error('Sin conexión a internet')
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message)
    }
  })
}
