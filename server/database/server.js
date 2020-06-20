const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/db', (req, res) => {
  console.log('testing get request');
});


const port = 3000;
app.listen(port, () => console.log(`http://localhost:${port} up and running`));