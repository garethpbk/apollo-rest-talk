import React, { Component } from 'react';

export default class Admin extends Component {
  state = {
    recipe: {
      name: '',
      category: '',
      description: '',
      ingredients: [],
      images: [],
      dietary: { vegetarian: false, vegan: false, glutenFree: false },
    },
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    const updateObj = { ...this.state.recipe };

    updateObj[name] = value;

    this.setState({
      recipe: updateObj,
    });
  };

  checkboxHandler = e => {
    const name = e.target.name;

    const updateObj = { ...this.state.recipe };

    updateObj.dietary[name] = !updateObj.dietary[name];

    this.setState({
      recipe: updateObj,
    });
  };

  render() {
    const { name, category, description, ingredients, images, dietary } = this.state.recipe;
    return (
      <div className="admin-container">
        <div className="left">
          <input name="name" type="text" value={name} placeholder="Name..." onChange={e => this.changeHandler(e)} />
          <select name="category" value={category} onChange={e => this.changeHandler(e)}>
            <option value="Select One">Select One</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Second Breakfast">Second Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Main Course">Main Course</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
          </select>
          <input
            name="description"
            type="text"
            value={description}
            placeholder="Description..."
            onChange={e => this.changeHandler(e)}
          />
          <input
            name="images"
            type="text"
            value={images}
            placeholder="Images..."
            onChange={e => this.changeHandler(e)}
          />
          <input
            name="vegetarian"
            type="checkbox"
            checked={dietary.vegetarian}
            onClick={e => this.checkboxHandler(e)}
          />
          <label htmlFor="vegetarian" onClick={e => this.checkboxHandler(e)}>
            Vegetarian?
          </label>
          <input name="vegan" type="checkbox" checked={dietary.vegan} onClick={e => this.checkboxHandler(e)} />
          <label htmlFor="vegan">Vegan?</label>
          <input
            name="glutenFree"
            type="checkbox"
            checked={dietary.glutenFree}
            onClick={e => this.checkboxHandler(e)}
          />
          <label htmlFor="glutenFree">Gluten Free?</label>
        </div>
      </div>
    );
  }
}
