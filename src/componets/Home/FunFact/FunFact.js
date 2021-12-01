import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FunFact.css';

const FunFact = () => {
    return (
        <div className="funfact-section">
            <Container>
                <div className="text-center">
                    <h2 className="title">Fun Fact</h2>
                </div>
                <Row className="funfact-container gy-4">
                    <Col md={3}>
                        <div className="funfact-div">
                            <h1>4</h1>
                            <h6>PROJECTS DONE</h6>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="funfact-div">
                            <h1>2</h1>
                            <h6>HAPPY CLIENTS</h6>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="funfact-div">
                            <h1>522</h1>
                            <h6>HOURS OF WORK</h6>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="funfact-div">
                            <h1>1</h1>
                            <h6>AWARDS RECEIVED</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FunFact;