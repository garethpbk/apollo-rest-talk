import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Fetch extends Component {
  state = {
    recipes: [],
  };

  componentWillMount = () => {
    fetch('http://localhost:6969/api/recipes/')
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
        <h1>Fetch</h1>
        <ul>
          {recipes.map(recipe => {
            const { _id, name, images, dietary } = recipe;
            const { vegetarian, vegan, glutenFree } = dietary;
            console.log(images[0]);
            return (
              <li key={name}>
                <Link to={`fetch/${_id}`}>
                  <h2>{name}</h2>
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
