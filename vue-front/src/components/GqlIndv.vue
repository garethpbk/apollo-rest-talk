<template>
    <div>
        <h2>Individual GraphQL</h2>
        <!-- for some reason this can't just be loading, but works in Gql.vue...? -->
        <h4 v-if="$apollo.loading"><Spinner /></h4>
        <div v-else class="indv-wrapper">
            <div class="indv-left card">
                <h4>{{ recipe.name }}</h4>
            <img :src="recipe.images[0]" />
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
import gql from 'graphql-tag';
import Spinner from './Spinner.vue';

const GET_RECIPE = gql`
  query recipe($id: ID!) {
    recipe(id: $id) @rest(type: "Recipe", path: "{args.id}") {
      name
      category
      description
      ingredients
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
    recipe: {
      query: GET_RECIPE,
      variables() {
        return {
          id: this.recipePath,
        };
      },
    },
  },
  data() {
    return {
      recipes: {},
      loading: 0,
    };
  },
  computed: {
    recipePath: function() {
      return this.$route.params.id;
    },
  },
  components: {
    Spinner,
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
