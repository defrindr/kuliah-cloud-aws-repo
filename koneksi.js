const Sequelize = require('sequelize')
const sequelize = 
new Sequelize('postgres://postgres:postgres@database-1.cdmrojvambo6.ap-southeast-1.rds.amazonaws.com:5432/postgre_sample')
sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;