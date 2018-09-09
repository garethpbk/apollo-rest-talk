<template>
    <div>
        <h2>Individual Fetch</h2>
        <div class="indv-wrapper">
            <div class="indv-left card">
                <h4>{{ recipe.name }}</h4>
            <img :src="recipeImage" />
            </div>
            <div class="indv-right card">
            <p>{{ recipe.description }}</p>
            <ul>
                <li :key="ingredient.name" v-for="ingredient in recipe.ingredients">
                    <strong>{{ ingredient.name }}</strong>, {{ ingredient.amount }}
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {},
    };
  },
  created: function() {
    this.fetchRecipe();
  },
  computed: {
    recipeImage: function() {
      return this.recipe.images ? this.recipe.images[0] : null;
    },
  },
  methods: {
    fetchRecipe: async function() {
      try {
        const res = await fetch(`http://localhost:6969/api/recipes/${this.$route.params.id}`);
        const recipe = await res.json();
        this.recipe = recipe;
      } catch (e) {
        /* eslint-disable-next-line */
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.indv-wrapper {
  display: flex;
  justify-content: space-between;

  color: steelblue;

  width: 980px;

  margin: 0 auto;
}

h4 {
  font-size: 2rem;

  margin: 1rem 0 0 0;
}

img {
  max-height: 500px;
  max-width: 100%;

  padding: 25px 0 0 0;
}

ul {
  display: block;
  text-align: left;

  list-style: none;

  margin: 0;
  padding: 0 75px;
}

ul li {
  box-shadow: none;

  border-bottom: 1px solid steelblue;

  padding: 15px 0;
}

.indv-left {
  flex-basis: 50%;

  height: 100%;
}

.indv-right {
  flex-basis: 50%;

  margin: 0 50px;
  padding: 50px 5px;

  text-align: left;
}

.indv-right p {
  font-size: 20px;
  font-weight: 600;

  padding: 0 50px;
}
</style>
