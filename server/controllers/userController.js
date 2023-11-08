const db = require('../models/listingModel');

const userController = {};

userController.addUser = (req, res, next) => {
  const {
    // userId,
    firstName,
    lastName,
    userName,
    email,
    password,
  } = req.body;
  const newUserQuery = `
  INSERT INTO users (firstName, lastName, userName, email, password,)
  VALUES($1, $2, $3, $4, $5)
  RETURNING *;
  `;

  // default status is not started. userId hardcoded to 1 for now
  const params = [
    title,
    company,
    level,
    hours,
    minSalary,
    maxSalary,
    location,
    'Not started',
    url,
    1,
  ];

  db.query(newListingQuery, params)
    .then((data) => {
      res.locals.newListing = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        log: 'listingController.addListing',
        status: 500,
        message: {err: "couldn't add new listing"},
      });
    });
};



module.exports = userController;
