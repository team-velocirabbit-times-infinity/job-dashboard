import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryFilterContainer = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonLabel) => {
    if (buttonLabel === activeButton) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonLabel);
    }
  };

  
  return (
    <div>
      <Form>
        <Button variant="primary" type="button" onClick={() => handleButtonClick('Title')} >Title</Button>
        <Button variant="primary" type="button" onClick={() => handleButtonClick('Company')} >Company</Button>
        <Button variant="primary" type="button" onClick={() => handleButtonClick('Salary Range')} >Salary Range</Button>
        <Button variant="primary" type="button" onClick={() => handleButtonClick('Level')} >Level</Button>
        <Button variant="primary" type="button" onClick={() => handleButtonClick('Status')} >Status</Button>
      </Form>

      {activeButton && (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            {activeButton === 'Level' && (
              <>
                <ListGroup.Item>Beginner</ListGroup.Item>
                <ListGroup.Item>Intermediate</ListGroup.Item>
                <ListGroup.Item>Senior</ListGroup.Item>
                <ListGroup.Item>Advanced</ListGroup.Item>
              </>
            )}

            {activeButton === 'Salary Range' && (
              <>
                <ListGroup.Item>Under 50K</ListGroup.Item>
                <ListGroup.Item>50K To 100K</ListGroup.Item>
                <ListGroup.Item>100K To 200K</ListGroup.Item>
                <ListGroup.Item>Over 200K</ListGroup.Item>
              </>
            )}

            {activeButton === 'Status' && (
              <>
                <ListGroup.Item>None</ListGroup.Item>
                <ListGroup.Item>Applied</ListGroup.Item>
              </>
            )}

            {activeButton === 'Company' && (
              <>
                <ListGroup.Item>None</ListGroup.Item>
              </>
            )}

            {activeButton === 'Title' && (
              <>
                <ListGroup.Item>None</ListGroup.Item>
              </>
            )}
          </ListGroup>
        </Card>
      )}
    </div>
  );
};

export default CategoryFilterContainer;