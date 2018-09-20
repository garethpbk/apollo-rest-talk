<template>
    <div>
        <h2>Fetch</h2>
        <ul class="cards">
          <li class="card" :key="recipe._id" v-for="recipe in recipes">
              <Recipe :recipe="recipe" :graphql="false" />
          </li>
        </ul>
      </div>
</template>

<script>
import Recipe from './Recipe.vue';

export default {
  name: 'Fetch',
  data() {
    return {
      recipes: [],
    };
  },
  created: function() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes: async function() {
      try {
        const res = await fetch('https://recipe.gareth.cool/api/recipes/');
        const recipes = await res.json();
        this.recipes = recipes;
      } catch (e) {
        /* eslint-disable-next-line */
        console.log(e);
      }
    },
  },
  components: {
    Recipe,
  },
};
</script>

<style scoped>
</style>
