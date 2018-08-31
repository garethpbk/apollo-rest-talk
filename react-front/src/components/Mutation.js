import React, { PureComponent } from 'react';

class MutationButton extends PureComponent {
  sendMutation = () => {
    const { name, category, description, images, ingredients, dietary } = this.props.recipe;
    this.props.createRecipe({ variables: { input: { name, category, description, images, ingredients, dietary } } });
  };

  render() {
    return <button onClick={this.sendMutation}>Send Mutation</button>;
  }
}

export default MutationButton;
