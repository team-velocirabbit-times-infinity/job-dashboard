import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const CategoryFilterContainer = () => {
  return (
  <div>
    <Container className="filterDiv">

      <Row className="filterbar">

        <Col md={2} className="filter">
          <Form.Label>Company: </Form.Label>
          <Form.Select id="Company">
            <option>None</option>
            <option>Google</option>
            <option>Apple</option>
            <option>Lindklin</option>
            <option>Github</option>
          </Form.Select>
        </Col>

        <Col md={2} className="filter">
          <Form.Label>Title: </Form.Label>
          <Form.Select id="Title">
            <option>None</option>
            <option>Software Engineer</option>
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>FullStack Enginner</option>
          </Form.Select>
        </Col>

        <Col md={2} className="filter">
          <Form.Label>Level: </Form.Label>
          <Form.Select id="Level">
            <option>None</option>
            <option>Internship</option>
            <option>Entry Level</option>
            <option>Senoir</option>
            <option>Advanced</option>
          </Form.Select>
        </Col>

        <Col md={2} className="filter">
          <Form.Label>Salary: </Form.Label>
          <Form.Select id="Salary">
            <option>None</option>
            <option>$50,000+</option>
            <option>$100,000+</option>
            <option>$150,000+</option>
            <option>$200,000+</option>
          </Form.Select>
        </Col>

        <Col md={2} className="filter">
          <Form.Label>Type: </Form.Label>
          <Form.Select id="Type">
            <option>None</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
            <option>Contract</option>
          </Form.Select>
        </Col>
        
        <div className="clear">Clear All</div>

      </Row>
    
    </Container>
  </div>
  );
};

export default CategoryFilterContainer;