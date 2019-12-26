import Vue from 'vue';
import {
  Form,
  Input,
  Icon,
  Button,
  Checkbox,
  Radio,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
