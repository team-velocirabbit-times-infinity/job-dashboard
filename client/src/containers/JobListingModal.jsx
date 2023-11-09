import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import UpdateJobModal from "./UpdateJobModal";

const JobListingModal = ({ show, selectedJob, handleCloseModal, deleteJob, updateJob }) => {
  const [updateEntry, setUpdateEntry] = useState(false);
  const [showUpdateJobModal, setShowUpdateJobModal] = useState(false);


  const onSave = () => {
    setShowUpdateJobModal(false);
  };
  // add delete functionality
  const deleteEntry = () => {
    console.log("CLIENT SIDE LISTING ID", selectedJob.listingid);
    axios
      .delete(`http://localhost:3000/listing/?id=${selectedJob.listingid}`)
      .then(res => {
        deleteJob(selectedJob.listingid);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  // add functionality to save edits
  // const save = () => {
  //   setShowUpdateJobModal(false);
  // };

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <UpdateJobModal
        job={selectedJob}
        showUpdateModal={showUpdateJobModal}
        updateJob={updateJob}
        onSave={onSave}
        onHide={() => {
          setShowUpdateJobModal(false);
        }}
      />
      <Modal.Header closeButton>
        <Modal.Title>{selectedJob.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Company: {selectedJob.company}</p>
        <p>Level: {selectedJob.level}</p>
        <p>Hours: {selectedJob.hours}</p>
        <p>Minimum Salary: {selectedJob.minsalary}</p>
        <p>Maximum Salary: {selectedJob.maxsalary}</p>
        <p>Location: {selectedJob.location}</p>
        <p>Status: {selectedJob.status}</p>
        <p>URL: {selectedJob.url}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={deleteEntry}>
          Delete Entry
        </Button>
        <Button variant="primary" onClick={() => setShowUpdateJobModal(true)}>
          Update Entry
        </Button>
        <Button variant="success" onClick={handleCloseModal}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobListingModal;
