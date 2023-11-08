const request = require('supertest');
const fs = require('fs');
const path = require('path');

const server = 'http://localhost:3000';

// docs: https://www.npmjs.com/package/supertest
// promises: https://jestjs.io/docs/en/asynchronous

// TEST SERVER ROUTES FROM routes/listing.js
describe('checking server routes', () => {
  describe('/listing', () => {
    // check if /listing path responds with 200 status and the correct content type (text/html)
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });

      // check if post functionality is returning a status of 200 with correct content type (app/json)
      describe('POST', () => {
        it('responds with 200 status and application/json content type', () => {
          return request(server)
            .get('/filter')
            .expect('Content-Type', /application\/json/)
            .expect(200);
        });
    
      // check if post has the correct json data in the response body (newListing)
      });
  
      // check if put functionality is returning a status of 200 with correct content type (app/json)
      describe('PUT', () => {
        it('responds with 200 status and application/json content type', () => {
          return request(server)
            .get('/filter')
            .expect('Content-Type', /application\/json/)
            .expect(200);
        });
    
      // check if put has the correct json data in the response body (updatedListing)

      });
  
      // check if delete functionality is returning a status of 200 with correct content type (app/json)
      describe('DELETE', () => {
        it('responds with 200 status and application/json content type', () => {
          return request(server)
            .get('/filter')
            .expect('Content-Type', /application\/json/)
            .expect(200);
        });
    
      // check if delete has the correct json data in the response body (deletedListing)

    })

    // check if /filter path returns a status of 200 and with the expected content type (json)
    describe('/filter', () => {
      describe('GET', () => {
        it('responds with 200 status and application/json content type', () => {
          return request(server)
            .get('/filter')
            .expect('Content-Type', /application\/json/)
            .expect(200);
        });

        // check to see if /filter path returns with a filterListing json object in the response body
        it('filtered listings are returned in the response body', () => {

        });
      });
    })
  })
});