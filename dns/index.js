const DNSCache = require('./dnsCache');
const dnsCache = new DNSCache();

require('./dnsServer');
require('./dnsResolver')(dnsCache);

// Simulate multiple DNS queries
setTimeout(() => {
  require('./dnsResolver')(dnsCache);
}, 2000);

// const dgram = require('dgram');
// const server = dgram.createSocket('udp4');

// server.on('message', (msg, rinfo) => {
//   console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
// });

// server.on('listening', () => {
//   const address = server.address();
//   console.log(`UDP server listening on ${address.address}:${address.port}`);
// });

// server.bind(3000); // Bind to port 3000

