import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const LoginPortal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  function authenticateUser(e) {
    e.preventDefault();

    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if (data && !data.message) {
        navigate('/mainmenu', {state: {username: username}});
      } else {
        setUsername('');
        setPassword('');
      }
    });
  }

  return (
    <div className="mainLoginPage">
      <Col lg={3}></Col>
      <Col>
      <br />
      <br />
      <form onSubmit={authenticateUser}>
        <input 
          className="formInput m-3"
          name="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
          placeholder="Username"></input>
        <input 
          className="formInput"
          name="password"
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          placeholder="Password"
          cols="300"></input>
        <div>
          
          <Button className="orangeBtn ml-10 m-3" type='submit'>Login</Button>
          <Button className="orangeBtn" onClick={() => navigate('/signup')}>Sign Up</Button>
        </div>
        <p>Forgot your password?</p>
      </form>
      </Col>
    </div>
  )
};

export default LoginPortal;
