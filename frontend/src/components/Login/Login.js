import React, { useState } from "react";
import axios from "axios";

import "./Login.css";

const Login = ({ setIsLogged, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedLoggin, setFailedLoggin] = useState(false);
  let config = {
    headers: {
      Accept: "*/*",
    },
  };
  const url = "https://6181431832c9e2001780472a.mockapi.io/username";
  // const api = "http://localhost:8080/products";

  const getUser = (e) => {
    e.preventDefault();
    axios.get(url, config).then((response) => {
      const user = response.data.find(
        (user) => username === user.name && password === user.password
      );
      if (user !== undefined) {
        setIsLogged(true);
        setUser({
          name: user.name,
          id: user.id,
          password: user.password,
          age: user.age,
          invoices: user.invoices,
        });
      } else {
        setFailedLoggin(true);
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={getUser} className="login-form">
              <span className="login-form-title">Faça Login</span>
              {failedLoggin ? (
                <p className="alert">Username or password are incorrect!</p>
              ) : (
                ""
              )}

              <div className="wrap-input margin-top-35 margin-bottom-35">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-form"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  autocomplete="off"
                />
                <span className="focus-input-form"></span>
              </div>

              <div className="wrap-input margin-bottom-35">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-form"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className="focus-input-form"></span>
              </div>

              <div className="container-login-form-btn">
                <button type="submit" className="login-form-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
