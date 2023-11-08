const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

// import routers here
const listingRouter = require('./routes/listing');
const userRouter = require('./routes/user');

const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// define route handlers here
app.use('/listing', listingRouter);
app.use('/users', userRouter);

// not sure if needed
// app.use('/public', express.static(path.join(__dirname, '/../public/bundle.js')));

// // default route, serve html
// app.get('/', (req, res) => {
//   return res
//     .status(200)
//     .sendFile(path.join(__dirname, '/../public/index.html'));
// });

// Serve any static files
// app.use(express.static(path.join(__dirname, '/../public/')));

// Handle React routing, return all requests to React app
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// default route, serve html
// app.get('/', (req, res) => {
//   return res
//     .status(200)
//     .sendFile(path.join(__dirname, '/../public/index.html'));
// });


// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
