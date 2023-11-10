import React from 'react';
import { Container, Form, Stack } from 'react-bootstrap';

const CategoryFilterContainer = ({ updateJobs, fetchData }) => {
  const onSelect = (e) => { 
    const title = e.target.value;
    if (title === 'None') {
      return fetchData();
    }
    fetch('http://localhost:3000/listing/title', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
      })
    })
    .then(res => res.json())
    .then(data => {
      updateJobs(data);
    })
  }
  
  return (
    <Container className="filterDiv my-3 p-3 bg-light rounded">
      <Stack direction="horizontal" gap={3}>
          <Form.Label>Title: </Form.Label>
          <Form.Select id="Title" onChange={onSelect}>
            <option>None</option>
            <option>Software Engineer</option>
            <option>Frontend Developer</option>
            <option>Backend Engineer</option>
            <option>Fullstack Engineer</option>
          </Form.Select>

          <Form.Label>Company: </Form.Label>
          <Form.Select id="Company">
            <option>None</option>
            <option>Google</option>
            <option>Apple</option>
            <option>Linkedin</option>
            <option>Github</option>
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
          <Form.Select id="minSalary">
            <option>None</option>
            <option>$50,000+</option>
            <option>$100,000+</option>
            <option>$150,000+</option>
            <option>$200,000+</option>
          </Form.Select>

          {/* <Form.Label>Max Salary: </Form.Label>
          <Form.Select id="maxSalary">
            <option>None</option>
            <option>$100,000</option>
            <option>$150,000</option>
            <option>$200,000</option>
            <option>$250,000+</option>
          </Form.Select> */}

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