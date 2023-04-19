import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);

    setError('')
    setSuccess('')

    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('Add two upper case letter')
        return
    }
    else if(!/(?=.*[!@#$&*])/.test(password)){
        setError('Add one special character')
        return
    }

    setUsername('')
    setPassword('')

  };
  return (
    <div>
      <h3 className="text-center">Please Login Here!</h3>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="rememberMe">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
            <p className="text-danger">{error}</p>
            <p className="text-success">{success}</p>
            

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </div>
    </div>
  );
};

export default Login;
