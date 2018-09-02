<template>
    <router-link :to="fetchPath" v-if="!graphql">
        <h2>{{recipe.name}}</h2>
        <div class="food-img" :style="{backgroundImage: `url(${recipe.images[0]})`}"></div>
        <div class="dietary-container">
            <span>{{ recipe.dietary.vegetarian ? 'Veggie' : ''}}</span>
            <span>{{ recipe.dietary.vegan ? 'Vegan' : '' }}</span>
            <span>{{ recipe.dietary.glutenFree ? 'GF' : '' }}</span>
        </div>
    </router-link>
    <router-link :to="gqlPath" v-else>
        <h2>{{recipe.name}}</h2>
        <div class="food-img" :style="{backgroundImage: `url(${recipe.images[0]})`}"></div>
        <div class="dietary-container">
            <span>{{ recipe.dietary.vegetarian ? 'Veggie' : ''}}</span>
            <span>{{ recipe.dietary.vegan ? 'Vegan' : '' }}</span>
            <span>{{ recipe.dietary.glutenFree ? 'GF' : '' }}</span>
        </div>
    </router-link>
</template>

<script>
export default {
  props: {
    recipe: Object,
    graphql: Boolean,
  },
  computed: {
    fetchPath: function() {
      return `/fetch/${this.recipe._id}`;
    },
    gqlPath: function() {
      return `/gql/${this.recipe._id}`;
    },
  },
};
</script>

<style scoped>
.food-img {
  height: 350px;
  background-size: cover;
  background-position: center;
}

.dietary-container {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}
</style>
