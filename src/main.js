// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCollapse from 'vue2-collapse';
import VueScrollactive from 'vue-scrollactive';
import VueFlexboxgrid from 'vue-flexboxgrid';
import 'vue-flexboxgrid/dist/vue-flexboxgrid.css';
import VueScrollReveal from 'vue-scroll-reveal';
import VueAffix from 'vue-affix';
import vSelect from 'vue-select';

import App from './App';
import router from './router';

Vue.component('v-select', vSelect);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false,
});

Vue.use(VueFlexboxgrid);
Vue.use(VueAffix);
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
