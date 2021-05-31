import Vue from 'vue'
import es from 'axe-core/locales/es.json'

export default function ({ $config }) {
  if (process.env.NODE_ENV === 'development' && $config.axe) {
    const VueAxe = require('vue-axe').default
    Vue.use(VueAxe, {
      config: {
        locale: es,
      },
    })
  }
}
