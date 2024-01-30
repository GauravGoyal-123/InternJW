const express = require("express");
const app = express();

const port = 3002;

app.get('/ping', (req ,res)=> {
    res.send("Okay2");
})

app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`);
})