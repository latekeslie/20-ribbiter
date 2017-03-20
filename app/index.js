import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import Register from './routes/register.vue';
import Login from './routes/login.vue';
import Users from './routes/users-index.vue';
import Ribbits from './routes/ribbits-index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/users-index',
    name: 'users',
    component: Users,
  },
  {
    path: '/ribbits-index',
    name: 'ribbits',
    component: Ribbits,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
