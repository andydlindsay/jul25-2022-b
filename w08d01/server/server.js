const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 5050;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

app.use(express.static('../client/build'));

// import the routers
const coffeeRouter = require('./routers/coffee-router');

// app.use the routers
app.use('/coffees', coffeeRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
