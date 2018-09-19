import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import VueApollo from 'vue-apollo';

Vue.config.productionTip = false;

const restLink = new RestLink({
  uri: 'http://recipe.gareth.cool/api/recipes/',
  credentials: null,
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: client,
  defaultOptions: {
    $loadingKey: 'loading;',
  },
});

new Vue({
  render: h => h(App),
  router,
  provide: apolloProvider.provide(),
}).$mount('#app');
