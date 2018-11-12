/**
 *
 * NOTE: When you send a POST request with fetch, the Apollo cache does not automatically update
 * So the new entry added will not show up without refreshing the page
 * By default sending a graphql mutation has the same behavior so..
 * ...we use the update prop in the <Mutation /> component to tell Apollo to update the cache when a mutation is sent
 *
 * I dunno if there is a way to update the cache through fetch, but it's not worth pursuing imo
 * You should not have to use fetch and mutations together, this is just for demonstrative purposes
 *
 */

import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { loader } from 'graphql.macro';
import MutationButton from './Mutation';

const ALL_RECIPES = loader('../queries/ALL_RECIPES.graphql');
const NEW_RECIPE = loader('../queries/NEW_RECIPE.graphql');

export default class Admin extends Component {
  state = {
    recipe: {
      name: '',
      category: '',
      description: '',
      ingredients: [
        {
          name: '',
          amount: '',
        },
      ],
      images: [],
      dietary: { vegetarian: false, vegan: false, glutenFree: false },
    },
    fetchError: '',
    gqlError: '',
    ingredientsError: '',
    successMessage: '',
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    const updateObj = { ...this.state.recipe };

    updateObj[name] = value;

    this.setState(() => ({
      recipe: updateObj,
    }));
  };

  checkboxHandler = e => {
    const name = e.target.name;

    const updateObj = { ...this.state.recipe };

    updateObj.dietary[name] = !updateObj.dietary[name];

    this.setState(() => ({
      recipe: updateObj,
    }));
  };

  changeIngredients = (e, i) => {
    const { name, value } = e.target;

    const updateObj = { ...this.state.recipe };

    updateObj.ingredients[i][name] = value;

    this.setState(() => ({
      recipe: updateObj,
    }));
  };

  addIngredient = () => {
    const updateObj = { ...this.state.recipe };

    updateObj.ingredients.push({ name: '', amount: '' });

    this.setState(() => ({
      recipe: updateObj,
    }));
  };

  removeIngredient = () => {
    const updateObj = { ...this.state.recipe };
    let error = this.state.ingredientsError;

    if (updateObj.ingredients.length > 1) {
      updateObj.ingredients.pop();
      error = '';
    } else {
      error = 'You must have at least one ingredient!';
    }

    this.setState(() => ({
      recipe: updateObj,
      ingredientsError: error,
    }));
  };

  // quick and dirty form validation for fetch to make sure each field has something in it/selected
  validateFetch = async () => {
    const fields = { ...this.state.recipe };

    const { name, category, description, ingredients, images } = fields;

    if (
      name.length === 0 ||
      category.length === 0 ||
      category === 'Select One' ||
      description.length === 0 ||
      ingredients[0].name.length === 0 ||
      ingredients[0].amount.length === 0 ||
      images.length === 0
    ) {
      await this.setState(() => ({
        fetchError: 'Fetch Error!  Please ensure all fields are filled out.',
      }));
    } else {
      await this.setState(() => ({
        fetchError: '',
      }));

      this.sendRecipe();
    }
  };

  setGqlError = error => {
    if (error) {
      this.setState(() => ({ gqlError: 'GraphQL Error!  Please ensure all fields are filled out.' }));
    } else {
      this.setState(() => ({
        gqlError: '',
        successMessage: 'Recipe successfuly sent via GraphQL!',
      }));
    }
  };

  sendRecipe = async () => {
    const recipeToSend = { ...this.state.recipe };
    const images = [];

    images.push(recipeToSend.images);

    recipeToSend.images = images;

    const rawResponse = await fetch('https://recipe.gareth.cool/api/recipes/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeToSend),
    });

    await this.clearRecipe();

    this.setState(() => ({
      successMessage: 'Recipe successfully sent via fetch!',
    }));

    return rawResponse;
  };

  clearRecipe = () => {
    this.setState(() => ({
      recipe: {
        name: '',
        category: '',
        description: '',
        ingredients: [
          {
            name: '',
            amount: '',
          },
        ],
        images: [],
        dietary: { vegetarian: false, vegan: false, glutenFree: false },
      },
    }));
  };

  render() {
    const { name, category, description, ingredients, images, dietary } = this.state.recipe;
    return (
      <div className="admin-container">
        <div className="left card">
          <h3>Add a Recipe</h3>
          <input name="name" type="text" value={name} placeholder="Name..." onChange={e => this.changeHandler(e)} />
          <select name="category" value={category} onChange={e => this.changeHandler(e)}>
            <option value="Select One">Select One</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Second Breakfast">Second Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Main Course">Main Course</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
          </select>
          <input
            name="description"
            type="text"
            value={description}
            placeholder="Description..."
            onChange={e => this.changeHandler(e)}
          />
          <input
            name="images"
            type="text"
            value={images}
            placeholder="Images..."
            onChange={e => this.changeHandler(e)}
          />
          <div className="check">
            <input
              name="vegetarian"
              type="checkbox"
              checked={dietary.vegetarian}
              onClick={e => this.checkboxHandler(e)}
            />
            <label htmlFor="vegetarian" onClick={e => this.checkboxHandler(e)}>
              Vegetarian?
            </label>
          </div>
          <div className="check">
            <input name="vegan" type="checkbox" checked={dietary.vegan} onClick={e => this.checkboxHandler(e)} />
            <label htmlFor="vegan">Vegan?</label>
          </div>
          <div className="check">
            <input
              name="glutenFree"
              type="checkbox"
              checked={dietary.glutenFree}
              onClick={e => this.checkboxHandler(e)}
            />
            <label htmlFor="glutenFree">Gluten Free?</label>
          </div>
        </div>
        <div className="right card">
          <h3>Add Ingredients</h3>
          {ingredients.map((ingredient, i) => {
            return (
              <div key={`ingredient-field-${i}`} className="ingredient">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={ingredient.name}
                  onChange={e => this.changeIngredients(e, i)}
                />
                <input
                  name="amount"
                  type="text"
                  placeholder="Amount"
                  value={ingredient.amount}
                  onChange={e => this.changeIngredients(e, i)}
                />
              </div>
            );
          })}
          <button onClick={() => this.addIngredient()}>Add Another Ingredient</button>
          <button onClick={() => this.removeIngredient()}>Remove Last Ingredient</button>
          <p className="error">{this.state.ingredientsError}</p>
        </div>
        <div className="send card">
          <button onClick={() => this.validateFetch()}>Post via Fetch</button>
          <Mutation
            mutation={NEW_RECIPE}
            fetchPolicy="no-cache"
            update={(cache, { data: { createRecipe } }) => {
              const { recipes } = cache.readQuery({ query: ALL_RECIPES });
              cache.writeQuery({
                query: ALL_RECIPES,
                data: { recipes: recipes.concat([createRecipe]) },
              });
            }}
          >
            {(createRecipe, { data, loading, error }) => {
              return (
                <MutationButton
                  createRecipe={createRecipe}
                  recipe={this.state.recipe}
                  loading={loading}
                  error={error}
                  setGqlError={this.setGqlError}
                  clearRecipe={this.clearRecipe}
                />
              );
            }}
          </Mutation>
          <p className="error">{this.state.fetchError}</p>
          <p className="error">{this.state.gqlError}</p>
          <p className="success">{this.state.successMessage}</p>
        </div>
      </div>
    );
  }
}
