const request = require('supertest');
const fs = require('fs');
const path = require('path');

const server = 'http://localhost:3000';

// docs: https://www.npmjs.com/package/supertest
// promises: https://jestjs.io/docs/en/asynchronous

describe('checking server routes', () => {
  describe('/listing', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

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
        const location = path.resolve(
          __dirname,
          // what location are we searching for this?
        );
        const dbMarketList = JSON.parse(fs.readFileSync(location));
        return request(server)
          .get('/markets')
          .then((res) => {
            expect(res.body).toEqual(dbMarketList);
          });
      });
    });

    describe('PUT', () => {
      // update listing: test post here
      // const testListing = 

      it('responds with 200 status and application/json content type', () =>
        request(server)
          .put('/markets')
          .send(marketList1)
          .expect('Content-Type', /application\/json/)
          .expect(200));

      it('responds with the updated market list', () =>
        request(server)
          .put('/markets')
          .send(marketList2)
          .then((res) => {
            expect(res.body).toEqual(marketList2);
          }));

      it('responds to invalid request with 400 status and error message in body', () =>
        request(server)
          .put('/markets')
          .send(invalidList)
          .then()
          .catch(err => {
            expect(err.status).toBe(400);
            expect(err.body).toEqual({ error: {} });
          }));
    });
  });
});