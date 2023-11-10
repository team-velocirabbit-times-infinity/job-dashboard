const bcrypt = require('bcrypt');
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URI);

const User = sequelize.define('users', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
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
