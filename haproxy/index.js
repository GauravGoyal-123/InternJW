const net = require('net');

const backendServers = [
  { host: 'localhost', port: 3001 },
  { host: 'localhost', port: 3002 },
];

let currentBackendIndex = 0;

const server = net.createServer((clientSocket) => {
  const { host, port } = backendServers[currentBackendIndex];

  // Forward the connection to the selected backend server
  const backendSocket = net.createConnection({ host, port }, () => {
    // Connection to the backend established
    console.log(`Forwarding connection to ${host}:${port}`);
  });

  // Pipe data between client and backend
  clientSocket.pipe(backendSocket);
  backendSocket.pipe(clientSocket);

  // Handle errors
  clientSocket.on('error', (err) => {
    console.error(`Client socket error: ${err}`);
  });

  backendSocket.on('error', (err) => {
    console.error(`Backend socket error: ${err}`);
  });

  // Handle connection closure
  clientSocket.on('end', () => {
    console.log('Client connection closed');
    backendSocket.end();
  });

  backendSocket.on('end', () => {
    console.log('Backend connection closed');
    clientSocket.end();
  });
});

// Rotate to the next backend server for each new connection
server.on('connection', () => {
  currentBackendIndex = (currentBackendIndex + 1) % backendServers.length;
});

const LISTEN_PORT = 80;

server.listen(LISTEN_PORT, () => {
  console.log(`TCP Load Balancer listening on port ${LISTEN_PORT}`);
});
