const db = require('../models/listingModel');
// const { param } = require('../server');

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
      return next({
        log: 'listingController.getAllListings',
        status: 500,
        message: {err: 'couldn\'t get all listings'}
      });
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
      return next({
        log: 'listingController.addListing',
        status: 500,
        message: {err: 'couldn\'t add new listing'}
      });
    });
};

listingController.updateListing = (req, res, next) => {
  //start
  const { listingId } = req.query;
  const {
    title,
    company,
    level,
    hours,
    minSalary,
    maxSalary,
    location,
    status,
    url,
    // userId,
  } = req.body;

  console.log('req.query = ',req.query)
  console.log('req.body = ',req.body)
  const updateQuery = `
  UPDATE listings
  SET
    title = $2,
    company = $3,
    level = $4,
    hours = $5,
    "minSalary" = $6,
    "maxSalary" = $7,
    location = $8,
    status = $9
  WHERE "listingId" = $1
  RETURNING *;
  `;
  const params = [
    listingId,
    title,
    company,
    level,
    hours,
    minSalary,
    maxSalary,
    location,
    status
  ]
  db.query(updateQuery, params)
    .then(data => {
      res.locals.updatedListing = data.rows[0];
      console.log('Updated data looks like this: ',data.rows[0])
      console.log(`${data.rowCount} row(s) updated`)
      return next();
    })
    .catch(err => {
      return next({
        log: 'listingController.updateListing',
        status: 500,
        message: {err: 'couldn\'t update selected listing'}
      });
    })
  //end
}
//start
listingController.deleteListing = (req, res, next) => {
  const { listingId } =  req.query;
  console.log(`listingId = `, listingId)
  const deleteQuery = `
  DELETE FROM listings
  WHERE "listingId" = $1
  RETURNING *;
  `;
  const params = [listingId];
  db.query(deleteQuery, params)
    .then(data => {
      console.log('Deleted data looks like this: ', data.rows[0])
      console.log(`${data.rowCount} row(s) deleted`);
      res.locals.deletedListing = data.rows[0];
      return next();
    })
    .catch(err => {
      return next({
        log: 'listingController.deleteListing',
        status: 500,
        message: {err: 'couldn\'t delete selected listing'}
      });
    })
}
//end


// need a filter middleware, need to ask front end how it will looks like 
listingController.filterListing = (req, res, next) => {
  // https://example.com/search?q=javascript&page=2, the req.query object would be { q: 'javascript', f: '2' }.
  const searchTerm = req.query.q;
  const filter = req.query.f;
  console.log('searchTerm = ', searchTerm);
  // NEED EDIT: filter query will prob look diff, might need diff filter options/middleware
  const filterQuery = `
  SELECT * FROM listings
  WHERE "$1" = $2
  `
  const params = [searchTerm, filter]
  db.query(filterQuery, params)
    .then(data => {
      res.locals.filteredListing = data.rows;
      console.log('filtered data looks like this: ',data.rows)
      return next();
    })
    .catch(err => {
      return next({
        log: 'listingController.filterListing',
        status: 500,
        message: {err: 'couldn\'t retrieve selected listing'}
      });
    })
}

module.exports = listingController;
