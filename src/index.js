const jsonServer = require('json-server');
const { join } = require('path');

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/heroes\\?name=:term': '/heroes?q=:term',
  })
);

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running at http://localhost:' + port);
});

module.exports = server;
