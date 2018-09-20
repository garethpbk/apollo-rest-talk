import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import Spinner from './Spinner';
import { GET_RECIPE } from '../queries/Recipes';

export default class GqlInd extends Component {
  render() {
    const id = this.props.props.match.params.id;

    return (
      <Fragment>
        <h2>Individual GraphQL</h2>
        <Query query={GET_RECIPE} variables={{ id }}>
          {({ data, loading }) => {
            if (loading) return <Spinner />;

            if (error) return `ERROR! ${error}`;

            const { recipe } = data;
            const { name, category, description, images, ingredients, dietary } = recipe;
            return (
              <div>
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
          }}
        </Query>
      </Fragment>
    );
  }
}
