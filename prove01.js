// Imports
const http = require('http');
const routes = require('./routes/prove01-routes');

// Could name a function...
// function rqListener(req, res) { console.log(req)}

// ...Or you could use an arrow function
const server = http.createServer(routes);

// Start listening on port 3000
server.listen(3000);