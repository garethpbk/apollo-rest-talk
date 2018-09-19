import React, { PureComponent } from 'react';

class MutationButton extends PureComponent {
  sendMutation = async () => {
    const { name, category, description, images, ingredients, dietary } = this.props.recipe;

    if (
      name.length === 0 ||
      category.length === 0 ||
      category === 'Select One' ||
      description.length === 0 ||
      ingredients[0].name.length === 0 ||
      ingredients[0].amount.length === 0 ||
      images.length === 0
    ) {
      this.props.setGqlError(true);
    } else {
      await this.props.setGqlError(false);

      await this.props.createRecipe({
        variables: {
          input: { name, category, description, images, ingredients, dietary },
        },
      });

      this.props.clearRecipe();
    }
  };

  render() {
    return <button onClick={this.sendMutation}>Send via Mutation</button>;
  }
}

export default MutationButton;
