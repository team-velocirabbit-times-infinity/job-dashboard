import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {toast} from 'react-toastify';
// import {useMutation, useClient} from 'react-query';
// import * as api from ''; // need to double check with backend team

const AddJobModal = (props) => {
  // create state for each form group
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(''); 
  const [jobLocation, setJobLocation] = useState('');
  const [jobUrl, setJobUrl] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  // declare 'createJobMutation' func to add job to database
  // const createJobMutation = useMutation(api.createJob, {
  //   onError: (err) => {
  //     console.error(err);
  //     toast.error('Could not save job.');
  //   },
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries('jobs');
  //     toast.success(`Job: ${data['title']} is saved!`);
  //     clear();
  //   }
  // });

  // declare 'clear' function that will reset to default
  const clear = () => {
    setJobTitle('');
    setCompanyName('');
    setJobLocation('');
    setJobUrl('');
    setSalaryRange('');
    props.onHide();
  };

  // declare 'save' function to save inputted info
  const save = (e) => {
    e.preventDefault();
    const payload = {
      'title': jobTitle,
      'company': companyName,
      'status': selectedStatus,
      'location': jobLocation,
      'url': jobUrl,
      'salary': salaryRange
    };
    // createJobMutation.mutate(payload);
  };

  return (
    <Modal {...props} size='lg' arialabelledby='SearchModal' onHide={clear}>
      <Form onSubmit={save}>
        <Modal.Header closeButton>
          <Modal.Title id='addJobModal'>
            Add a new job
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId='inputJobTitle'>
            <Form.Label>Job Title</Form.Label>
            <Form.Control 
              type='text'
              name='jobTitle'
              placeholder='Enter job title'
              value={jobTitle}
              required
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='inputCompany'>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type='text'
              name='companyName'
              placeholder='Enter company name'
              value={companyName}
              required
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='appStatus'>
            <Form.Label>Application Status</Form.Label>
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
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              name='jobLocation'
              placeholder='Enter location'
              value={jobLocation}
              required
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Job Post Url</Form.Label>
            <Form.Control
              type='text'
              name='jobUrl'
              placeholder='Enter url to job listing'
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Salary Range</Form.Label>
            <Form.Control
              type='text'
              name='salaryRange'
              placeholder='Enter a salary range'
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={clear}>Cancel</Button>
          <Button variant='primary' type='submit'>Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddJobModal;