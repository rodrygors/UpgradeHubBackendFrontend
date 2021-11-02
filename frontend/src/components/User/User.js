import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";


export class MyProfileEmployees extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "diego",
            password: "********",
            age: Date.now
        };
    }

    render() {
        return (
            <div>

                <Row>
                    <Col>
                <h1>Username</h1>
                <h3>password</h3>
                <p>Age</p>
                <button>edit</button>
                
                </Col>
                <Col>
                <button>edit</button>
                </Col>
                </Row>

            </div>
        )
    }
}
