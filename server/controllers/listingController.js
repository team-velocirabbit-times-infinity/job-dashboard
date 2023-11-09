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
    userId,
  } = req.body;
  await Listing.create({title, company, level, hours, minsalary, maxsalary, location, status, url, userId: 1})
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
//   console.log('req.query = ', req.query);
//   console.log('req.body = ', req.body);
//   const updateQuery = `
//   UPDATE listings
//   SET
//     title = $2,
//     company = $3,
//     level = $4,
//     hours = $5,
//     "minSalary" = $6,
//     "maxSalary" = $7,
//     location = $8,
//     status = $9
//   WHERE "listingId" = $1
//   RETURNING *;
//   `;
//   const params = [
//     listingId,
//     title,
//     company,
//     level,
//     hours,
//     minSalary,
//     maxSalary,
//     location,
//     status,
//   ];
//   db.query(updateQuery, params)
//     .then((data) => {
//       res.locals.updatedListing = data.rows[0];
//       console.log('Updated data looks like this: ', data.rows[0]);
//       console.log(`${data.rowCount} row(s) updated`);
//       return next();
//     })
//     .catch((err) => {
//       return next({
//         log: 'listingController.updateListing',
//         status: 500,
//         message: {err: "couldn't update selected listing"},
//       });
//     });
//   //end
// };

//start

listingController.deleteListing = async (req, res, next) => {
  const listingid = req.query.id;
  await Listing.findAll({
    where: {listingid}
    }).then((deletedEntry) => {
      Listing.destroy({where: {listingid}})
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
