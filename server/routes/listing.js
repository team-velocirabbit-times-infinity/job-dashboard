const express = require('express');

const listingController = require('../controllers/listingController');

const router = express.Router();


// edit: will probably need to change response to an object with keys matched to frontend
router.get('/', listingController.getAllListings, (req, res) => {
  return res.status(200).json(res.locals.listings)
});

// router.get('/filter', listingController.filterListing, (req, res) => {
//   return res.status(200).json(res.locals.filteredListing)
// })

router.post('/', listingController.addListing, (req, res) => {
  return res.status(200).json(res.locals.newListing);
});

// //start
// router.put('/', listingController.updateListing, (req, res) => {
//   return res.status(200).json(res.locals.updatedListing);
// });
router.delete('/', listingController.deleteListing, (req, res) => {
  return res.status(200).json(res.locals.deletedListing)
})
//end

module.exports = router;
