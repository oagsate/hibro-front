import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Hibro from "@/views/Hibro.vue";
import Square from "@/views/Square.vue";
import MyHome from "@/views/MyHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/hibro",
    name: "hibro",
    component: Hibro,
    children: [
      {
        path: "square",
        name: "square",
        component: Square
      },
      {
        path: "my-home",
        name: "myHome",
        component: MyHome
      }
    ]
  }

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
