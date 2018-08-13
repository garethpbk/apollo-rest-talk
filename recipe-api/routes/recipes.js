const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', (req, res) => {
  Recipe.find().then(recipes => {
    res.status(200).json(recipes);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Recipe.findById(id).then(recipe => {
    recipe ? res.status(200).json(recipe) : res.status(404).send('404 recipe not found');
  });
});

router.post('/', (req, res) => {
  const newRecipe = new Recipe(req.body);
  newRecipe.save((err, recipe) => {
    recipe ? res.status(201).json(recipe) : res.tsatus(404).send(err);
  });
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Recipe.findByIdAndUpdate(id, { $set: update }, (err, recipe) => {
    recipe ? res.status(204).json(recipe) : res.status(404).send(err);
  });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  Recipe.findByIdAndRemove(id, (err, recipe) => {
    recipe ? res.status(200).json(recipe) : res.status(404).send(err);
  });
});

module.exports = router;
