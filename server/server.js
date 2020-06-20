const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/search', (req, res) => {
  console.log('testing get request');
  res.end();
});


const port = 3000;
app.listen(port, () => console.log(`http://localhost:${port} up and running`));