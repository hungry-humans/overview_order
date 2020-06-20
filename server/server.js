const express = require('express');
const app = express();

const cors = require('cors');
const bodyparser = require('body-parser');

//db for business
const bizdb = require('../database/db_biz');


app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('public'));


// Checking if API uses biz_id
app.param('biz_id', (req, res, next, id) => {
  console.log('API_business information is request');
  next();
});

//API business info - for overview
app.get('/search/:biz_id', (req, res) => {
  bizdb.sync()
    // eslint-disable-next-line camelcase
    .then(()=> bizdb.findOne({where:{biz_id: req.params.biz_id}}))
    .then((business) => res.status(200).json(business))
    .finally(() => res.end() );
});


const port = 3000;
app.listen(port, () => console.log(`http://localhost:${port} up and running`));