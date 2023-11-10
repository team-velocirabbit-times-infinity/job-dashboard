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
    console.log('updated', data)
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

module.exports = listingController;
