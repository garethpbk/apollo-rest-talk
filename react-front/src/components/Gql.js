import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Gql extends Component {
  render() {
    return (
      <Query query={query}>
        {({ data, loading }) => {
          if (loading) return 'Loading...';

          const { recipe } = data;
          const { name, category, description, ingredients, images, dietary } = recipe;
          const { vegetarian, vegan, glutenFree } = dietary;

          return (
            <div>
              <h1>GraphQL</h1>
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
        }}
      </Query>
    );
  }
}

const query = gql`
  query tacos {
    recipe @rest(type: "Recipe", path: "5b73a0f4d774cf297481abf4") {
      name
      category
      description
      ingredients
      images
      dietary @type(name: "Dietary") {
        vegetarian
        vegan
        glutenFree
      }
    }
  }
`;
