import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../layout/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import(
          '../views/home/home'
        )
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(
          '../views/user/user'
        )
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(
      '../views/login/login'
    )
  }
];

const router = new VueRouter({
  routes
});

export default router;
