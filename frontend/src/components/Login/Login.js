import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" />
        <label for="username">Password</label>
        <input id="username" name="username" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
