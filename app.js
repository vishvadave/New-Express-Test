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
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});