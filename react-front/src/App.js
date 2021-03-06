import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { ApolloProvider } from 'react-apollo';
import './App.css';

import Admin from './components/Admin';
import Gql from './components/Gql';
import GqlIndv from './components/GqlIndv';
import Fetch from './components/Fetch';
import FetchIndv from './components/FetchIndv';

const restLink = new RestLink({
  uri: 'https://recipe.gareth.cool/api/recipes/',
  credentials: null,
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <header className="menu">
              <div className="background-logo" />
              <h1>Raucous Recipes</h1>
              <Link to="/">GraphQL</Link>
              <Link to="/fetch">Fetch</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <Switch>
              <Route exact path="/" render={props => <Gql />} />
              <Route exact path="/fetch" render={props => <Fetch />} />
              <Route exact path="/admin" render={props => <Admin />} />
              <Route path="/fetch/:id" render={props => <FetchIndv props={props} />} />
              <Route path="/gql/:id" render={props => <GqlIndv props={props} />} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
