const express = require('express');
const router = express.Router();

const coffees = require('../data/coffee');

// BROWSE GET /coffees/
router.get('/', (req, res) => {
  // res.json(coffees);
  const coffeeArr = Object.values(coffees);
  res.json(coffeeArr);
});

// READ   GET /coffees/:id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const coffee = coffees[id];
  res.json(coffee);
});

// EDIT   PATCH /coffees/:id  price, size
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const {price, size} = req.body;

  const coffee = coffees[id];

  coffee.price = price;
  coffee.size = size;

  console.log(coffees);

  res.json(coffee);
});

// ADD    POST /coffees
router.post('/', (req, res) => {
  const coffee = req.body;
  const randomId = Math.random().toString(36).substring(2, 6);

  coffee.id = randomId;

  coffees[randomId] = coffee;

  console.log(coffees);

  res.json(coffee);
});

// DELETE DELETE /coffees/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  delete coffees[id];

  res.json({ success: true });
});

module.exports = router;
