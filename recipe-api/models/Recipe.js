const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [
    {
      name: { type: String, required: true },
      amount: { type: String, required: true },
    },
  ],
  images: { type: Array, required: false },
  vegetarian: { type: Boolean, required: false },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
