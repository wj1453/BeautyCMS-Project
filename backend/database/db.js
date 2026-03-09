const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'beautycms.sqlite'),
  logging: false
});

// Test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to SQLite database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
