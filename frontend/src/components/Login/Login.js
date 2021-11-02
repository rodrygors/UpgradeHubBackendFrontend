import React, { useState } from "react";
import axios from "axios";

const Login = ({ setIsLogged, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedLoggin, setFailedLoggin] = useState(false);
  const url = "https://6181431832c9e2001780472a.mockapi.io/username";

  const getUser = (e) => {
    e.preventDefault();
    axios.get(url).then((response) => {
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
        });
      } else {
        setFailedLoggin(true);
      }
    });
  };

  return (
    <div>
      {failedLoggin ? <p>Username or password are incorrect!</p> : ""}
      <form onSubmit={getUser}>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          name="username"
          type="text"
        />
        <label for="username">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="username"
          name="username"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
