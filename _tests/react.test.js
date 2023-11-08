import React from 'React';
import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
// import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/src/App';
import Entry from '../client/src/components/JobEntry'; 


  describe('Unit testing React components', () => {

    //  testing the main app container
    describe('App', () => {
  
      beforeAll(() => {
        app = render(<App />);
      });
  
      test('what are we testing', () => {

      });
    });

    // testing the job entry listings
    describe('Job Entry Listings', () => {
  
      beforeAll(() => {
        app = render(<App />);
      });
  
      test('Renders', () => {

      });
    });

  });

  // testing integration
  describe('React-Redux integration tests', () => {

    describe('Initial state when page loads', () => {

      beforeEach(async () => {
        const app = await render(
          <Provider>
            <App />    
          </Provider>
        );
      });

      // TODO: Test the following:
      // 1. The page loads with an 'add new job'
      // 2. There are currently no job listings posted
      // 3. After clicking the 'add new job', a modal form is opened
      // 4. After filling out the info and submitting the form, the modal closes
      // 5. The new job is automatically added to the main feed without refreshing
        
      test('The page loads with an Add New Job button', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(1);
        expect(buttons[0]).toHaveTextContent('Add New Job');
      });

    });

  })