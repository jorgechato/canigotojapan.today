import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from "vue-analytics";
import 'bootstrap-4-grid/css/grid.min.css'

Vue.config.productionTip = false

Vue.filter('pluralize', (word, amount) => (amount > 1 || amount == 0) ? `${word}s` : word)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: 'UA-xxxxxxxx-x',
  router
})
