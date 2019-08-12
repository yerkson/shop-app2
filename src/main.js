import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import {Button} from 'mint-ui'

Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
