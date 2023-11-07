import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const UpdateJobModal = (props) => {
  const { company, status, location, url, minSalary, maxSalary, level, hours, listingId, title } = props.props;

  // create state for each form group
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobUrl, setJobUrl] = useState('');
  // capitalized names to deal with same variable names
  const [HOURS, setHours] = useState('');
  const [MINSALARY, setMinSalary] = useState('');
  const [MAXSALARY, setMaxSalary] = useState('');
  const [LEVEL, setLevel] = useState('');

  // declare 'clear' function that will reset to default
  const clear = () => {
    setJobTitle('');
    setCompanyName('');
    setJobLocation('');
    setJobUrl('');
    setMinSalary('');
    setMaxSalary('');
    setLevel('');
    setHours('');
    props.onHide();
  };

  // declare 'save' function to save inputted info
  const save = (e) => {
    e.preventDefault();
    const payload = {
      title: jobTitle,
      company: companyName,
      status: selectedStatus,
      location: jobLocation,
      url: jobUrl,
      minSalary: minSalary,
      maxSalary: maxSalary,
      level: level,
      hours: hours,
    };
    
    console.log('hello')

    axios
      .put(`http://localhost:3000/listing/?id=${listingId}`, payload)
      .catch((err) => console.log(err));
  };

  return (
    <Modal {...props} size='lg' onHide={clear}>
      <Form onSubmit={save}>
        <Modal.Header closeButton>
          <Modal.Title id='updateJobModal'>Update Job Entry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId='inputJobTitle' className='mb-2'>
            <Form.Label>Job Title :</Form.Label>
            <Form.Control
              type='text'
              name='jobTitle'
              placeholder={title}
              value={jobTitle}
              required
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='inputCompany' className='mb-2'>
            <Form.Label>Company Name :</Form.Label>
            <Form.Control
              type='text'
              name='companyName'
              placeholder={company}
              value={companyName}
              required
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='inputLevel'>
            <Form.Label>Level :</Form.Label>
            <Form.Control
              type='text'
              name='inputLevel'
              placeholder={level}
              value={LEVEL}
              required
              onChange={(e) => setLevel(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='inputHours'>
            <Form.Label>Hours :</Form.Label>
            <Form.Control
              type='text'
              name='inputHours'
              placeholder={hours}
              value={HOURS}
              required
              onChange={(e) => setHours(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='appStatus'>
            <Form.Label>Application Status :</Form.Label>
            <Form.Select
              aria-label='select'
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>Select a status</option>
              <option value={'bookmarked'}>Bookmarked</option>
              <option value={'applying'}>Applying</option>
              <option value={'applied'}>Applied</option>
              <option value={'interview'}>Interviewing</option>
              <option value={'negotiating'}>Negotiating</option>
              <option value={'accepted'}>Accepted</option>
              <option value={'declined'}>Declined</option>
              <option value={'rejected'}>Rejected</option>
              <option value={'archived'}>Archived</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location :</Form.Label>
            <Form.Control
              type='text'
              name='jobLocation'
              placeholder={location}
              value={jobLocation}
              required
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Job Post Url :</Form.Label>
            <Form.Control
              type='text'
              name='jobUrl'
              placeholder={url}
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Min Salary :</Form.Label>
            <Form.Control
              type='text'
              name='minSalary'
              placeholder={minSalary}
              value={MINSALARY}
              onChange={(e) => setMinSalary(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Max Salary :</Form.Label>
            <Form.Control
              type='text'
              name='maxSalary'
              placeholder={maxSalary}
              value={MAXSALARY}
              onChange={(e) => setMaxSalary(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={clear}>
            Cancel
          </Button>
          <Button variant='primary' type='submit'>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateJobModal;
