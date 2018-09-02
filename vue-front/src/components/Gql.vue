<template>
    <div>
        <h1>GraphQL</h1>
        <h4 v-if="loading">Loading...</h4>
        <ul>
          <li :key="recipe._id" v-for="recipe in recipes">
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
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
}

li {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>