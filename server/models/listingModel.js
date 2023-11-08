const { Sequelize, DataTypes } = require('sequelize');
// import { Sequelize, DataTypes } from 'sequelize';
// const PG_URI =
//   'postgres://surqoxeu:WwLi5wRJoKuB1yOAWnfyjNRU7tky4jzz@bubble.db.elephantsql.com/surqoxeu';
const PG_URI = 'postgres://pqyfyiwo:5dvI7otp5VseiJJVdnjNhhlq5yQpKoHY@bubble.db.elephantsql.com/pqyfyiwo';
const sequelize = new Sequelize(PG_URI);

const Listing = sequelize.define('listings', {
  title: DataTypes.STRING,
  company: DataTypes.STRING,
  level: DataTypes.STRING,
  hours: DataTypes.STRING,
  minsalary: DataTypes.INTEGER,
  maxsalary: DataTypes.INTEGER,
  location: DataTypes.STRING,
  status: DataTypes.STRING,
  url: DataTypes.STRING,
  userid: DataTypes.INTEGER,
  listingid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
},{ timestamps: false });

module.exports = Listing;
