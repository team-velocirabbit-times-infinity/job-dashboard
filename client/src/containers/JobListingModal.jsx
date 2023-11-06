import React from 'react';
import { Modal } from 'react-bootstrap';

const JobListingModal = ({ show, selectedJob, handleCloseModal }) => {
    return (
        // <Modal show={selectedJob !== null} onHide={handleCloseModal}>
        <Modal show={show} onHide={handleCloseModal}> 
        <Modal.Header closeButton>
          {/* <Modal.Title>{selectedJob ? selectedJob.position : ""}</Modal.Title> */}
          <Modal.Title>{selectedJob?.position || ''}</Modal.Title>  
        </Modal.Header>
        <Modal.Body>
          {/* <p>Company: {selectedJob.company}</p>
          <p>Level: {selectedJob.level}</p>
          <p>Hours: {selectedJob.hour}</p>
          <p>Minimum Salary: {selectedJob.minSalary}</p>
          <p>Maximum Salary: {selectedJob.maxSalary}</p>
          <p>Location: {selectedJob.location}</p>
          <p>Status: {selectedJob.status}</p>
          <p>URL: {selectedJob.url}</p> */}
          <p>Company: {selectedJob?.company || 'N/A'}</p>
          <p>Level: {selectedJob?.level || 'N/A'}</p>
          <p>Hours: {selectedJob?.hour || 'N/A'}</p>
          <p>Minimum Salary: {selectedJob?.minSalary || 'N/A'}</p>
          <p>Maximum Salary: {selectedJob?.maxSalary || 'N/A'}</p>
          <p>Location: {selectedJob?.location || 'N/A'}</p>
          <p>Status: {selectedJob?.status || 'N/A'}</p>
          <p>URL: {selectedJob?.url || 'N/A'}</p>
        </Modal.Body>
      </Modal>
    )
}

export default JobListingModal;