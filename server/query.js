const { Pool } = require('pg');
const PG_URI = 'postgres://surqoxeu:WwLi5wRJoKuB1yOAWnfyjNRU7tky4jzz@bubble.db.elephantsql.com/surqoxeu';
const pool = new Pool({
  connectionString: PG_URI
});

const getListings = () => {
  const listingsQuery = `
  SELECT * FROM listings
  `;
  pool.query(listingsQuery)
    .then(listingsData => {
      console.log(listingsData.rows)
      return listingsData.rows;
    })
};

const addListings = () => {
  
};
// getListings();

module.exports = {
  getListings
};