// src/config/database.config.js

module.exports = {
  development: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB || 'TestBD-Claude',
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: 'postgres',
  },
  production: {
    // Add production database configuration here
  },
};