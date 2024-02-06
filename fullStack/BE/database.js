const { Pool } = require('pg');
// Database connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: 'gaurav123',
    port: 5432,
});

module.exports = pool;