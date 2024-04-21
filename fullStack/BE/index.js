require("dotenv").config();
const express = require('express');
const app = express();
const pool  = require('./database');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const {cookieVerification, verifyToken}  = require('./middleware');
// const cookie = require('cookie');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// app.post('/verifyToken', (req, res) => {
//     const tokenValue = req.cookie('token');
//     res.json(token);
// }); 

app.get('/api/getProduct', cookieVerification, verifyToken,  async(req, res)=> {
    try {
        const result = await pool.query('SELECT * FROM product');
        // res.send(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.post('/user/login', async(req, res) => {
    const { email, password } = req.body;
    console.log({email, password});
    try {
        const User = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (User.rows.length === 0) {
            return res.status(400).send("User not found");
        }
        const hashedPassword = User.rows[0].password;
        if (await bcrypt.compare(password, hashedPassword)) {
            const user = {email : email};
            const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn : '10s'
            })
            res.cookie("token", access_token, {
                expires : new Date(Date.now() + 15000),
                httpOnly: true
            });
            // console.log(access_token);
            res.redirect('http://localhost:5500/FE/home/home.html');
        } else {
            res.status(401).send("Invalid credentials");
        }
    }
    catch {
        res.status(500).send("Error");
    }
    // console.log({email, password});
    // res.redirect('/');
})

app.post('/user/register', async (req, res) => {
    try {
        const {name, email, phone, password} = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);
        await pool.query('INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4)', [name, email, phone, hashedPass]);
        const user = {email : email};
        const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn : '10s'
        })
        res.cookie("token", access_token, {
            expires : new Date(Date.now() + 15000),
            httpOnly: true
        });
        console.log(access_token);
        res.redirect('http://localhost:5500/FE/home/home.html');
        console.log("signed up");
        console.log({name, email, phone, hashedPass});
    }
    catch {
        res.status(500).send("Something went wrong");
    }
})

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is listening at ${PORT}`)
})