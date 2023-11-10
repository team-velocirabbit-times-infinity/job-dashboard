import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    fetch('/user/login', {
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
      if (data) {
        navigate('/mainmenu', {state: {username: username}});
      } else {
        setUsername('');
        setPassword('');
      }
    });
  }

  return (
    <div className="mainLoginPage">
      <form onSubmit={authenticateUser}>
        <input 
          className="formInput"
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
          <button className="orangeBtn" type='submit'>Login</button>
          <button className="orangeBtn" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
        <p>Forgot your password?</p>
      </form>
    </div>
  )
};

export default LoginPortal;
