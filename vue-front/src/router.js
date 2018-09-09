import Vue from 'vue';
import Router from 'vue-router';
import Fetch from './components/Fetch.vue';
import FetchIndv from './components/FetchIndv.vue';
import Gql from './components/Gql.vue';
import GqlIndv from './components/GqlIndv.vue';
import Admin from './components/Admin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Fetch',
      component: Fetch
    },
    {
      path: '/fetch/:id',
      name: 'Fetch Individual',
      component: FetchIndv
    },
    {
      path: '/gql',
      name: 'GraphQL',
      component: Gql
    },
    {
      path: '/gql/:id',
      name: 'GraphQL Individual',
      component: GqlIndv
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
});
