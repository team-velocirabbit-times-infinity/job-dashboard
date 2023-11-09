const userController = require('../server/controllers/userController');
const User = require('../server/models/userModel');
const { Sequelize, DataTypes } = require('sequelize');

// Replace the actual import of userModel module with a mock implementation
// Now we have access to all sequelize methods to communicate as a mock
jest.mock('../server/models/userModel', () => {
  const { DataTypes, Sequelize } = require('sequelize');
  return {
    define: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    Sequelize,
    DataTypes,
  };    
});


describe('userController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUsers', () => {
    it('should retrieve all users successfully', async () => {
      const mockUsers = [
        {firstname: 'John', lastname: 'Doe', username: 'johndoe', email: 'john@example.com', userid: 1, password: 'password123'},
        {firstname: 'Jane', lastname: 'Doe', username: 'janedoe', email: 'jane@example.com', userid: 2, password: 'password456' },
      ];
      
      // Call findAll for real but immediately resolve it by passing it a mock user
      User.findAll.mockResolvedValue(mockUsers);

      // Set up promise object for mock request
      const mockReq = {};
      const mockRes = { locals: {} };
      const mockNext = jest.fn();

      await userController.getAllUsers(mockReq, mockRes, mockNext);

      // Assertions
      expect(User.findAll).toHaveBeenCalledTimes(1);
      expect(mockRes.locals.users).toEqual(mockUsers);
      expect(mockNext).toHaveBeenCalledTimes(1);
    })

    it('should handle errors when retrieving users', async () => {
      // Create a mock error and pass it into mock function that will always reject
      const mockError = new Error("couldn't get users");
      User.findAll.mockRejectedValue(mockError);

      const mockReq = {};
      const mockRes = {};
      const mockNext = jest.fn();

      await userController.getAllUsers(mockReq, mockRes, mockNext);

      // Assertions
    //   console.log('Calls to User.findAll: ', User.findAll.mock.calls)
      expect(User.findAll).toHaveBeenCalledTimes(1);
      expect(mockNext).toHaveBeenCalledWith({
        log: 'userController.getAllUsers',
        status: 500,
        message: { err: "couldn't get users" },
      })
    })
  })

  describe('addUser', () => {
    it('should add a new user successfully', async () => {
      // sample data for a new user
      const mockNewUser = {
        firstname: 'New',
        lastname: 'User',
        username: 'newuser',
        email: 'new@example.com',
        userid: 3,
        password: 'newpassword',
      };

      // Call the create method for real but immediately resolve invocation by providing a mock new user
      User.create.mockResolvedValue(mockNewUser);

      // Set up mock req and res objects to be passed into invocation of addUser
      const mockReq = {
        body: {
            firstname: 'New',
            lastname: 'User',
            username: 'newuser',
            email: 'new@example.com',
            password: 'newpassword',
        }
      };
      const mockRes = { locals: {} };
      const mockNext = jest.fn();

      await userController.addUser(mockReq, mockRes, mockNext);

      // Assertions
      expect(User.create).toHaveBeenCalledTimes(1);
      expect(User.create).toHaveBeenCalledWith({
        firstname: 'New',
        lastname: 'User',
        username: 'newuser',
        email: 'new@example.com',
        password: 'newpassword',
      });
      expect(mockRes.locals.newuser).toEqual(mockNewUser);
      expect(mockNext).toHaveBeenCalledTimes(1);
    });

    it('should handle errors when adding a new user', async () => {
      // Invoking the create method but immediately resolving it with a newly created error objet
      const mockError = new Error("couldn't add new user");
      User.create.mockRejectedValue(mockError);

      const mockReq = {
        body: {
          firstname: 'New',
          lastname: 'User',
          username: 'newuser',
          email: 'new@example.com',
          password: 'newpassword',
        },
      };
      const mockRes = {};
      const mockNext = jest.fn();

      await userController.addUser(mockReq, mockRes, mockNext);

      // Assertions
      expect(User.create).toHaveBeenCalledTimes(1);
      expect(User.create).toHaveBeenCalledWith({
        firstname: 'New',
        lastname: 'User',
        username: 'newuser',
        email: 'new@example.com',
        password: 'newpassword',
      });
      expect(mockNext).toHaveBeenCalledWith({
        log: 'userController.addUser',
        status: 500,
        message: { err: "couldn't add new user" },
      });
    });
  });
});

