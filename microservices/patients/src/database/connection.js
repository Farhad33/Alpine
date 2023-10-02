
const { databaseConfig } = require('../config');
 
const { Client } = require('pg');

const db = new Client(databaseConfig);

// Connect to the database
db.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error:', err));

module.exports = db