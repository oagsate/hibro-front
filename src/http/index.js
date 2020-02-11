import axios from "axios";
import vm from "@/main";
const instance = axios.create({
  baseURL: "/api"
});
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function({ data }) {
    if (data.state) {
      return data.data || {};
    } else {
      vm.$message.warn(data.errmsg);
      if (data.errcode === 1 && vm.$route.name !== "login") {
        vm.$router.push({ name: "login" });
      }
      return;
    }
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;
