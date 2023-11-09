const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.PG_URI);

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
