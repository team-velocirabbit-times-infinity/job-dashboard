const request = require('supertest');
const express = require('express');
const fs = require('fs');
const path = require('path');
const listingRouter = require('../server/routes/listing');

const server = 'http://localhost:3000';
const app = express();
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

    // check if bad request recieves an error
    it('responds to a bad request with an error and a status of 500', function() {
      return request(app)
        .get('/')
        .catch(err => {
          expect(err.status).toBe(500);
          expect(err.body).toEqual({ err: 'An error occurred' });
        })
    })
  });

  // check post functionality
  describe('POST /', () => {
      // testing create data here:
      const testPost = {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: 40,
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 143
      };

      beforeEach(async () => {
        const response = await request(app)
          .post('/')
          .send(testPost)
          .set('Content-Type', 'application/json');
        this.response = response;
      });

      // returns a status of 200 with correct content type (app/json)
      it('responds with 200 status and text/html content type', () => {
        expect(this.response.get('Content-Type')).toMatch(/application\/json/);
        expect(this.response.status).toBe(200);
      });
  
      // check if post has the correct json data in the response body (newListing)
      it('returns the posted data in the response body', () => {
        expect(this.response.body).toEqual(testPost);
      });

      // if bad request, catch error
    });

    // check if put functionality is returning a status of 200 with correct content type (app/json)
    describe('PUT', () => {
      // testing update data here:
      const testUpdate = {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: 40,
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 143
      };

      beforeEach(async () => {
        const response = await request(app)
          .put('/')
          .send(testUpdate)
          .set('Content-Type', 'application/json');
        this.response = response;
      });

      it('responds with 200 status and text/html content type', () => {
        expect(this.response.get('Content-Type')).toMatch(/application\/json/);
        expect(this.response.status).toBe(200);
      });
  
      // check if put has the correct json data in the response body (updatedListing)
      it('returns the posted data in the response body', () => {
        expect(this.response.body).toEqual(testUpdate);
      });

      // if bad request, catch error
    });

    // check if delete functionality is returning a status of 200 with correct content type (app/json)
    describe('DELETE', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(app)
          .delete('/')
          .expect('Content-Type', /text\/html; charset=utf-8/)
          .expect(200);
      });
  
    // check if delete has the correct json data in the response body (deletedListing)
    
    // if bad request, catch error
  })

  // check if /filter path returns a status of 200 and with the expected content type (json)
  describe('/filter', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(app)
          .get('/filter')
          .expect('Content-Type', /text\/html; charset=utf-8/)
          .expect(200);
      });

      // check to see if /filter path returns with a filterListing json object in the response body
      it('filtered listings are returned in the response body', () => {

      });

      // if bad request, catch error
    });
  })
});