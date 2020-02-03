import Vue from "vue";
import {
  Form,
  Input,
  Icon,
  Button,
  Checkbox,
  Radio,
  DatePicker,
  LocaleProvider,
  Select,
  InputNumber,
  Row,
  Col,
  Layout,
  Menu,
  message,
  Modal
} from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import http from "@/http";

Vue.config.productionTip = false;
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(DatePicker);
Vue.use(LocaleProvider);
Vue.use(Select);
Vue.use(InputNumber);
Vue.use(Row);
Vue.use(Col);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Modal);

Vue.prototype.$http = http;
Vue.prototype.$message = message;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
