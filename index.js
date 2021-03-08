const express = require('express');
const app = express();
const port = 3000

app.get('/', (req,res) => res.send('hello world'))

app.get('/signin', (req,res) => {
    return res.send('your in sign in route')
})

app.listen(port, () => console.log("server is up and running"))