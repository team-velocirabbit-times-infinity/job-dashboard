const express = require('express');

const userController = require('../controllers/userController');

const usersRouter = express.Router();


// edit: will probably need to change response to an object with keys matched to frontend
// don't use this // no need to get all users:)
usersRouter.get('/', userController.getAllUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

// // // create new user
usersRouter.post('/', userController.addUser, (req, res) => {
  return res.status(200).json(res.locals.newuser);
});

// // user login
// usersRouter.post('/login', userController.verifyUser, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

//update and delete user function maybe in strech feature.
// router.put('/', userController.updateuser, (req, res) => {
//   return res.status(200).json(res.locals.updateduser);
// });
// router.delete('/', userController.deleteuser, (req, res) => {
//   return res.status(200).json(res.locals.deleteduser)
// })
//end

module.exports = usersRouter;
