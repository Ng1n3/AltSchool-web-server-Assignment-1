'use strict'
const  http = require('http');

const HOSTNAME = 'localhost';
const PORT = 3000;


function requestService(req, res) {
    res.writeHead(200);
    res.end('Hello World');
}

const server = http.createServer(requestService)

server.listen(PORT, HOSTNAME, () => {
    console.log(`server is listening at http://${HOSTNAME}:${PORT}`);

})