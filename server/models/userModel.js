const bcrypt = require('bcrypt');
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URI);

const User = sequelize.define('users', {
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  password: DataTypes.STRING,
}, { timestamps: false });

User.beforeCreate((user, options) => {

  return bcrypt.hash(user.password, 5)
      .then(hash => {
          user.password = hash;
      })
      .catch(err => {
          throw new Error();
      });
});

module.exports = User;
