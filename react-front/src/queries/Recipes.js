/**
 * NOTE: Ideally this would be a .gql or .graphql file and queries could be written without graphl-tag
 * As of now, react-scripts does not include graphql-loader, and I don't feel like ejecting or messing with cra-rewired
 * So we will just use JS here...
 */

import gql from 'graphql-tag';

export const ALL_RECIPES = gql`
  query ALL_RECIPES {
    recipes @rest(type: "Recipe", path: "") {
      _id
      name
      images
      dietary @type(name: "Dietary") {
        vegetarian
        vegan
        glutenFree
      }
    }
  }
`;

export const GET_RECIPE = gql`
  query GET_RECIPE($id: ID!) {
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

export const NEW_RECIPE = gql`
  mutation NEW_RECIPE {
    createRecipe(input: $input) @rest(type: "Recipe", path: "", method: "POST") {
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
