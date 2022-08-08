# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

http://www.lighthouselabs.com
http://localhost:8080/u/1jk9nh


Server - has data
Client - wants data

### Web Servers
* serve up internet related files: HTML, CSS, JS, JSON, XML, video, audio
* listens to the HTTP protocol: request/response protocol
* built on top of TCP
* two things needed to communicate with any server: ip and port
* ports we have to choose from: 65,535
  * HTTP 80
  * HTTPS 443
  * SSH 22
  * Postgres 5432
  * development 3000, 3001, 8000, 8001

### Request
* verb and a path
* verb => tells the server what we want to do
  * GET => retrieve information
  * POST => send information to the server
* path => tells the server what we want to do it to
  * http://localhost:8080       /urls
  * https://www.youtube.com /videos/kasdjfhads


### Response
* may or may not have a payload/body
* status code
  * 200
  * 404
  * 500
  * 1xx routing
  * 2xx everything is a-okay
  * 3xx redirection
  * 4xx something wrong with request
  * 5xx something wrong with server

TCP/snek

                      Move: up
      You ded
client <==== tcp ====> server

HTTP

response
client <=== tcp/http ===> server

request => route handler => response

           cookie-parser  body-parser
request => middleware => middleware => route handler => response
          request.cookies request.body


### Middleware
* code (in the form of a function) that sits between the request and the response


```js
const net = require('net');
const port = 12345;

const server = net.createServer();

server.on('connection', (connection) => {
  connection.write('welcome to the server');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

```js
const http = require('http');
const port = 12345;

const server = http.createServer();

server.on('request', () => {});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```











