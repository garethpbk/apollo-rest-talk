import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Gql extends Component {
  render() {
    return (
      <Query query={ALL_RECIPES}>
        {({ data, loading }) => {
          if (loading) return 'Loading...';

          const { recipes } = data;

          return (
            <div>
              <h2>GraphQL</h2>
              <ul className="cards">
                {recipes.map(recipe => {
                  const { _id, name, images, dietary } = recipe;
                  const { vegetarian, vegan, glutenFree } = dietary;
                  return (
                    <li className="card" key={name}>
                      <Link to={`gql/${_id}`}>
                        <h3>{name}</h3>
                        <div
                          className="food-img"
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className="dietary-container">
                          <span>{vegetarian ? 'Veggie' : ''}</span>
                          <span>{vegan ? 'Vegan' : ''}</span>
                          <span>{glutenFree ? 'GF' : ''}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

const ALL_RECIPES = gql`
  query AllRecipes {
    recipes @rest(type: "Recipe", path: "") {
      _id
      name
      images
      dietary @type(name: "Dietary") {
        vegetarian
        vegan
        glutenFree
      }
    }
  }
`;
