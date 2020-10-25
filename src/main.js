import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)


Vue.config.productionTip = false

/* eslint-disable no-new */
// eslint-disable-next-line
/* eslint-disable */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})