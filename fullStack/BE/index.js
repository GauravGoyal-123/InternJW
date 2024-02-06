const express = require('express');
const app = express();
const pool  = require('./database');
const cors = require('cors');

app.use(cors());

app.get('/api/getProduct', async(req, res)=> {
    try {
        const result = await pool.query('SELECT * FROM product');
        // res.send(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is listening at ${PORT}`)
})