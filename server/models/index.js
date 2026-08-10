const { Sequelize } = require('sequelize');
const path = require('path');

const databaseFile = process.env.DATABASE_FILE || path.join(__dirname, '..', 'database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databaseFile,
  logging: false,
});

const Admin = require('./admin')(sequelize);
const Lecturer = require('./lecturer')(sequelize);
const Staff = require('./staff')(sequelize);
const Workshop = require('./workshop')(sequelize);
const News = require('./news')(sequelize);

module.exports = {
  sequelize,
  models: { Admin, Lecturer, Staff, Workshop, News }
};
