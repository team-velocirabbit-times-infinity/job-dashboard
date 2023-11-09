const Listing = require('../models/listingModel');

const listingController = {};

listingController.getAllListings = async (req, res, next) => {
  await Listing.findAll()
  .then(data => {
    res.locals.listings = data;
    return next();
  })
  .catch((err) => {
    return next({
      log: 'listingController.getAllListings',
      status: 500,
      message: {err: "couldn't get all listings"},
    });
  });

};


listingController.addListing = async (req, res, next) => {
  const {
    title,
    company,
    level,
    hours,
    minsalary,
    maxsalary,
    location,
    status,
    url,
    userid,
  } = req.body;
  await Listing.create({title, company, level, hours, minsalary, maxsalary, location, status, url, userid: 1})
  .then(data => {
    res.locals.newListing = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    return next({
      log: 'listingController.addListing',
      status: 500,
      message: {err: "couldn't add new listing"},
    });
  });
}

listingController.updateListing = async (req, res, next) => {

  const listingid = req.params.id;
  const {
    title,
    company,
    level,
    hours,
    minsalary,
    maxsalary,
    location,
    status,
    url,
    // userId,
  } = req.body;

  await Listing.update({title, company, level, hours, minsalary, maxsalary, location, status, url, userId: 1}, {where: {listingid}})
  .then(data => {
    res.locals.updatedListing = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    return next({
      log: 'listingController.updateListing',
      status: 500,
      message: {err: "couldn't update listing"},
    });
  });
}

//start

listingController.deleteListing = async (req, res, next) => {
  const listingId = req.query.id;
  await Listing.findAll({
    where: {listingId}
    }).then((deletedEntry) => {
      Listing.destroy({where: {listingId}})
           .then((_) => {res.locals.deletedListing = deletedEntry; return next();});
 }).catch((err) => {
        return next({
          log: 'listingController.deleteListing',
          status: 500,
          message: {err: "couldn't delete selected listing"},
        });
      });

}


// // need a filter middleware, need to ask front end how it will looks like
// listingController.filterListing = (req, res, next) => {
//   // https://example.com/search?q=javascript&f=2, the req.query object would be { q: 'javascript', f: '2' }.
//   const searchTerm = req.query.column;
//   const filter = req.query.filter;
//   console.log('searchTerm = ', searchTerm);

//   const validColumns = [
//     'listingId',
//     'title',
//     'company',
//     'level',
//     'hours',
//     'minSalary',
//     'location',
//     'status',
//   ];

//   if (!validColumns.includes(searchTerm)) {
//     return next({
//       log: 'listingController.filterListing',
//       status: 400,
//       message: {err: 'Invalid search term'},
//     });
//   }

//   let params = [`%${filter}%`];

//   // ILIKE includes case-insensitive matching
//   let filterQuery = `
//     SELECT * FROM listings
//     WHERE "${searchTerm}" ILIKE $1;
//     `;

//   // if filtering instead by salary, minSalary is case-sensitive and exact
//   if (searchTerm === 'minSalary') {
//     filterQuery = `
//     SELECT * FROM listings
//     WHERE "${searchTerm}" >= $1;
//     `;
//     params = [Number(filter)];
//   }

//   db.query(filterQuery, params)
//     .then((data) => {
//       res.locals.filteredListing = data.rows;
//       console.log('filtered data looks like this: ', data.rows);
//       return next();
//     })
//     .catch((err) => {
//       console.log(err);
//       return next({
//         log: 'listingController.filterListing',
//         status: 500,
//         message: {err: "couldn't retrieve selected listing"},
//       });
//     });
// };

module.exports = listingController;
