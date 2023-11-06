import React, { useState } from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

const SearchContainer = () => {
  // create State to show AddJobModal
  const [showAddJobModal, setAddJobModal] = useState(false);
  // create State for input in Search
  const [input, setInput] = useState('');
  
  return (
    <>
      <Stack direction='horizontal' gap={3}>
        <Form.Control 
          className='me-auto' 
          placeholder='Search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button 
          className='float-end'
          size='md'
          variant='primary'
          id='add-job-btn'
          onClick={() => setAddJobModal(true)}
        >
          Add New Job
        </Button>
      </Stack>
    </>
  );
};

export default SearchContainer;
