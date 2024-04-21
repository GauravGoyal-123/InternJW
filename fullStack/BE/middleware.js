require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];
    console.log(token);
    if(token == null) {
        return res.sendStatus(401);
    }
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}



function cookieVerification(req, res, next) {
    let cookie = "token";
    const token = getCookieValue(cookie);
    if(token == null) {
        return res.sendStatus(401);
    }
    console.log("cookie is present");
    next();
}
module.exports = {
    cookieVerification,
    verifyToken
};


