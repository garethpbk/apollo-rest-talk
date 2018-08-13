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
          const { name, category, description, ingredients, images, vegetarian } = recipe;

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
              <p>{vegetarian ? "Yep, it's veggie!" : 'Not veggie!'}</p>
            </div>
          );
        }}
      </Query>
    );
  }
}

const query = gql`
  query tacos {
    recipe @rest(type: "Recipe", path: "5b70da72b951a232c8d8d794") {
      name
      category
      description
      ingredients
      images
      vegetarian
    }
  }
`;
