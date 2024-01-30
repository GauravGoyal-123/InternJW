const dns = require('dns');
const http = require('http');

// Sample DNS records
const dnsRecords = {
  'example.com': '192.168.1.1',
  'subdomain.example.com': '192.168.1.2',
};

// DNS resolver function
function resolveDomain(domain, callback) {
  const ipAddress = dnsRecords[domain];
  if (ipAddress) {
    callback(null, ipAddress);
  } else {
    callback(new Error(`Domain not found: ${domain}`));
  }
}

// HTTP server handling DNS queries
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/')) {
    const domain = req.url.split('/')[1];
    resolveDomain(domain, (error, ipAddress) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`Not Found: ${error.message}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Resolved IP address for ${domain}: ${ipAddress}`);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the HTTP server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
