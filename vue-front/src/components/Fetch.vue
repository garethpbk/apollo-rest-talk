<template>
    <div>
        <h1>Fetch</h1>
        <ul>
          <li :key="recipe._id" v-for="recipe in recipes">
              <Recipe :recipe="recipe" />
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
        const res = await fetch('http://localhost:6969/api/recipes/');
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
