<template>
    <router-link :to="recipePath">
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
  props: ['recipe'],
  computed: {
    recipePath: function() {
      return `/fetch/${this.recipe._id}`;
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
