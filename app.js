const express = require('express')
const app = express();
const request = require('request');



// home page route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//about me page route
app.get('/about', (req,res) => {
    res.send('about me page')
})

//creating a route with params with variable strings
app.get('/:name/:surname/:age', (req, res) => {
    var name = req.params.name
    var surname = req.params.surname
    var age = req.params.age
    var s = `${name} ${surname} is ${age} years old`;
    res.send(s)
})

//creating a route with a query string
app.get('/query', (req, res) => {
    const query = req.query
    res.send(req.query)
})

//creating an API
request('https://apis.instadapp.io/price', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
})

//creating a route for /getprice
app.get('/getprice', (req, res) => {
    request('https://apis.instadapp.io/price', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body)
        }
    })
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});