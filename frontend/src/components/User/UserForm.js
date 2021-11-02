import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";


const UserForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="Username" controlId="formUser">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="your username" />
        </Form.Group>

        <Form.Group className="password" controlId="formUser">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="your password" />
        </Form.Group>

        <Form.Group className="Age" controlId="formUser">
          <Form.Label>Age</Form.Label>
          <Form.Control placeholder="your Age" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submitButton">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;