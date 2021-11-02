import Login from "./components/Login/Login";

import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      {isLogged ? (
        <p>User is Logged. Hi {user.name}</p>
      ) : (
        <Login setIsLogged={setIsLogged} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
