<template>
    <div>
        <h2>GraphQL</h2>
        <h4 v-if="loading">Loading...</h4>
        <ul class="cards">
          <li class="card" :key="recipe._id" v-for="recipe in recipes">
              <Recipe :recipe="recipe" :graphql="true" />
          </li>
        </ul>
      </div>
</template>

<script>
import gql from 'graphql-tag';
import Recipe from './Recipe.vue';

const ALL_RECIPES = gql`
  query AllRecipes {
    recipes @rest(type: "Recipe", path: "") {
      _id
      name
      images
      dietary @type(name: "Dietary") {
        vegetarian
        vegan
        glutenFree
      }
    }
  }
`;

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
  },
};
</script>

<style scoped>
</style>