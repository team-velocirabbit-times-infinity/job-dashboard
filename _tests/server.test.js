const request = require('supertest');
const express = require('express');
const fs = require('fs');
const path = require('path');
const listingRouter = require('../server/routes/listing');

const server = 'http://localhost:3000';
const app = new express();
app.use('/', listingRouter);

// docs: https://www.npmjs.com/package/supertest
// promises: https://jestjs.io/docs/en/asynchronous

// TEST SERVER ROUTES FROM routes/listing.js
describe('checking server routes', () => {
  // check if /listing path responds with 200 status and the correct content type (json)
  describe('GET /', function() {
    it('responds with 200 status and json content type', function() {
      return request(app)
        .get('/')
        .expect('Content-Type', /application\/json/)
        .expect(200)
    });
  });

  
  // check if post functionality is returning a status of 200 with correct content type (app/json)
  describe('POST /', () => {
      const testPost = {
        title: 'Full Stack Dev',
        company: 'Google',
        level: 'Senior',
        hours: 40,
        minSalary: 100000,
        maxSalary: 250000,
        location: 'California',
        status: 'Applying',
        url: 'goodjobs.com',
        userId: 143
      };
      it('responds with 200 status and json content type', () => {
        return request(app)
          .post('/')
          .send(testPost)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
  
    // check if post has the correct json data in the response body (newListing)

    });

    // check if put functionality is returning a status of 200 with correct content type (app/json)
    describe('PUT', () => {
      it('responds with 200 status and json content type', () => {
        return request(app)
          .put('/')
          .expect('Content-Type', /json/)
          .expect(200);
      });
  
    // check if put has the correct json data in the response body (updatedListing)

    });

    // check if delete functionality is returning a status of 200 with correct content type (app/json)
    describe('DELETE', () => {
      it('responds with 200 status and json content type', () => {
        return request(app)
          .delete('/')
          .expect('Content-Type', /json/)
          .expect(200);
      });
  
    // check if delete has the correct json data in the response body (deletedListing)

  })

  // check if /filter path returns a status of 200 and with the expected content type (json)
  describe('/filter', () => {
    describe('GET', () => {
      it('responds with 200 status and json content type', () => {
        return request(app)
          .get('/filter')
          .expect('Content-Type', /json/)
          .expect(200);
      });

      // check to see if /filter path returns with a filterListing json object in the response body
      it('filtered listings are returned in the response body', () => {

      });
    });
  })
});