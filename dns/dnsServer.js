const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const dnsRecords = {
  // 'www.example.com': '192.168.1.1',
  // 'mail.example.com': '192.168.1.2',
  // Add more DNS records as needed
};

server.on('message', (message, remote) => {
  const domain = message.toString();
  const ip = generateDynamicIP(domain) || 'Not found';

  server.send(ip, remote.port, remote.address, (err) => {
    if (err) {
      console.error(`Error sending response to ${remote.address}:${remote.port}: ${err.message}`);
    }
  });
});

server.on('listening', () => {
  const address = server.address();
  console.log(`DNS Server listening on ${address.address}:${address.port}`);
});

function generateDynamicIP(domain) {
  // Simulate dynamic IP generation based on the domain name
  return `192.168.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

server.bind(53); // DNS typically uses port 53
