import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./User.css";

const User = ({ user }) => {
  const [edit, setEdit] = useState(false);

  const [change, setChange] = useState();

  function handleSubmit() {
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

  return (
    <div className="container">
      <div className="container-user">
        <div className="wrap-user">
          <div className="user-form">
            <span className="user-form-title">Hello {user.name}</span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNElmiUQvi_eR8QKiTfgeE0wL9fc6YvhM9Dw"
              alt="user profile"
            />
            <div className="wrap-input margin-top-35 margin-bottom-35">
              <h3>Username: {user.name}</h3>
            </div>
            <div className="wrap-input margin-bottom-35">
              <h3>Password: {user.password}</h3>
            </div>
            <div className="wrap-input margin-bottom-35">
              <h3>Age: {user.age}</h3>
            </div>

            {edit ? (
              <button className="edit-btn" onClick={() => setEdit(false)}>
                edit
              </button>
            ) : (
              <button className="edit-btn" onClick={() => setEdit(true)}>
                edit
              </button>
            )}
          </div>

          <div>
            {edit ? (
              <div class="edit_card">
                <form onSubmit={() => handleSubmit(change)}>
                  <div class="info-edit">
                    <label>
                      Name:
                      <input
                        type="text"
                        value={change.name}
                        onChange={(e) => {
                          setChange({ ...change, name: e.target.value });
                        }}
                      />
                    </label>

                    <label>
                      password:
                      <input
                        type="text"
                        value={change.password}
                        onChange={(e) =>
                          setChange({ ...change, password: e.target.value })
                        }
                      />
                    </label>

                    <label>
                      age:
                      <input
                        type="number"
                        value={change.age}
                        onChange={(e) =>
                          setChange({ ...change, age: e.target.value })
                        }
                      />
                    </label>
                  </div>

                  <button type="submit" value="Submit" class="edit-btn">
                    Submit
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
