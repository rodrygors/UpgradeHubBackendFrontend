import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import UserForm from "./UserForm";
import axios from "axios";

import "./User.css";

const User = ({ user }) => {
  const [edit, setEdit] = useState(false);

  const [change, setChange] = useState({ user });

  // const res = axios.put("http://localhost:8080/users/" + user.id, {
  //   age: "5",
  //   name: "string",
  //   password: "dada",
  // });

  /*handleChange (event) {
    setChange({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A change was made');
    event.preventDefault();
  }
  */

  return (
    <div className="container">
      <div className="container-user">
        <div className="wrap-user">
          <div className="user-form">
            <span className="user-form-title">Hello {user.name}</span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNElmiUQvi_eR8QKiTfgeE0wL9fc6YvhM9Dw&usqp=CAU"
              alt="profile dog"
            />
            <div className="wrap-input margin-top-35 margin-bottom-35">
              <h3>Your username is: {user.name}</h3>
            </div>
            <div className="wrap-input margin-bottom-35">
              <h3>Your password is: {user.password}</h3>
            </div>
            <div className="wrap-input margin-bottom-35">
              <h3>Your age is: {user.age}</h3>
            </div>
            {edit ? (
              <button onClick={() => setEdit(false)}>edit</button>
            ) : (
              <button onClick={() => setEdit(true)}>edit</button>
            )}
          </div>

          <div>
            {edit ? (
              <div>
                {/* <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={change.name} onChange={handleChange} />
        </label>
      
        <label>
          password:
          <input type="text" value={change.password} onChange={handleChange} />
        </label>

        <label>
          age:
          <input type="text" value={change.age} onChange={handleChange} />
        </label>
        <button type="submit" value="Submit" />

      </form> */}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;