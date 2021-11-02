import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



const User = () => {


        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                
                
                    <div>
                <h3>Username</h3>
                <h3>password</h3>
                <h3>Age</h3>
                
                
                    </div>
                <div>
                    <Form>
                                <Form.Group className="Username" controlId="formUser">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control placeholder="your username"/>
                                </Form.Group>

                                <Form.Group className="password" controlId="formUser">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control placeholder="your password"/>
                                </Form.Group>

                                <Form.Group className="Age" controlId="formUser">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control placeholder="your Age"/>
                                </Form.Group>


                    <Button variant="primary" type="submit" className="submitButton">
                Submit
                </Button>
                    </Form>
                </div>
                
                <button>edit</button>
            </div>
        )
}

export default User;