const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

const databaseConfig = {
  user: 'majid',
  host: 'localhost',
  database: 'majid',
  password: 'majid',
  port: 5432, // Default PostgreSQL port
}

const PORT = process.env.APP_PORT

module.exports = {
  databaseConfig,
  PORT
}