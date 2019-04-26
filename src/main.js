
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import MintUI from 'mint-ui'
import vux from '@/config/vux.js'
import router from './router/index'
import tools from './libs/tools'
// import mock from './mock/mock'
import App from './App'
import store from './store'
import filters from './libs/filters'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/styles/iview.less';
Vue.use(ElementUI);
Vue.use(iView);
Vue.config.productionTip = false;

Vue.use(tools);
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
