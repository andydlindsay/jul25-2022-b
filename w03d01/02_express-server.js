const express = require('express');
const morgan = require('morgan');
const port = 12345;

const app = express();

// middleware
// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

app.use(morgan('dev'));
app.use((request, response, next) => {
  request.something = 'hello world';
  next();
});

// GET /home
app.get('/home', (request, response) => {
  console.log('request.something', request.something);
  response.send('Welcome to our website');
});

// GET /about
app.get('/about', (request, response) => {
  response.send('This is the about page served from Express');
});

// catchall route
app.get('*', (request, response) => {
  // response.status(404);
  // response.send('404. This is not the page you are looking for.');

  response.status(404).send('This is not the page you are looking for.');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
