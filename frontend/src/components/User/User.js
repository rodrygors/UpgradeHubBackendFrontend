import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import UserForm from "./UserForm";



const User = () => {
  const [edit, setEdit] = useState(false);

        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                    <h3>Username</h3>
                    <h3>password</h3>
                    <h3>Age</h3>

                </div>
                <div>   
                 {edit ? (
                    <UserForm />
                    ) : (
                    null )}
                </div>
                <div>
                    {edit ? (
                        <button onClick={() => setEdit(false)}>edit</button>
                        ) : (
                            <button onClick={() => setEdit(true)}>edit</button> )}
                            </div>
            </div>
        )
}

export default User;