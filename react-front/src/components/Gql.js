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
              <h1>GraphQL</h1>
              <ul>
                {recipes.map(recipe => {
                  const { _id, name, images, dietary } = recipe;
                  const { vegetarian, vegan, glutenFree } = dietary;
                  return (
                    <li key={name}>
                      <Link to={`gql/${_id}`}>
                        <h2>{name}</h2>
                        <div className="food-img" style={{ backgroundImage: `url(${images[0]})` }} />
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

// const query = gql`
//   query tacos {
//     recipe @rest(type: "Recipe", path: "5b73a0f4d774cf297481abf4") {
//       name
//       category
//       description
//       ingredients
//       images
//       dietary @type(name: "Dietary") {
//         vegetarian
//         vegan
//         glutenFree
//       }
//     }
//   }
// `;
