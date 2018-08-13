import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import './App.css';

const restLink = new RestLink({
  uri: 'http://localhost:6969/api/recipes/',
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Query query={query}>
              {({ data, loading }) => {
                if (loading) return 'Loading...';

                const { recipe } = data;
                const { name, category, description, ingredients, images, vegetarian } = recipe;

                return (
                  <div>
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
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

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
