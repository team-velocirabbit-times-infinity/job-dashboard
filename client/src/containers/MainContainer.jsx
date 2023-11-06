import Container from 'react-bootstrap/Container';
import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import SearchContainer from './SearchContainer';
import CategoryFilterContainer from './CategoryFilterContainer';
import JobListingContainer from './JobListingContainer';

function MainContainer() {
  return (
    <Container>
      <SearchContainer />
      <CategoryFilterContainer />
      <JobListingContainer />
    </Container>
  );
}

export default MainContainer;
