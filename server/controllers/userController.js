const User = require('../models/userModel');
const bcrypt = require('bcrypt');

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

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({where: {username}})
  if (!user) {
   res.locals.user = false;
   return next();
    // return next({
    //   log: 'userController.verifyUser',
    //   status: 500,
    //   message: {err: "couldn't verify new user"},
    // });
  }
  bcrypt.compare(password, user.password)
  .then (verified => {
    if (verified) res.locals.user = user;
    else return res.json({message: 'username/passwords does not match'});
    next();
  })
  .catch(err => {
    console.log(err);
    return next({
      log: 'userController.verifyUser',
      status: 500,
      message: {err: "couldn't verify new user"},
    });
  })

}




module.exports = userController;
