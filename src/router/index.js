import Vue from "vue";
import VueRouter from "vue-router";
import Cuishoujilu from "../components/Cuishoujilu/Cuishoujilu.vue";
import Daoqi from "../components/Daoqi/Daoqi.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Cuishoujilu',
    component: Cuishoujilu
  },
  {
    path: '/daoqi',
    name: 'Daoqi',
    component: Daoqi
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
