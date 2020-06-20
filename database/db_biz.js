/* eslint-disable camelcase */
const Sequelize = require('sequelize');
let faker = require('faker');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('mydb', 'noobdev', 'post', {
  host: 'localhost',
  dialect: 'postgres'
});


var biz = sequelize.define('business', {
  'biz_id': Sequelize.TEXT,
  'name': Sequelize.TEXT,
  'address': Sequelize.TEXT,
  'city': Sequelize.TEXT,
  'state': Sequelize.TEXT,
  'postal_code': Sequelize.TEXT,
  'stars': Sequelize.REAL,
  'review_count': Sequelize.INTEGER,
  'is_open': Sequelize.BOOLEAN,
  'attributes': Sequelize.ARRAY(Sequelize.TEXT),
  'categories': Sequelize.ARRAY(Sequelize.TEXT),
  'hours': Sequelize.ARRAY(Sequelize.TEXT)
});


module.exports = biz;