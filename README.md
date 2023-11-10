# job-dashboard

## About The App

A dashboard where a user can create, update, retrieve, and delete job listings. The user and listings data are stored in a PostgreSQL database, with Sequelize serving as the database management tool.

### Problem:

The CRUD functionality of the app was not completed with only the GET and DELETE requests working as intended. POST and PUT server requests and middleware needs to be completed for the data flow to make it to the correct endpoint. There was also no login or sign up pages, no user schema or middleware or server route specific to a user. There is currently no login authentication or database security.

### Solution:

We added testing, both for the existing components and infrastructure as well as for TDD when incorporating new elements.

- Testing developed for the following:
  - Server routes
  - Database queries
  - Front-end testing
  - Login Authentication (TDD)
  - User Schema (TDD)

We also improved user CRUD-functionality with a schema, server routes, and controllers. Along with that comes designed login authentication and basic security protocols to protect both user and listing data in the database.

- Built a signup & a login page.
- Built a User Schema and corrolating Controllers.
- Built out login authentication with password hashing & bcrypt for added security.

## Improvements:

- Improved code quality by deleting nonfunctional code and creating consistent data flow from the client to server, middleware, and database, and returning the correct information to the endpoint.
- Added login and signup pages to utilize a user account as well as provide a platform for login authentication.
- Added Testing functionality by:
  - testing all the listingController functions
  - testing all the userController functions
  - testing the User Schema
- Improved functionality on dashboard by:
  - moving 'Add New Job' from next to search bar to on the top of the Listings Feed for better user-functionality
  - created automatic closing for the Job Modal once the 'Save' button is clicked
  - getAllListings is now linked to a useState where the listings refresh and are updated once the Job Modal closes
  - the Update button saves and automatically refreshes the listing with the new information
- Improved user and listing data storage and retrieval by:
  - completely rebuilt the PostgreSQL database that our application relies on, addressing structural deficiencies in the original setup
  - adopted Sequelize, an Object-Relational Mapping (ORM) tool to enhance data security and code maintainability as well as simplifying database interactions
  - updated controllers for Listings, and created controllers for Users
    -Elevated data security by:
  - completed enviroment variable setup using env file to store the database connection point
  - password hashing and utilizing bcrypt for login authentication

## Technology Used:

- React
- React Router
- Jest/Supertest
- PostgreSQL/Sequelized
- Bootstrap
- Express
- Webpack

## Stretch Features:

- Consistent UX design across all pages.
- ESLint & Prettier standards added.
- Test-driven development for new front-end components and added User Schema and Controllers.

## Contributors:

Connie Johnson
[@GitHub](https://github.com/connallyjae)

Harold Reeves
[@GitHub](https://github.com/haroldreeves)

Lanlan Zhao
[@GitHub](https://github.com/philzmintmojito)

Rui Fan
[@GitHub](https://github.com/ruifan-IU)

William Kil
[@GitHub](https://github.com/shinykoin)
