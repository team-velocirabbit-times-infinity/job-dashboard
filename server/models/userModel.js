

const { Sequelize, DataTypes } = require('sequelize');
const PG_URI =
  'postgres://surqoxeu:WwLi5wRJoKuB1yOAWnfyjNRU7tky4jzz@bubble.db.elephantsql.com/surqoxeu';
const sequelize = new Sequelize(PG_URI);

const User = sequelize.define('users', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  password: DataTypes.STRING,
}, { timestamps: false });

module.exports = User;
