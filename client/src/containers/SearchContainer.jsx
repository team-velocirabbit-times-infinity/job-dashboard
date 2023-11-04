import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchContainer = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
      </Form>
      <Button>Add New Job</Button>
    </>
  );
};

export default SearchContainer;
