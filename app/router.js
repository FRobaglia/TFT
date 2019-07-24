import Vue from 'vue';
import Router from 'vue-router';

import Summoners from './components/Summoners.vue';
import Summoner from './components/Summoner.vue';
import Champions from './components/Champions/Champions.vue';
import Champion from './components/Champions/Champion.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/summoners',
      name: 'summoners',
      component: Summoners,
    },
    {
      path: '/summoners/:summonerName',
      props: true,
      name: 'summoner',
      component: Summoner,
    },
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
      redirect: { name: 'summoners' },
    },
  ],
});

export default router;
