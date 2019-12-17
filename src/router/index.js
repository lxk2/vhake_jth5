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
      },
      {
        path: '/projectDetail',
        name: 'projectDetail',
        component: () => import(
          '../views/projectDetail/projectDetail'
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
  },
  {
    path: '/userAgreement',
    name: 'userAgreement',
    component: () => import(
      '../views/userAgreement/userAgreement'
    )
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import(
      '../views/aboutUs/aboutUs'
    )
  }
];

const router = new VueRouter({
  routes
});

export default router;
