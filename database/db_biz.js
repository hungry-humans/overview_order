/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const User = require('./config.js');

const sequelize = new Sequelize(User.db, User.username, User.password, {
  host: 'localhost',
  dialect: 'postgres'
});



var biz = sequelize.define('business', {
  'biz_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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