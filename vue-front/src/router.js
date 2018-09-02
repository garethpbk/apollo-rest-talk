import Vue from 'vue';
import Router from 'vue-router';
import Fetch from './components/Fetch.vue';
import FetchIndv from './components/FetchIndv.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Fetch',
      component: Fetch,
    },
    {
      path: '/fetch/:id',
      name: 'Fetch Individual',
      component: FetchIndv,
    },
  ],
});
