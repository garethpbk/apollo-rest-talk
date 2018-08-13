import React, { Component } from 'react';

export default class Fetch extends Component {
  state = {
    loadedRecipe: {
      name: '',
      category: '',
      description: '',
      ingredients: [],
      images: [],
      vegetarian: false,
    },
  };

  componentWillMount = () => {
    fetch('http://localhost:6969/api/recipes/5b70da72b951a232c8d8d794')
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          loadedRecipe: resJson,
        });
      });
  };

  render() {
    const { name, category, description, ingredients, images, vegetarian } = this.state.loadedRecipe;
    return (
      <div>
        <h1>Fetch</h1>
        <h2>{name}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
        <ul>
          {ingredients.map(ingredient => {
            return <li key={ingredient.name}>{ingredient.name + ', ' + ingredient.amount}</li>;
          })}
        </ul>
        <img src={images[0]} alt={name} />
        <p>{vegetarian ? "Yep, it's veggie!" : 'Not veggie!'}</p>
      </div>
    );
  }
}
