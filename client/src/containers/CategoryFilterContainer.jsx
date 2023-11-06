import React from 'react';
import { Container, Form, Stack } from 'react-bootstrap';

const CategoryFilterContainer = () => {
  return (

    <Container className="filterDiv my-3 p-3 bg-light rounded">
      <Stack direction="horizontal" gap={3}>

          <Form.Label>Company: </Form.Label>
          <Form.Select id="Company">
            <option>None</option>
            <option>Google</option>
            <option>Apple</option>
            <option>Linkedin</option>
            <option>Github</option>
          </Form.Select>

          <Form.Label>Title: </Form.Label>
          <Form.Select id="Title">
            <option>None</option>
            <option>Web Developer</option>
            <option>Frontend Eng</option>
            <option>Backend Eng</option>
            <option>Fullstack Eng</option>
          </Form.Select>

          <Form.Label>Level: </Form.Label>
          <Form.Select id="Level">
            <option>None</option>
            <option>Internship</option>
            <option>Entry Level</option>
            <option>Senior</option>
            <option>Advanced</option>
          </Form.Select>

          <Form.Label>Salary: </Form.Label>
          <Form.Select id="Salary">
            <option>None</option>
            <option>$50,000+</option>
            <option>$100,000+</option>
            <option>$150,000+</option>
            <option>$200,000+</option>
          </Form.Select>

          <Form.Label>Type: </Form.Label>
          <Form.Select id="Type">
            <option>None</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
            <option>Contract</option>
          </Form.Select>

          {/* <div className="clear">Clear All</div> */}

      </Stack>
    </Container>

  );
};

export default CategoryFilterContainer;