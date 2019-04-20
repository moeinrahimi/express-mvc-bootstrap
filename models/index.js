var Sequelize = require('sequelize');
var config = require('../config');
var sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: 'localhost',
  dialect: 'mysql',
  charset: 'utf8',
  collate: 'utf8_general_ci',
  timezone: 'Asia/Tehran',
  logging: config.logging

})
var db = {};
db.User = sequelize.import(__dirname + "/User")
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db
