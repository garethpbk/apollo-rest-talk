import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { loader } from 'graphql.macro';
import Spinner from './Spinner';

const ALL_RECIPES = loader('../queries/ALL_RECIPES.graphql');

export default class Gql extends Component {
  render() {
    return (
      <Query query={ALL_RECIPES}>
        {({ data, error, loading }) => {
          if (loading)
            return (
              <div>
                <h2>GraphQL</h2>
                <Spinner />
              </div>
            );

          if (error)
            return (
              <div>
                <h2>GraphQL</h2>
                {`ERROR! ${error}`}
              </div>
            );

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
