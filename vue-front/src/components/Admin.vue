<template>
  <div class="admin-container">
    <div class="left card">
      <h3>Add a Recipe</h3>
      <input v-model="recipe.name" placeholder="Name..." />
      <select v-model="recipe.category">
        <option value="Select One">Select One</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Second Breakfast">Second Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Main Course">Main Course</option>
        <option value="Snack">Snack</option>
        <option value="Dessert">Dessert</option>
      </select>
      <input v-model="recipe.description" placeholder="Description..." />
      <input v-model="recipe.images" placeholder="Images..." />
      <div class="check">
        <input type="checkbox" v-model="recipe.dietary.vegetarian" />
        <label>Vegetarian?</label>
      </div>
      <div class="check">
        <input type="checkbox" v-model="recipe.dietary.vegan" />
        <label>Vegan?</label>
      </div>
      <div class="check">
        <input type="checkbox" v-model="recipe.dietary.glutenFree" />
        <label>Gluten Free?</label>
      </div>
    </div>

    <div class="right card">
      <h3>Add Ingredients</h3>
      <div v-for="(ingredient, i) in recipe.ingredients" :key="`ingredient-field-${i}`" class="ingredient">
        <input v-model="ingredient.name" placeholder="Name" />
        <input v-model="ingredient.amount" placeholder="Amount" />
      </div>
      <button @click="addIngredient">Add Another Ingredient</button>
    </div>

    <div class="send">
      <button @click="sendRecipe">Post via Fetch</button>
      <button @click="createRecipe">Send via Mutation</button>
    </div>

  </div>
</template>

<script>
import gql from 'graphql-tag';

const NEW_RECIPE = gql`
  mutation CreateRecipe {
    createRecipe(input: $input)
      @rest(type: "Recipe", path: "", method: "POST") {
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
  name: 'Admin',
  data() {
    return {
      recipe: {
        name: '',
        category: 'Select One',
        description: '',
        ingredients: [
          {
            name: '',
            amount: ''
          }
        ],
        images: [],
        dietary: {
          vegetarian: false,
          vegan: false,
          glutenFree: false
        }
      }
    };
  },
  methods: {
    addIngredient: function() {
      const newIngredients = [...this.recipe.ingredients];

      newIngredients.push({ name: '', amount: '' });

      this.recipe.ingredients = newIngredients;
    },
    sendRecipe: async function() {
      const recipeToSend = { ...this.recipe };
      const images = [];

      images.push(recipeToSend.images);

      recipeToSend.images = images;

      const rawResponse = await fetch('http://localhost:6969/api/recipes/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeToSend)
      });

      const content = await rawResponse.json();

      /* eslint-disable */
      console.log(content);
    },
    createRecipe: function() {
      this.$apollo.mutate({
        mutation: NEW_RECIPE,
        variables: {
          input: this.recipe
        }
      });
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: left;

  padding: 0 25px;
}

input,
select {
  display: block;
  margin: 25px 0;
  width: 85%;

  box-sizing: border-box;

  border: 0;
  border-bottom: 1px solid steelblue;

  font-size: 22px;
}

input:focus,
select:focus {
  outline: none;
}

input[type='checkbox'] {
  display: inline-block;
  width: auto;
  margin: 0 25px 0 0;
}

label {
  font-size: 22px;
}

.admin-container {
  max-width: 980px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
}

.check {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  border-bottom: 1px solid steelblue;

  margin: 25px 0;

  width: 85%;
}

.left,
.right {
  width: 50%;

  padding: 5px 25px;
}

.left h3,
.right h3 {
  font-size: 24px;
}

.right {
  display: flex;
  flex-direction: column;

  margin: 0 50px;
}

.right button,
.send button {
  background-color: steelblue;

  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-decoration: none;

  margin: 25px;
  padding: 10px 15px;

  cursor: pointer;
}

.right button:hover,
.send button:hover {
  color: #4dba87;
}

.ingredient {
  display: flex;
}

.ingredient input {
  margin: 15px;
}

.send {
  display: flex;
  flex-direction: column;
}
</style>
