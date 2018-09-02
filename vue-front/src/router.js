import Vue from 'vue';
import Router from 'vue-router';
import Fetch from './components/Fetch.vue';
import FetchIndv from './components/FetchIndv.vue';
import Gql from './components/Gql.vue';

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
    {
      path: '/gql',
      name: 'GraphQL',
      component: Gql,
    },
  ],
});
