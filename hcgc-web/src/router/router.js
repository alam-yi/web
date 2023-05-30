import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AboutUs from '../views/aboutus'
import Product from '../views/product'
import BusSolution from '../views/solution/bus'
import TaxiSolution from '../views/solution/taxi'
import SchoolBusSolution from '../views/solution/schoolbus'
import TransportSolution from '../views/solution/transport'
import EscortSolution from '../views/solution/escort'

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
      component: Home,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/solution-bus',
      name: 'bus_solution',
      component: BusSolution,
    },
    {
      path: '/solution-taxi',
      name: 'taxi_solution',
      component: TaxiSolution,
    },
    {
      path: '/solution-school-bus',
      name: 'school_bus_solution',
      component: SchoolBusSolution,
    },
    {
      path: '/solution-transport',
      name: 'transport_solution',
      component: TransportSolution,
    },
    {
      path: '/solution-escort',
      name: 'escort_solution',
      component: EscortSolution,
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: AboutUs,
    },
  ]
});

export default router