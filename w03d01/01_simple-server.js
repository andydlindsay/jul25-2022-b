const http = require('http');
const port = 12345;

const server = http.createServer();

server.on('request', (request, response) => {
  console.log(request.method, request.url);

  // response.write('welcome to the website');
  // response.end();

  if (request.method === 'GET') {
    if (request.url === '/about') { // GET /about
      response.write('this is the about page');
    } else if (request.url === '/home') {
      response.write('welcome to the home page');
    } else {
      response.statusCode = 600;
      response.write('this is not the page you are looking for');
    }
  }

  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
