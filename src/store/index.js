import Vue from "vue";
import Vuex from "vuex";
import http from "@/http";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    self: {},
    area: []
  },
  getters: {
    areaA(state) {
      const areaA = [];
      for (let outter of state.area) {
        if (outter.arealevel === 1) {
          const temp = {
            value: outter.areaid,
            label: outter.areaname,
            children: []
          };
          for (let inner of state.area) {
            if (inner.parentid === outter.areaid) {
              temp.children.push({
                value: inner.areaid,
                label: inner.areaname
              });
            }
          }
          areaA.push(temp);
        }
      }
      return areaA;
    }
  },
  mutations: {
    reset(state, payload) {
      state[payload[0]] = payload[1];
    }
  },
  actions: {
    fetchSelf({ commit }) {
      http.get("/user/-1").then(res => {
        if (res) {
          commit("reset", ["self", res]);
        }
      });
    },
    fetchArea({ commit }) {
      http.get("/area").then(res => {
        if (res) {
          this.area = res;
          commit("reset", ["area", res]);
        }
      });
    }
  },
  modules: {}
});
