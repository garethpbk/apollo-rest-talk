import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class GqlInd extends Component {
  render() {
    const id = this.props.props.match.params.id;
    console.log(id);
    return (
      <div>
        <h1>Individual GraphQL</h1>
        <Query query={GET_RECIPE} variables={{ id }}>
          {({ data, loading }) => {
            if (loading) return 'Loading...';

            const { recipe } = data;
            const { name, category, description, images, ingredients, dietary } = recipe;
            return (
              <div>
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
          }}
        </Query>
      </div>
    );
  }
}

const GET_RECIPE = gql`
  query recipe($id: ID!) {
    recipe(id: $id) @rest(type: "Recipe", path: "{args.id}") {
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
