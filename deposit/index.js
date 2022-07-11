const express = require('express');

const app = express();

app.get('/deposit',(req,res)=>{
    res.status(200).send('This is the deposit service')
})

const port = 8080;
app.listen(port,() => console.log(`The deposit server is listening on port ${port}`))