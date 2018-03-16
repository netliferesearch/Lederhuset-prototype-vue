// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCollapse from 'vue2-collapse';
import VueScrollactive from 'vue-scrollactive';

import App from './App';
import router from './router';

Vue.use(VueScrollactive);
Vue.use(VueCollapse);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>',
});
