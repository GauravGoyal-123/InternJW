const dgram = require('dgram');

// Create a UDP client
const client = dgram.createSocket('udp4');

// Message to be sent
const message = Buffer.from('Hello, UDP servers!');

// Server address and port
const SERVER_PORT = 12345;
const SERVER_HOST = '127.0.0.1';

// Send the message to the server
client.send(message, SERVER_PORT, SERVER_HOST, (err) => {
  if (err) {
    console.error(`Error sending message: ${err}`);
    client.close();
  } else {
    console.log(`Message sent to ${SERVER_HOST}:${SERVER_PORT}`);
    // Close the client after sending the message
    client.close();
  }
});
