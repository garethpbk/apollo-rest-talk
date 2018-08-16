import React, { Component } from 'react';

export default class Fetch extends Component {
  state = {
    loadedRecipe: {
      name: '',
      category: '',
      description: '',
      ingredients: [],
      images: [],
      dietary: {},
    },
  };

  componentWillMount = () => {
    fetch('http://localhost:6969/api/recipes/5b739cacd774cf297481abeb')
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({ loadedRecipe: resJson });
      });
  };

  render() {
    const { name, category, description, ingredients, images, dietary } = this.state.loadedRecipe;
    const { vegetarian, vegan, glutenFree } = dietary;
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
        <p>{vegetarian ? 'Vegetarian!' : 'Not vegetarian'}</p>
        <p>{vegan ? 'Vegan!' : 'Not vegan'}</p>
        <p>{glutenFree ? 'Gluten-Free!' : 'Has gluten'}</p>
      </div>
    );
  }
}
