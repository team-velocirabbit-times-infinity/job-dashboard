import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

const JobListingContainer = ({ jobs }) => {
  const [seletedJob, setSeletedJob] = useState(null);

  const handleJobClick = (job) => {
    // when job is clicked, set the selectedJob state to the clicked job
    setSeletedJob(job);
  };

  // set selectedJob state back to null when modal is closed
  const handleCloseModal = () => {
    setSeletedJob(null);

    // {selectedJob}

    <Container>
      <Row className="job-listing-header">
        <Col>Position</Col>
      </Row>
      {jobs.map(
        (
          job // iterate over the jobs array
        ) => (
          <Row
            key={job.id}
            className="job-listing-row"
            onClick={() => handleJobClick(job)} // when a row is clicked, call handleJobClick with clicked job as arg
          >
            <Col>{job.position}</Col> // render the position of the job
          </Row>
        )
      )}

      <Modal show={selectedJob !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob.position}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Company: {selectedJob.company}</p>
          <p>Level: {selectedJob.level}</p>
          <p>Location: {selectedJob.location}</p>
          <p>URL: {selectedJob.url}</p>
          <p>Salary Range: {selectedJob.salaryRange}</p>
        </Modal.Body>
      </Modal>
    </Container>;
  };
};

export default JobListingContainer;
