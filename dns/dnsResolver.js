const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const DNSCache = require('./dnsCache');  // Import the DNSCache class

const dnsCache = new DNSCache();  // Create an instance of DNSCache


const resolveDomain = (domain) => {
  // Check cache first
  const cachedIP = dnsCache.get(domain);
  if (cachedIP) {
    console.log(`Resolved IP from cache for ${domain}: ${cachedIP}`);
    return;
  }

  const message = Buffer.from(domain);

  client.send(message, 53, '127.0.0.1', (err) => {
    if (err) {
      console.error(`Error sending DNS query for ${domain}: ${err.message}`);
    }
  });

  client.on('message', (response) => {
    console.log(response.toString());
    const ip = response.toString();
    console.log(`Resolved IP for ${domain}: ${ip}`);
    
    // Cache the result
    dnsCache.set(domain, ip);

    client.close();
  });
};

// Example: Resolve IP addresses for 'www.example.com'
resolveDomain('www.google.com');
