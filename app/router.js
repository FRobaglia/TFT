import Vue from 'vue';
import Router from 'vue-router';

import Champions from './components/Champions.vue';
import Champion from './components/Champion.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/champions',
      name: 'champions',
      component: Champions,
    },
    {
      path: '/champions/:champion',
      name: 'champion',
      component: Champion,
    },
    {
      path: '*',
      redirect: { name: 'champions' },
    },
  ],
});

export default router;
