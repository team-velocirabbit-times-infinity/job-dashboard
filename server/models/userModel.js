

const { Sequelize, DataTypes } = require('sequelize');
// const PG_URI =
//   'postgres://surqoxeu:WwLi5wRJoKuB1yOAWnfyjNRU7tky4jzz@bubble.db.elephantsql.com/surqoxeu';
const PG_URI = 'postgres://pqyfyiwo:5dvI7otp5VseiJJVdnjNhhlq5yQpKoHY@bubble.db.elephantsql.com/pqyfyiwo';
const sequelize = new Sequelize(PG_URI);

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

module.exports = User;
