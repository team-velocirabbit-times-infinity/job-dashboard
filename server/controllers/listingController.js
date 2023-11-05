const db = require('../models/listingModel');

const listingController = {};

listingController.getAllListings = (req, res, next) => {
  const listingsQuery = `
  SELECT * FROM listings
  `;
  db.query(listingsQuery)
    .then((listingsData) => {
      console.log(listingsData.rows);
      res.locals.listings = listingsData.rows;
      return next();
    })
    .catch((err) => {
      console.log(err)
      return next(err);
    });
};

listingController.addListing = (req, res, next) => {
  const {
    title,
    company,
    level,
    hours,
    minSalary,
    maxSalary,
    location,
    // status,
    url,
    // userId,
  } = req.body;
  const newListingQuery = `
  INSERT INTO listings (title, company, level, hours, "minSalary", "maxSalary", location, status, url, "userId")
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
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
      return next(err);
    });
};

listingController.updateListing = (req, res, next) => {
  
}

module.exports = listingController;
