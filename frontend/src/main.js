import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip =
    process.env.NODE_ENV === 'production';


Vue.use(messagePlugin);
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

