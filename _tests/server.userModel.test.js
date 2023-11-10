const { Sequelize, DataTypes } = require('sequelize');
const User = require('../server/models/userModel');
require('dotenv').config();
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(process.env.PG_URI);

describe('User Model', () => {
  // runs before test functions to SYNC 
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  afterEach(async () => {
    // Clear the users table after each test
    await User.destroy({ where: {}, truncate: true, cascade: true });
  });

  it('should create a unique user', async () => {
    const uniqueUsername = `testuser_${Date.now()}`;
    const uniqueEmail = `testemail_${Date.now()}`;
    try {
      const user = await User.create({
        firstname: 'John',
        lastname: 'Cena',
        username: uniqueUsername,
        email: uniqueEmail,
        password: 'password123',
    });

    // Assertions
    expect(user).toHaveProperty('userid');
    expect(user.firstname).toBe('John');
    
    } catch (error) {
      console.log('Error during user creation test: ', error);
      throw error;
    }
  });

  it ('should hash the user password before saving', async () => {
    const uniqueUsername = `testuser_${Date.now()}`;
    const uniqueEmail = `testemail_${Date.now()}@example.com`;
    const plainPassword = 'password123';
    try {
      const user = await User.create({
        firstname: 'Janet',
        lastname: 'Jackson',
        username: uniqueUsername,
        email: uniqueEmail,
        password: plainPassword,
      });
      // Assertions
      // Check if the password in the database is hashed
      expect(user.password).not.toBe(plainPassword);
      // Check if the hashed password can be compared correctly
      const isPasswordValid = await bcrypt.compare(plainPassword, user.password);
      expect(isPasswordValid).toBe(true);
    } catch (error) {
      console.log('Error during password hashing test: ', error);
      throw error;
    }
  });

  it ('should not allow creation of a user without a required field', async () => {
    const uniqueUsername = `testuser_${Date.now()}`;
    // Ommitting the email field intentionally
    await expect(
      User.create({
        firstname: 'Invalid',
        lastname: 'Guy',
        username: uniqueUsername,
        password: 'password123',
      })
    ).rejects.toThrow();
  })
});