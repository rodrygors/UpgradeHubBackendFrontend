import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import User from "./components/User/User";

import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <div className="App">
        {isLogged ? (
          <div>
            <p>User is Logged. Hi {user.name}</p>
            <Navbar />
          </div>
        ) : (
          <Login setIsLogged={setIsLogged} setUser={setUser} />
        )}

        <Switch>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
