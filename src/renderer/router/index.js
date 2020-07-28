import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: require("@/components/Login").default,
    },
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/component-page",
      name: "component-page",
      component: require("@/components/ComponentPage").default,
    },
  ],
});
