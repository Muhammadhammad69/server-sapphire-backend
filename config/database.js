// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 7485,
//     dialect: process.env.DB_DIALECT
//   }
// );

// module.exports = sequelize;

// ok code for local development
// const { Sequelize } = require('sequelize');

// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 5432,
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// );

// module.exports = sequelize;


const { Sequelize } = require('sequelize');

require('dotenv').config();

console.log('DATABASE FILE LOADED');
console.log('SEQUELIZE LOADED');
console.log('PG PATH:', require.resolve('pg'));
console.log('PG VERSION:', require('pg/package.json').version);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;