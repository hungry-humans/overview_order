const Sequelize = require('sequelize');
let faker = require('faker');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('mydb', 'noobdev', 'post', {
  host: 'localhost',
  dialect: 'postgres'
});


var biz = sequelize.define('business', {
  "biz_id" : Sequelize.TEXT,
  "name" : Sequelize.TEXT,
  "address" : Sequelize.TEXT,
  "city" : Sequelize.TEXT,
  "state" : Sequelize.TEXT,
  "postal_code" : Sequelize.TEXT,
  "stars" : Sequelize.REAL,
  "review_count" : Sequelize.INTEGER,
  "is_open" : Sequelize.BOOLEAN,
  "attributes" : Sequelize.ARRAY(Sequelize.TEXT),
  "categories": Sequelize.ARRAY(Sequelize.TEXT),
  "hours" : Sequelize.ARRAY(Sequelize.TEXT)
});


let seedDB = (size = 100) => {
  let res = [];

  for ( let i=0; i<size; i++) {
    res.push(
      {
        biz_id : i+1,
        name : faker.company.companyName(),
        address : faker.address.streetAddress(),
        city : faker.address.city(),
        state : faker.address.stateAbbr(),
        postal_code : faker.address.zipCode(),
        stars : (faker.random.number()%40 + 11)/10,
        review_count : faker.random.number(),
        is_open : faker.random.boolean(),
        attributes : ['', ''],
        categories : [faker.random.word(), 'food'],
        hours : [
          `Mon : ${faker.random.number()%12 + 1}-${faker.random.number()%12 + 1}`,
          `Tue : ${faker.random.number()%12 + 1}-${faker.random.number()%12 + 1}`,
          `Wed : ${faker.random.number()%12 + 1}-${faker.random.number()%12 + 1}`,
          `Thr : ${faker.random.number()%12 + 1}-${faker.random.number()%12 + 1}`,
          `Fri : ${faker.random.number()%12 + 1}-${faker.random.number()%12 + 1}`,
          `Sat : ${faker.random.number()%12 + 1}-${faker.random.number()%12 + 1}`,
          `Sun : ${faker.random.number()%12 + 1}-${faker.random.number()%12 + 1}`]
      }
    );
  }
  return res;
}


biz.sync({force:true})
  .then(()=> {
    biz.bulkCreate(seedDB());
  })
  .finally(() => {
    console.log('seeding completed');
  });