// const request = require('supertest');
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const listingRouter = require('../server/routes/listing');
// const server = 'http://localhost:3000';
// const app = express();
// app.use('/', listingRouter);

// docs: https://www.npmjs.com/package/supertest
// promises: https://jestjs.io/docs/en/asynchronous

const listingController = require('../server/controllers/listingController');
const Listing = require('../server/models/listingModel');
const { Sequelize, DataTypes } = require('sequelize');

jest.mock('../server/models/listingModel', () => {
  const { DataTypes, Sequelize } = require('sequelize');
  return {
    define: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
    Sequelize,
    DataTypes,
  };    
});


beforeEach(() => {
  jest.clearAllMocks();
});


// Test controllers for getAllListings 
describe('getAllListings', () => {
  it('should retrieve all listings successfully', async () => {
    const mockListings = [
      {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: "All",
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 1
      },
      {
        title: "Software Engineer",
        company: "Apple",
        level: "Junior",
        hours: "All",
        minsalary: 90000,
        maxsalary: 125000,
        location: "Boston",
        status: "Bookmarked",
        url: "indeed.com",
        userid: 2
      },
    ];
    
    // Call findAll for real but immediately resolve it by passing it a mock listing
    Listing.findAll.mockResolvedValue(mockListings);

    // Set up promise object for mock request
    const mockReq = {};
    const mockRes = { locals: {} };
    const mockNext = jest.fn();

    await listingController.getAllListings(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.findAll).toHaveBeenCalledTimes(1);
    expect(mockRes.locals.listings).toEqual(mockListings);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });

  it('should handle errors when retrieving listings', async () => {
    // Create a mock error and pass it into mock function that will always reject
    const mockError = new Error("couldn't get listings");
    Listing.findAll.mockRejectedValue(mockError);

    const mockReq = {};
    const mockRes = {};
    const mockNext = jest.fn();

    await listingController.getAllListings(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.findAll).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith({
      log: 'listingController.getAllListings',
      status: 500,
      message: {err: "couldn't get all listings"},
    });
  });
});


// Test controllers for addListings 
describe('addListing', () => {
  it('should add a new job listing successfully', async () => {
    const mockListing = {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: "All",
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 1
      };
    
    // Call create for real but immediately resolve it by passing it a mock listing
    Listing.create.mockResolvedValue(mockListing);

    // Set up mock req and res objects to be passed into invocation of addListing
    const mockReq = {
      body: {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: "All",
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 1
      }
    };
    const mockRes = { locals: {} };
    const mockNext = jest.fn();

    await listingController.addListing(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.create).toHaveBeenCalledTimes(1);
    expect(Listing.create).toHaveBeenCalledWith(
      {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: "All",
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 1
      }
    );
    expect(mockRes.locals.newListing).toEqual(mockListing);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });

  it('should handle errors when adding a new job listing', async () => {
    // Create a mock error and pass it into mock function that will always reject
    const mockError = new Error("couldn't add new listing");
    Listing.create.mockRejectedValue(mockError);

    const mockReq = {
      body: {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: "All",
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 1
      }
    };
    const mockRes = {};
    const mockNext = jest.fn();

    await listingController.addListing(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.create).toHaveBeenCalledTimes(1);
    expect(Listing.create).toHaveBeenCalledWith(
      {
        title: "Full Stack Dev",
        company: "Google",
        level: "Senior",
        hours: "All",
        minsalary: 100000,
        maxsalary: 250000,
        location: "California",
        status: "Applying",
        url: "goodjobs.com",
        userid: 1
      }
    );
    expect(mockNext).toHaveBeenCalledWith({
      log: 'listingController.addListing',
      status: 500,
      message: {err: "couldn't add new listing"},
    });
  });
});


// Test controllers for updateListing
describe('updateListing', () => {
  it('should update a listing with new data successfully', async () => {
    const mockListing = {
      title: "Full Stack Dev",
      company: "Google",
      level: "Senior",
      hours: "All",
      minsalary: 100000,
      maxsalary: 250000,
      location: "California",
      status: "Applying",
      url: "goodjobs.com",
      userid: 1
    };
    
    // Call update for real but immediately resolve it by passing it a mock listing
    Listing.update.mockResolvedValue(mockListing);

    // Set up promise object for mock request
    const mockReq = {
      body: {
        title: "Software Engineer",
        level: "Mid",
        location: "Washington",
      },
      params: {
        id: 5,
      }
    };
    const mockRes = { locals: {} };
    const mockNext = jest.fn();

    await listingController.updateListing(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.update).toHaveBeenCalledTimes(1);
    // did not include upsert/where: returing: true to have updated data on res.locals obj
    expect(mockRes.locals.updatedListing).toEqual(mockListing);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });

  it('should handle errors when updating a listing', async () => {
    // Create a mock error and pass it into mock function that will always reject
    const mockError = new Error("couldn't update listing");
    Listing.update.mockRejectedValue(mockError);

    const mockReq = {
      body: {
        title: "Software Engineer",
        level: "Mid",
        location: "Washington",
      },
      params: {
        id: 5,
      }
    };
    const mockRes = {};
    const mockNext = jest.fn();

    await listingController.updateListing(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.update).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith({
      log: 'listingController.updateListing',
      status: 500,
      message: {err: "couldn't update listing"},
    });
  });
});


// Test controllers for delete
describe('deleteListing', () => {
  it('should delete a specific listing successfully', async () => {
    const mockListing = {
      title: "Full Stack Dev",
      company: "Google",
      level: "Senior",
      hours: "All",
      minsalary: 100000,
      maxsalary: 250000,
      location: "California",
      status: "Applying",
      url: "goodjobs.com",
      userid: 1,
      listingid: 5
    };
    
    // Call findAll for real but immediately resolve it by passing it a mock listing
    Listing.findAll.mockResolvedValue(mockListing);

    // Set up promise object for mock request
    const mockReq = {
      query: {
        id: 5
      }
    };
    const mockRes = { locals: {} };
    const mockNext = jest.fn();

    await listingController.deleteListing(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.findAll).toHaveBeenCalledTimes(1);
    expect(Listing.destroy).toHaveBeenCalledTimes(1);
    expect(mockRes.locals.deletedListing).toEqual(mockListing);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });

  it('should handle errors when deleting a listing', async () => {
    // Create a mock error and pass it into mock function that will always reject
    const mockError = new Error("couldn't delete selected listing");
    Listing.findAll.mockRejectedValue(mockError);

    const mockReq = {
      query: {
        listingid: 5
      }
    };
    const mockRes = {};
    const mockNext = jest.fn();

    await listingController.deleteListing(mockReq, mockRes, mockNext);

    // Assertions
    expect(Listing.findAll).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith({
      log: 'listingController.deleteListing',
      status: 500,
      message: {err: "couldn't delete selected listing"},
    });
  });
});