import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddJobModal = ({
  jobTitle,
  companyName,
  selectedStatus,
  jobLocation,
  jobUrl,
  hours,
  minSalary,
  maxSalary,
  level,
  jobTitleChangeHandler,
  companyNameChangeHandler,
  selectedStatusChangeHandler,
  jobLocationChangeHandler, 
  jobUrlChangeHandler,
  hoursChangeHandler,
  minSalaryChangeHandler,
  maxSalaryChangeHandler,
  levelChangeHandler,
  save,
  clear
}) => {
  // create state for each form group
  // const [jobTitle, setJobTitle] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [selectedStatus, setSelectedStatus] = useState("");
  // const [jobLocation, setJobLocation] = useState("");
  // const [jobUrl, setJobUrl] = useState("");
  // const [hours, setHours] = useState("");
  // const [minSalary, setMinSalary] = useState("");
  // const [maxSalary, setMaxSalary] = useState("");
  // const [level, setLevel] = useState("");

  // // declare 'clear' function that will reset to default
  // const clear = () => {
  //   setJobTitle("");
  //   setCompanyName("");
  //   setJobLocation("");
  //   setJobUrl("");
  //   setMinSalary("");
  //   setMaxSalary("");
  //   setLevel("");
  //   setHours("");
  //   props.onHide();
  // };

  // declare 'save' function to save inputted info
  // const save = (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     title: jobTitle,
  //     company: companyName,
  //     status: selectedStatus,
  //     location: jobLocation,
  //     url: jobUrl,
  //     minSalary: minSalary,
  //     maxSalary: maxSalary,
  //     level: level,
  //     hours: hours,
  //   };

  //   console.log("hello");

  //   axios
  //     .post("http://localhost:3000/listing/", payload)
  //     .then((res) => {})
  //     .catch((err) => console.log(err));
  // };

  return (
    <Modal  size="lg" onHide={clear}>
      <Form onSubmit={save}>
        <Modal.Header closeButton>
          <Modal.Title id="addJobModal">Add a new job</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="inputJobTitle" className="mb-2">
            <Form.Label>Job Title :</Form.Label>
            <Form.Control
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              value={jobTitle}
              required
              onChange={jobTitleChangeHandler}
            />
          </Form.Group>

          <Form.Group controlId="inputCompany" className="mb-2">
            <Form.Label>Company Name :</Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={companyName}
              required
              onChange={companyNameChangeHandler}
            />
          </Form.Group>

          <Form.Group controlId="inputLevel">
            <Form.Label>Level :</Form.Label>
            <Form.Control
              type="text"
              name="inputLevel"
              placeholder="Enter job level"
              value={level}
              required
              onChange={levelChangeHandler}
            />
          </Form.Group>

          <Form.Group controlId="inputHours">
            <Form.Label>Hours :</Form.Label>
            <Form.Control
              type="text"
              name="inputHours"
              placeholder="Enter hours"
              value={hours}
              required
              onChange={hoursChangeHandler}
            />
          </Form.Group>

          <Form.Group controlId="appStatus">
            <Form.Label>Application Status :</Form.Label>
            <Form.Select
              aria-label="select"
              value={selectedStatus}
              onChange={selectedStatusChangeHandler}
            >
              <option>Select a status</option>
              <option value={"bookmarked"}>Bookmarked</option>
              <option value={"applying"}>Applying</option>
              <option value={"applied"}>Applied</option>
              <option value={"interview"}>Interviewing</option>
              <option value={"negotiating"}>Negotiating</option>
              <option value={"accepted"}>Accepted</option>
              <option value={"declined"}>Declined</option>
              <option value={"rejected"}>Rejected</option>
              <option value={"archived"}>Archived</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location :</Form.Label>
            <Form.Control
              type="text"
              name="jobLocation"
              placeholder="Enter location"
              value={jobLocation}
              required
              onChange={jobLocationChangeHandler}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Job Post Url :</Form.Label>
            <Form.Control
              type="text"
              name="jobUrl"
              placeholder="Enter url to job listing"
              value={jobUrl}
              onChange={jobUrlChangeHandler}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Min Salary :</Form.Label>
            <Form.Control
              type="text"
              name="minSalary"
              placeholder="Enter a min salary"
              value={minSalary}
              onChange={minSalaryChangeHandler}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Max Salary :</Form.Label>
            <Form.Control
              type="text"
              name="maxSalary"
              placeholder="Enter a max salary"
              value={maxSalary}
              onChange={maxSalaryChangeHandler}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={clear}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddJobModal;
