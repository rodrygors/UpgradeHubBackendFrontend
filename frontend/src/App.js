import Login from "./components/Login/Login";

import User from "./components/User/User";

import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      {
        <User/>
        
        /*isLogged ? (
        <div>
          <p>User is Logged. Hi {user.name}</p>
          <User />
        </div>
      ) : (
        <Login setIsLogged={setIsLogged} setUser={setUser} />
      )*/}
    </div>
  );
}

export default App;
