import React, { Component } from 'react';

export default class Admin extends Component {
  render() {
    state = {
      recipe: {
        name: '',
        category: '',
        description: '',
        ingredients: [],
        images: [],
        dietary: {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
        },
      },
    };
    return <div />;
  }
}
