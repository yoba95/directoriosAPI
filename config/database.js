require('dotenv').config();

module.exports = {
    /*
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host":  process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",   
  */
   development: {
    "username": "postgres",
    "password": "1234",
    "database": "prueba",
    "host": "127.0.0.1",
    "port": 5432,
    dialect: "postgres",
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'postgres',
  }
  
}
