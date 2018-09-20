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
      <button @click="removeIngredient">Remove Last Ingredient</button>
      <p class="error">{{ ingredientsError }}</p>
    </div>

    <div class="send card">
      <button @click="validateFetch">Post via Fetch</button>
      <button @click="validateGql">Send via Mutation</button>
      <p class="error">{{ fetchError }}</p>
      <p class="error">{{ gqlError }}</p>
      <p class="success">{{ successMessage }}</p>
    </div>

  </div>
</template>

<script>
import { NEW_RECIPE } from '../queries/Recipes.gql';

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
            amount: '',
          },
        ],
        images: [],
        dietary: {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
        },
      },
      fetchError: '',
      gqlError: '',
      ingredientsError: '',
      successMessage: '',
    };
  },
  methods: {
    addIngredient: function() {
      const newIngredients = [...this.recipe.ingredients];

      newIngredients.push({ name: '', amount: '' });

      this.recipe.ingredients = newIngredients;
    },
    removeIngredient: function() {
      const currentIngredients = [...this.recipe.ingredients];
      let error = this.ingredientsError;

      if (currentIngredients.length > 1) {
        currentIngredients.pop();
        this.recipe.ingredients = currentIngredients;
        error = '';
      } else {
        error = 'You must have at least one ingredient!';
      }

      this.ingredientsError = error;
    },
    sendRecipe: async function() {
      const recipeToSend = { ...this.recipe };
      const images = [];

      images.push(recipeToSend.images);

      recipeToSend.images = images;

      // eslint-disable-next-line
      const rawResponse = await fetch('http://recipe.gareth.cool/api/recipes/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeToSend),
      });

      await this.clearRecipe();

      this.successMessage = 'Recipe successfully sent via fetch!';
    },
    validateFetch: function() {
      if (
        this.recipe.name.length === 0 ||
        this.recipe.category.length === 0 ||
        this.recipe.category === 'Select One' ||
        this.recipe.description.length === 0 ||
        this.recipe.ingredients[0].name.length === 0 ||
        this.recipe.ingredients[0].amount.length === 0 ||
        this.recipe.images.length === 0
      ) {
        this.fetchError = 'Fetch Error!  Please ensure all fields are filled out';
      } else {
        this.fetchError = '';

        this.sendRecipe();
      }
    },
    validateGql: function() {
      if (
        this.recipe.name.length === 0 ||
        this.recipe.category.length === 0 ||
        this.recipe.category === 'Select One' ||
        this.recipe.description.length === 0 ||
        this.recipe.ingredients[0].name.length === 0 ||
        this.recipe.ingredients[0].amount.length === 0 ||
        this.recipe.images.length === 0
      ) {
        this.gqlError = 'GraphQL Error!  Please ensure all fields are filled out';
      } else {
        this.gqlError = '';

        this.createRecipe();
      }
    },
    createRecipe: async function() {
      await this.$apollo.mutate({
        mutation: NEW_RECIPE,
        variables: {
          input: this.recipe,
        },
      });

      await this.clearRecipe();

      this.successMessage = 'Recipe successfully sent via GraphQL!';
    },
    clearRecipe: function() {
      this.recipe = {
        name: '',
        category: 'Select One',
        description: '',
        ingredients: [
          {
            name: '',
            amount: '',
          },
        ],
        images: [],
        dietary: {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
        },
      };
    },
  },
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
  max-width: 1200px;
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
  flex-basis: 40%;

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
  flex-basis: 20%;
}

.error,
.success {
  font-size: 18px;
  font-weight: 600;
  padding: 0 15px;
}

.error {
  color: tomato;
}

.success {
  color: seagreen;
}
</style>
