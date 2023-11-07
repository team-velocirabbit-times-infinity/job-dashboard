import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import UpdateJobModal from './UpdateJobModal';

const JobListingModal = ({show, selectedJob, handleCloseModal}) => {
  const [updateEntry, setUpdateEntry] = useState(false);
  const [showUpdateJobModal, setShowUpdateJobModal] = useState(false);

  // const handleShowModal = (job) => {
  //   setSelectedJob(job);
  //   setShowJobModal(true);
  // };

  // const handleCloseModal = () => {
  //   setSelectedJob(null);
  //   setShowJobModal(false);
  // };

  // add delete functionality
  const deleteEntry = () => {
    console.log('CLIENT SIDE LISTING ID', selectedJob.listingId);
    axios
      .delete(`http://localhost:3000/listing/?id=${selectedJob.listingId}`)
      .then(handleCloseModal)
      .catch((err) => console.log(err));
  };

  // add functionality to save edits
  const save = () => {};

  return (

    <Modal show={show} onHide={handleCloseModal}>
      <UpdateJobModal
        props={selectedJob}
        show={showUpdateJobModal}
        onHide={() => {
          setShowUpdateJobModal(false)
        }}
      />
      <Modal.Header closeButton>
        {/* <Modal.Title>{selectedJob ? selectedJob.position : ""}</Modal.Title> */}
        <Modal.Title>{selectedJob?.title || ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Company: {selectedJob?.company || 'N/A'}</p>
        <p>Level: {selectedJob?.level || 'N/A'}</p>
        <p>Hours: {selectedJob?.hours || 'N/A'}</p>
        <p>Minimum Salary: {selectedJob?.minSalary || 'N/A'}</p>
        <p>Maximum Salary: {selectedJob?.maxSalary || 'N/A'}</p>
        <p>Location: {selectedJob?.location || 'N/A'}</p>
        <p>Status: {selectedJob?.status || 'N/A'}</p>
        <p>URL: {selectedJob?.url || 'N/A'}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={deleteEntry}>
          Delete Entry
        </Button>
        <Button variant='primary' onClick={() => setShowUpdateJobModal(true)}>
          Update Entry
        </Button>
        <Button variant='success' onClick={save}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobListingModal;
