import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import axios from "axios";

const User = ({ user }) => {
  const [edit, setEdit] = useState(false);

  const [change, setChange] = useState();

  const [userup, setUserup] = useState();

  // const res = axios.put('http://localhost:8080/users/' + user.id, {
  //   age: '5',
  //   name: 'string',
  //   password: 'dada' }
  //   );

  const handleChange = (event) => {
    setChange({ value: event.target.value });
  };

  function handleSubmit() {
    console.log(change);
    console.log(change.name);
    axios.put("http://localhost:8080/user/" + change.id, {
        age: change.age,
        name: change.name,
        password: change.password,
    });
    alert("A change was made");
  }

  useEffect(() => {
    setChange(user);
  }, [user]);

  //  console.log(user)
  console.log(change);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3>Id: {user.id}</h3>
        <h3>Username: {user.name}</h3>
        <h3>password: {user.password}</h3>
        <h3>Age: {user.age}</h3>
        {edit ? (
          <button onClick={() => setEdit(false)}>edit</button>
        ) : (
          <button onClick={() => setEdit(true)}>edit</button>
        )}
      </div>

      <div>
        {edit ? (
          <div>
            <form onSubmit={() => handleSubmit(change)}>
              <label>
                Name:
                {/* <input type="text" value={user.name} onChange={()=> setChange(change.name)} /> */}
                <input
                  type="text"
                  value={change.name}
                  onChange={(e) => {setChange({...change, name:e.target.value});
                  }}
                />
              </label>

              <label>
                password:
                <input
                  type="text"
                  value={change.password}
                  onChange={(e) => setChange(e.target.value)}
                />
              </label>

              <label>
                age:
                <input
                  type="number"
                  value={change.age}
                  onChange={(e) => setChange(change.age)}
                />
              </label>
              <button type="submit" value="Submit" />
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default User;
