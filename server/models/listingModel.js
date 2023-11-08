const { Sequelize, DataTypes } = require('sequelize');
// import { Sequelize, DataTypes } from 'sequelize';
const PG_URI =
  'postgres://surqoxeu:WwLi5wRJoKuB1yOAWnfyjNRU7tky4jzz@bubble.db.elephantsql.com/surqoxeu';
const sequelize = new Sequelize(PG_URI);

const Listing = sequelize.define('listings', {
  title: DataTypes.STRING,
  company: DataTypes.STRING,
  level: DataTypes.STRING,
  hours: DataTypes.STRING,
  minSalary: DataTypes.INTEGER,
  maxSalary: DataTypes.INTEGER,
  location: DataTypes.STRING,
  status: DataTypes.STRING,
  url: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  listingId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
},{ timestamps: false });

module.exports = Listing;
