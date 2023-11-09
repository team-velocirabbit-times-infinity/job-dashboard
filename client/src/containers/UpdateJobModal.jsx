import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const UpdateJobModal = ({job, showUpdateModal, updateJob, onSave, onHide}) => {
  const { company, status, location, url, minsalary, maxsalary, level, hours, listingid, title } = job;

  // create state for each form group
  const [jobTitle, setJobTitle] = useState(title);
  const [companyName, setCompanyName] = useState(company);
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [jobLocation, setJobLocation] = useState(location);
  const [jobUrl, setJobUrl] = useState(url);
  // capitalized names to deal with same variable names
  const [HOURS, setHours] = useState(hours);
  const [MINSALARY, setMinSalary] = useState(minsalary);
  const [MAXSALARY, setMaxSalary] = useState(maxsalary);
  const [LEVEL, setLevel] = useState(level);
  

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
    onHide();
  };

  // declare 'save' function to save inputted info
  const update = (e) => {
    e.preventDefault();
    const payload = {
      title: jobTitle,
      company: companyName,
      status: selectedStatus,
      location: jobLocation,
      url: jobUrl,
      minsalary: MINSALARY,
      maxsalary: MAXSALARY,
      level: LEVEL,
      hours: HOURS,
    };
    
    console.log('hello')

    axios
      .put(`http://localhost:3000/listing/${listingid}`, payload)
      .then(res => {
        updateJob(listingid, {
          title: jobTitle,
          company: companyName,
          status: selectedStatus,
          location: jobLocation,
          url: jobUrl,
          minsalary: MINSALARY,
          maxsalary: MAXSALARY,
          level: LEVEL,
          hours: HOURS,
          listingid: listingid
        })
       onSave()})
      .catch((err) => console.log(err));
  };

  return (
    <Modal size='lg' show={showUpdateModal} onHide={clear}>
      <Form onSubmit={update}>
        <Modal.Header closeButton>
          <Modal.Title id='updateJobModal'>Update Job Entry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId='inputJobTitle' className='mb-2'>
            <Form.Label>Job Title :</Form.Label>
            <Form.Control
              type='text'
              name='jobTitle'
              // placeholder={title}
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
              // placeholder={company}
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
              // placeholder={level}
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
              // placeholder={hours}
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
              // placeholder={location}
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
              // placeholder={url}
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Min Salary :</Form.Label>
            <Form.Control
              type='text'
              name='minSalary'
              // placeholder={minSalary}
              value={MINSALARY}
              onChange={(e) => setMinSalary(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Max Salary :</Form.Label>
            <Form.Control
              type='text'
              name='maxSalary'
              // placeholder={maxSalary}
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
