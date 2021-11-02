import React, { useState } from "react";
import axios from "axios";

import "./Login.css";

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
    <div className="container">
		<div className="container-login">
    <div className="wrap-login">
    <form  onSubmit={getUser} className="login-form">
    <span className="login-form-title">
    Faça o Login
    </span>
    {failedLoggin ? <p className="alert">Username or password are incorrect!</p> : ""}

					<div className="wrap-input margin-top-35 margin-bottom-35">
						<input onChange={(e) => setUsername(e.target.value)} className="input-form" type="text" name="username" id="username" placeholder="Username" autocomplete="off"/>
						<span className="focus-input-form"></span>
					</div>

					<div className="wrap-input margin-bottom-35">
						<input onChange={(e) => setPassword(e.target.value)} className="input-form" type="password" name="password" placeholder="Password"/>
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


// <div>
//       {failedLoggin ? <p>Username or password are incorrect!</p> : ""}
//       <form onSubmit={getUser}>
//         <label htmlFor="username">Username</label>
//         <input
//           onChange={(e) => setUsername(e.target.value)}
//           id="username"
//           name="username"
//           type="text"
//         />
//         <label for="username">Password</label>
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           id="username"
//           name="username"
//           type="password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>