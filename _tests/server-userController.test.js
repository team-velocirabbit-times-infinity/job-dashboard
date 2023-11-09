const userRouter = require('./routes/user');
const userController = require('../controllers/userController');
const User = require('../models/userModel');
const express = require('express');
const app = express();
const request = require('supertest');
const { Sequelize, DataTypes } = require('sequelize');

app.use('/', userRouter);


jest.mock('sequelize');

describe('getAllUsers', () => {
  it('should retrieve all users succesfully', async () => {

  })
})