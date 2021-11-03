import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import UserForm from "./UserForm";
import axios from "axios";



const User = ({ user }) => {
  const [edit, setEdit] = useState(false);

  const [change, setChange] = useState({user});

  const res = axios.put('http://localhost:8080/users/' + user.id, { age: '5', name: 'string', password: 'dada' });


  /*handleChange (event) {
    setChange({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A change was made');
    event.preventDefault();
  }
  */

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

      <div>{edit ? 
      <div>

      <form onSubmit={handleSubmit}>
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

      </form>

    </div>
     : null}</div>
    </div>
  );
};

export default User;