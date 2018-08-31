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

    fetch(`http://localhost:6969/api/recipes/${id}`)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({ recipe: resJson });
      });
  };
  render() {
    const { name, category, description, images, ingredients, dietary } = this.state.recipe;
    return (
      <div>
        <h1>Individual Fetch</h1>
        <div className="indv-wrapper">
          <div className="indv-left">
            <h1>{name}</h1>
            <img src={images[0]} />
          </div>
          <div className="indv-right">
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
