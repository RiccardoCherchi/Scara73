import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueFullPage from 'vue-fullpage.js';
import AOS from 'aos';

import 'aos/dist/aos.css';

Vue.use(VueFullPage);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
  created() {
    AOS.init()
  }
}).$mount('#app')
