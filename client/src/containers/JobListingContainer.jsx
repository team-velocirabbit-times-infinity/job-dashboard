import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import JobListingModal from "./JobListingModal";
import AddJobModal from "./AddJobModal.jsx"
import axios from "axios";


const JobListingContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/listing/');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [hours, setHours] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [level, setLevel] = useState("");  

  const jobTitleChangeHandler = (e) => {
    setJobTitle(e.target.value);
  };

  const companyNameChangeHandler = (e) => {
    setCompanyName(e.target.value);
  };

  const selectedStatusChangeHandler = (e) => {
    setSelectedStatus(e.target.value);
  };

  const jobLocationChangehandler = (e) => {
    setJobLocation(e.target.value);
  }

  const levelChangeHandler = (e) => {
    setLevel(e.target.value);
  };

  const jobUrlChangeHandler = (e) => {
    setJobUrl(e.target.value);
  };

  const hoursChangeHandler = (e) => {
    setHours(e.target.value);
  };

  const minSalaryChangeHandler = (e) => {
    setMinSalary(e.target.value);
  };

  const maxSalaryChangeHandler = (e) => {
    setMaxSalary(e.target.value);
  }; 

  const clear = () => {
    setJobTitle("");
    setCompanyName("");
    setJobLocation("");
    setJobUrl("");
    setMinSalary("");
    setMaxSalary("");
    setLevel("");
    setHours("");
    props.onHide();
  };


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

    console.log("hello");

    axios
      .post("http://localhost:3000/listing/", payload)
      .then((res) => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/listing/');
            const data = await response.json();
            setJobs(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleShowModal = (job) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const handleCloseModal = () => {
    // setSelectedJob(null);
    setShowJobModal(false);
  };

  return (
    <Container className="my-4">
      <JobListingModal
        show={showJobModal}
        selectedJob={selectedJob}
        handleCloseModal={handleCloseModal}
      />
      <Row className="bg-light p-3">
        <Col>
          <h3>Positions</h3>
        </Col>
        <Col>
          <AddJobModal
            show={showAddJobModal}
            onHide={() => setShowAddJobModal(false)}
            jobTitle={jobTitle}
            jobTitleChangeHandler={jobTitleChangeHandler}
            jobLocation={jobLocation}
            jobLocationChangehandler={jobLocationChangehandler}
            jobUrl={jobUrl}
            jobUrlChangeHandler={jobUrlChangeHandler}
            companyName={companyName}
            companyNameChangeHandler={companyNameChangeHandler}
            level={level}
            levelChangeHandler={levelChangeHandler}
            hours={hours}
            hoursChangeHandler={hoursChangeHandler}
            maxSalary={maxSalary}
            maxSalaryChangeHandler={maxSalaryChangeHandler}
            minSalary={minSalary}
            minSalaryChangeHandler={minSalaryChangeHandler}
            selectedStatus={selectedStatus}
            selectedStatusChangeHandler={selectedStatusChangeHandler}
            save={save}
            clear={clear}
          />
          <Button
            className="float-end"
            size="md"
            variant="primary"
            id="add-job-btn"
            onClick={() => setShowAddJobModal(true)}
          >
            Add Job
          </Button>
        </Col>
      </Row>
      {jobs.map((job) => (
        <Row
          key={job.listingId}
          className="job-listing-row p-3 mb-2 bg-white rounded shadow"
          onClick={() => handleShowModal(job)}
        >
          <Col>{job.title}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default JobListingContainer;

// import React, {useState, useEffect} from 'react';
// import {Container, Row, Col, Modal} from 'react-bootstrap';
// import JobListingModal from './JobListingModal';

// const JobListingContainer = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [showJobModal, setShowJobModal] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/listing/');
//         // console.log(" ✅✅✅✅✅: ", response)
//         const data = await response.json();
//         // console.log(" ✅✅: ", data)
//         setJobs(data);
//         // console.log(jobs)
//       } catch {
//         (error) => console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleJobClick = (job) => {
//     // when job is clicked, set the selectedJob state to the clicked job
//     setSelectedJob(job);
//   };

//   const handleShowModal = (job) => {
//     setSelectedJob(job);
//     setShowJobModal(true);
//   };

//   // set selectedJob state back null when modal is closed
//   const handleCloseModal = () => {
//     setSelectedJob(null);
//     setShowJobModal(false);
//   };

//   return (
//     <>
//       <JobListingModal
//         show={showJobModal}
//         selectedJob={selectedJob}
//         // onHide={handleCloseModal}
//         handleCloseModal={handleCloseModal}
//       />
//       <Container>
//         <Row className='job-listing-header'>
//           <Col>Positions</Col>
//         </Row>
//         {jobs.map(
//           (
//             job // iterate over the jobs array
//           ) => (
//             <Row
//               key={job.listingId}
//               className='job-listing-row'
//               onClick={() => handleShowModal(job)} // when a row is clicked, call handleJobClick with clicked job as arg
//             >
//               <Col>{job.title}</Col>
//             </Row>
//           )
//         )}
//       </Container>

//       {/* <Modal show={selectedJob !== null} onHide={handleCloseModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>{selectedJob ? selectedJob.position : ""}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Company: {selectedJob.company}</p>
//         <p>Level: {selectedJob.level}</p>
//         <p>Hours: {selectedJob.hour}</p>
//         <p>Minimum Salary: {selectedJob.minSalary}</p>
//         <p>Maximum Salary: {selectedJob.maxSalary}</p>
//         <p>Location: {selectedJob.location}</p>
//         <p>Status: {selectedJob.status}</p>
//         <p>URL: {selectedJob.url}</p>
//       </Modal.Body>
//     </Modal> */}
//     </>
//   );
// };

// export default JobListingContainer;
