import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import HelloWorld from '../views/HelloWorld'

Vue.use(VueRouter);

const router = new VueRouter({
  // base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Home
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: HelloWorld,
    },
  ]
});

export default router