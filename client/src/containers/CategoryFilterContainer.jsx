import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';


const CategoryFilterContainer = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonType) => {
        if (buttonType === activeButton) {
          setActiveButton(null);
        } else {
          setActiveButton(buttonType);
        }
    };

    return (
    <div>
    <Form>
        <Form.Group>
            <Form.Control as="input" type="text" placeholder="Filter by:" />
        </Form.Group>
            <Button variant="primary" type="button" onClick={() => handleBurronClick('Title')}>Title</Button>
            <Button variant="primary" type="button" onClick={() => handleButtonClick('Company')}>Company</Button>
            <Button variant="primary" type="button" onClick={() => handleButtonClick('Salary Range')}>Salary Range</Button>
            <Button variant="primary" type="button" onClick={() => handleButtonClick('Level')}>Level</Button>
            <Button variant="primary" type="button" onClick={() => handleButtonClick('Status')}>Status</Button>
    </Form>
    {activeButton && (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            {activeButton === 'Level' && ( 
            <div>
                <ListGroup.Item>Beginner</ListGroup.Item>
                <ListGroup.Item>Intermediate</ListGroup.Item>
                <ListGroup.Item>Senior</ListGroup.Item>
                <ListGroup.Item>Advanced</ListGroup.Item>
            </div>
            )}

            {activeButton === 'Salary Range' && (
            <div> 
                <ListGroup.Item>Under 50K</ListGroup.Item>
                <ListGroup.Item>50K To 100K</ListGroup.Item>
                <ListGroup.Item>100K To 200K</ListGroup.Item>
                <ListGroup.Item>Over 200K</ListGroup.Item>
            </div> 
            )}

            {activeButton === 'Status' && (
            <div>
                <ListGroup.Item>None</ListGroup.Item>
                <ListGroup.Item>Applied</ListGroup.Item>
            </div> 
            )}

            {activeButton === 'Company' && (
            <div> 
                <ListGroup.Item>None</ListGroup.Item>
            </div>
            )}

            {activeButton === 'Title' && ( 
            <div>
                <ListGroup.Item>None</ListGroup.Item>
            </div>
            )}
          </ListGroup>
        </Card>
      )}
    </div>
  );
};

export default CategoryFilterContainer;


