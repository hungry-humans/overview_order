/* eslint-disable camelcase */
const Sequelize = require('sequelize');
let faker = require('faker');


let biz = require('./db_biz.js');

let seedDB = (size = 10) => {
  let res = [];

  for ( let i = 0; i < size; i++) {
    res.push(
      {
        biz_id: i + 1,
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        postal_code: faker.address.zipCode(),
        stars: (faker.random.number() % 40 + 11) / 10,
        review_count: faker.random.number(),
        is_open: faker.random.boolean(),
        attributes: ['', ''],
        categories: [faker.random.word(), 'food'],
        hours: [
          `Mon : ${faker.random.number() % 12 + 1}-${faker.random.number() % 12 + 1}`,
          `Tue : ${faker.random.number() % 12 + 1}-${faker.random.number() % 12 + 1}`,
          `Wed : ${faker.random.number() % 12 + 1}-${faker.random.number() % 12 + 1}`,
          `Thr : ${faker.random.number() % 12 + 1}-${faker.random.number() % 12 + 1}`,
          `Fri : ${faker.random.number() % 12 + 1}-${faker.random.number() % 12 + 1}`,
          `Sat : ${faker.random.number() % 12 + 1}-${faker.random.number() % 12 + 1}`,
          `Sun : ${faker.random.number() % 12 + 1}-${faker.random.number() % 12 + 1}`]
      }
    );
  }
  return res;
};


biz.sync({force: true})
  .then(()=> {
    biz.bulkCreate(seedDB());
  })
  .catch((e) => {
    console.log('error! : ', e);
  })
  .finally(() => {
    console.log('seeding completed');
  });