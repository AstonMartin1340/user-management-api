// src/models/index.js

const Sequelize = require('sequelize');
const config = require('../config/database.config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize.DataTypes);

module.exports = db;