import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { ApolloProvider } from 'react-apollo';
import './App.css';

import Admin from './components/Admin';
import Gql from './components/Gql';
import Fetch from './components/Fetch';

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
              <Link to="/">GraphQL</Link>
              <br />
              <Link to="/fetch">Fetch</Link>
              <br />
              <Link to="/admin">Admin</Link>
            </header>
            <Switch>
              <Route exact path="/" render={props => <Gql />} />
              <Route exact path="/fetch" render={props => <Fetch />} />
              <Route exact path="/admin" render={props => <Admin />} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
