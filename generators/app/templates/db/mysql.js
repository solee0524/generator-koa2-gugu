/**
 * mysql config
 */
const Sequelize = require('sequelize');
const logger = require('../logger');

var MySql = {};
var options = {
  dialect: 'mysql',
  logging: function (sql) {
    logger.trace(sql);
  },
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
};

MySql.mysql = new Sequelize(process.env.MYSQL, options);

module.exports = MySql;
