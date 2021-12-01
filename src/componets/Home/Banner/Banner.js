import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import './Banner.css';

const Banner = () => {

    return (
        <div>
            <Container className="banner-section">
                <Row>
                    <Col md={6}>
                        <div className="banner-img-container">
                            <div className="banner-img">
                            </div>
                        </div>
                    </Col>
                    <Col className="banner-desc-container" md={6}>
                        <div>
                            <h5>
                                Hello, I’m <span>Atikul Jaman</span>,
                                <br />
                                A
                                Junior Web Developer Based in Bangladesh.
                            </h5>
                            <h1 style={{ color: 'white' }}>I'm a
                                <span className="ms-2" style={{ color: '#4bffa5' }}>
                                    <Typewriter
                                        loop
                                        words={['Frontend Developer.', 'React Developer.', 'JavaScript Developer.']}
                                        cursor
                                        cursorStyle="|"
                                    />
                                </span>
                            </h1>
                            <a href="https://drive.google.com/file/d/1SgqjLDHBzZu5QNWggVFVKNsKMSL8CRbn/view" target="_blank" download>
                                <button className="resume-btn">Download Resume</button>
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className="social-links-container d-flex flex-column align-items-center">
                    <h6>Follow Me</h6>
                    <div>
                        <p><FaLinkedin /></p>
                        <p><FaTwitterSquare /></p>
                        <p><FaFacebookSquare /></p>
                    </div>
                </div>
                <div className="personal-info">
                    <p className="m-0">atikuljamanatikul@gmail.com</p>
                    <p className="m-0">+8801646955311</p>
                </div>
            </Container>
        </div>
    );
};

export default Banner;