import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import App from "../App";
import "../styles/Login.css";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const history = useHistory();

  const loginAdmin = () => {
    axios
      .post("http://localhost:3010/api/admin-login", {
        email,
        password,
      })
      .then((res) => res.status == 200 && setIsAuthenticated(true));
  };
  return (
    <>
      {!isAuthenticated ? (
        <>
          <Form
            style={{ marginTop: "25vh" }}
            onSubmit={(e) => e.preventDefault()}
            className="text-light w-50 mx-auto d-flex flex-column align-items-center h-100 justify-content-center"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                id="login"
                onChange={(e) => setEmail(e.target.value)}
                name="login"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                name="login"
                placeholder="Password"
              />
            </Form.Group>

            <Button
              variant="primary"
              className="text-center center"
              type="submit"
              onClick={() => loginAdmin()}
            >
              Submit
            </Button>
          </Form>
          {/* <div className="wrapper">
            <div className="login-form">
              <input
                type="text"
                id="login"
                onChange={(e) => setEmail(e.target.value)}
                name="login"
                placeholder="Username"
                class="fadeIn second"
              />
              <input
              class="fadeIn third"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                name="login"
                placeholder="Password"
              />
              <input
                type="submit"
                class="fadeIn fourth"
                onClick={() => loginAdmin()}
                value="Log In"
              />
            </div>
          </div> */}
        </>
      ) : (
        <App />
      )}
    </>
  );
};

export default Login;
