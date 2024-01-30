const dgram = require('dgram');

// Create a UDP server
const server = dgram.createSocket('udp4');

// Event listener for message reception
server.on('message', (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
});

// Event listener for server listening
server.on('listening', () => {
  const address = server.address();
  console.log(address);
  console.log(`UDP server listening on ${address.address}:${address.port}`);
});

// Bind the server to a specific port and address
const PORT = 12345;
server.bind(PORT);
