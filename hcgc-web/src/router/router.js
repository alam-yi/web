import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AboutUs from '../views/aboutus'
import ProdYouYun from '../views/products/youyun'
import ProdBus from '../views/products/bus'
import BusSolution from '../views/solution/bus'
import TaxiSolution from '../views/solution/taxi'

Vue.use(VueRouter);
// 解决多次点击同一路由，导致路由被多次添加
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const router = new VueRouter({
  // base: process.env.BASE_URL,
  // build时注释
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
      path: '/products/youyun',
      name: 'prod_youyun',
      component: ProdYouYun,
    },
    {
      path: '/products/bus',
      name: 'prod_bus',
      component: ProdBus,
    },
    {
      path: '/solution/bus',
      name: 'bus_solution',
      component: BusSolution,
    },
    {
      path: '/solution/taxi',
      name: 'taxi_solution',
      component: TaxiSolution,
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: AboutUs,
    },
  ]
});

export default router