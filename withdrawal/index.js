const express = require('express');

const app = express();

app.get('/withdrawal',(req,res)=>{
    res.status(200).send('This is the Withdrawal service')
})

const port = 8080;
app.listen(port,() => console.log(`The Withdrawal Service is listening on port ${port}`))