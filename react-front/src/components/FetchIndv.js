import React, { Component } from 'react';

export default class FetchIndv extends Component {
  state = {
    recipe: {
      name: '',
      category: '',
      description: '',
      images: [],
      ingredients: [],
      dietary: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
    },
  };

  componentWillMount = () => {
    const id = this.props.props.match.params.id;

    fetch(`https://recipe.gareth.cool/api/recipes/${id}`)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({ recipe: resJson });
      });
  };
  render() {
    const { name, description, images, ingredients } = this.state.recipe;
    return (
      <div>
        <h2>Individual Fetch</h2>
        <div className="indv-wrapper">
          <div className="indv-left card">
            <h4>{name}</h4>
            <img src={images[0]} alt={name} />
          </div>
          <div className="indv-right card">
            <p>{description}</p>
            <ul>
              {ingredients.map(ingredient => {
                return (
                  <li key={ingredient.name}>
                    <strong>{`${ingredient.name}`}</strong>
                    {`, ${ingredient.amount}`}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
