import React, { useState } from "react";
import axios from "axios";

import "./Login.css";

const Login = ({ setIsLogged, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedLoggin, setFailedLoggin] = useState(false);
  const usersEndPoint = "http://localhost:8080/users";

  const getUser = (e) => {
    e.preventDefault();
    axios.get(usersEndPoint).then((response) => {
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
                  autoComplete="off"
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
