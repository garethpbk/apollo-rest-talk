<template>
    <div>
        <h1>Individual Fetch</h1>
        <div class="indv-wrapper">
            <div class="indv-left">
                <h1>{{ recipe.name }}</h1>
            <img :src="recipeImage" />
            </div>
            <div class="indv-right">
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

.indv-wrapper img {
  max-height: 500px;
  max-width: 100%;

  padding: 50px 0;
}

.indv-wrapper ul {
  display: block;
  text-align: left;

  list-style: none;

  margin: 0;
  padding: 0 75px;
}

.indv-wrapper ul li {
  box-shadow: none;

  border-bottom: 1px solid steelblue;

  padding: 15px 0;
}

.indv-left {
  flex-basis: 50%;
}

.indv-right {
  flex-basis: 50%;
  padding: 50px 25px;

  text-align: left;
}

.indv-right p {
  font-size: 18px;

  padding: 0 75px;
}
</style>
