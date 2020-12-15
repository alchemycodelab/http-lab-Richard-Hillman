const net = require('net');
// const parseRequest = require('./utils/parseRequest');
// const createResponse = require('./utils/createResponse');
// const request = parseRequest(data.toString());

const server = net.createServer(socket => {

  socket.on('data', data => {
    console.log(data.toString());
    
    socket.end(`
HTTP/1.1 200 OK
Content-Type: application/json
User-Agent: PostmanRuntime/7.26.8
Accept: */*
Postman-Token: dae767c9-569e-4eda-bff1-ff3acafe6332
Host: localhost:7890
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: ${'{name: "hello": "hello"}'.length}

{"name": "hello"}
    `.trim()); 
    
    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = server;
