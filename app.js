const express = require('express')
const app = express();


// home page route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//about me page route
app.get('/about', (req,res) => {
    res.send('about me page')
})

//creating a route with params
app.get('/:name/:surname/:age', (req, res) => {
    res.send(req.params)
})

//creating a route with a query string
app.get('/query', (req, res) => {
    const query = req.query
    res.send(req.query)
})


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});