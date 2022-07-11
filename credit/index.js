const express = require('express');

const app = express();

app.get('/credit',(req,res)=>{
    res.status(200).send('This is the Credit service')
})

const port = 8080;
app.listen(port,() => console.log(`Credit Service is listening on port ${port}`))