import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Fetch extends Component {
  state = {
    recipes: [],
  };

  componentWillMount = () => {
    fetch('https://recipe.gareth.cool/api/recipes/')
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({ recipes: resJson });
      });
  };

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <h2>Fetch</h2>
        <ul className="cards">
          {recipes.map(recipe => {
            const { _id, name, images, dietary } = recipe;
            const { vegetarian, vegan, glutenFree } = dietary;
            return (
              <li className="card" key={name}>
                <Link to={`fetch/${_id}`}>
                  <h3>{name}</h3>
                  <div className="food-img" style={{ backgroundImage: `url(${images[0]})` }} />
                </Link>
                <div className="dietary-container">
                  <span>{vegetarian ? 'Veggie' : ''}</span>
                  <span>{vegan ? 'Vegan' : ''}</span>
                  <span>{glutenFree ? 'GF' : ''}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
