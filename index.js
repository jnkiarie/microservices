const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('This is the default service')
})

const port = 8080;
app.listen(port,() => console.log(`The Defaul Server is listening on port ${port}`))