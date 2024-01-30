class DNSCache {
    constructor() {
      this.cache = {};
    }
  
    get(domain) {
      return this.cache[domain];
    }
  
    set(domain, ip) {
      this.cache[domain] = ip;
    }
}
  
module.exports = DNSCache;
  