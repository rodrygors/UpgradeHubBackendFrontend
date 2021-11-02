import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://6181431832c9e2001780472a.mockapi.io/username";

  const getUser = (e) => {
    e.preventDefault();
    //fazer request ao endpoint para receber um user
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
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
