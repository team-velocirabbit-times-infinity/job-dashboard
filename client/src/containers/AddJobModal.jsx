import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddJobModal = ({
  jobTitle,
  jobTitleChangeHandler,
  companyName,
  companyNameChangeHandler,
  selectedStatus,
  selectedStatusChangeHandler,
  jobLocation,
  jobLocationChangehandler,
  jobUrl,
  jobUrlChangeHandler,
  hours,
  hoursChangeHandler,
  minSalary,
  minSalaryChangeHandler,
  maxSalary,
  maxSalaryChangeHandler,
  level,
  levelChangeHandler,
  save,
  clear,
  show,
}) => {
  return (
    <Modal show={show} size="lg" onHide={clear}>
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
              onChange={jobLocationChangehandler}
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
