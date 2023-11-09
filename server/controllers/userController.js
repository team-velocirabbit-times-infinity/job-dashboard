const User = require('../models/userModel');

const userController = {};
userController.getAllUsers = async (req, res, next) => {
  await User.findAll()
  .then(users => {
    res.locals.users = users;
    next();
  })
  .catch(err => {
    console.log(err);
    return next({
      log: 'userController.getAllUsers',
      status: 500,
      message: {err: "couldn't get users"},
    })
  })
}

userController.addUser = async (req, res, next) => {
  const {
    // userId,
    firstname,
    lastname,
    username,
    email,
    password,
  } = req.body;

  await User.create({firstname, lastname, username, email, password})
  .then(newUser => {
    res.locals.newuser = newUser;
    next();
  })
  .catch((err) => {
    console.log(err);
    return next({
      log: 'userController.addUser',
      status: 500,
      message: {err: "couldn't add new user"},
    });
  });
}

  // default status is not started. userId hardcoded to 1 for now



module.exports = userController;
