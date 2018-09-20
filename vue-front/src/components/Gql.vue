<template>
    <div>
        <h2>GraphQL</h2>
        <h4 v-if="loading"><Spinner /></h4>
        <ul class="cards">
          <li class="card" :key="recipe._id" v-for="recipe in recipes">
              <Recipe :recipe="recipe" :graphql="true" />
          </li>
        </ul>
      </div>
</template>

<script>
import Recipe from './Recipe.vue';
import Spinner from './Spinner.vue';
import { ALL_RECIPES } from '../queries/Recipes.gql';

export default {
  name: 'Gql',
  apollo: {
    recipes: ALL_RECIPES,
  },
  data() {
    return {
      recipes: [],
      loading: 0,
    };
  },
  components: {
    Recipe,
    Spinner,
  },
};
</script>

<style scoped>
</style>