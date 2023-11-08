# job-dashboard

## About The App

A dashboard where a user can create, update, retrieve, and delete job listings. The listings are stored in a PostgreSQL database, and include information such as job title, company, position, minimum and maximum salary, location, application status, and more.

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

We also added user CRUD-functionality with a schema, server routes, and controllers. Along with that comes designed login authentication and basic security protocols to protect both user and listing data in the database.

- Built a signup & a login page.
- Built a User Schema and corrolating Controllers.
- Built out login authentication (\*\*include aspects here).

## Improvements:

- Improved code quality by deleting nonfunctional code and creating consistent variable names for easier data flow tracking.
- Improved functionality on dashboard by:
  - moving 'Add New Job' from next to search bar to on the top of the Listings Feed for better user-functionality
  - created automatic closing for the Job Modal once the 'Save' button is clicked
  - getAllListings is now linked to a useState where the listings refresh and aree updated once the Job Modal closes
- Improved user and listing data storage and retrieval by:
  - initilized a new database to connect with and sequalized our schemas for easier readability on queries
  - updated controllers for Listings, and created controllers for Users

## Technology Used:

- React
- React Router
- Redux
- PostgreSQL/Sequalized
- Bootstrap
- Express
- Webpack

## Stretch Features:

-
-
-
-

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
