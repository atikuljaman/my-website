import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myImg from '../../../images/banner-img-2.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <Container>
                <Row className="gy-5">
                    <Col md={6}>
                        <div className="about-img-container">
                            <img className="img-fluid  about-img" src={myImg} alt="Atikul Jaman's Image" />
                            <div className="about-img-border-style">

                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="about-desc">
                            <h3>About Me</h3>
                            <h5 className="mt-5">
                                Hi, I'm Atikul Jaman a junior web developer based in Bangladesh. I have well knowledge of Frontend web development.
                            </h5>
                            <p className="mt-4">I'm a 22-year-old guy. A self-motivated programmer. I have Full of interest in programming. I'm always excited to learn and explore new technology. I do 6 to 8 hours of coding daily. My dream is to become a full-stack web developer full of skills. Already I have skills in "Frontend Development" and also have basic knowledge of backend development. Still, I'm developing my skills daily and enjoying my life with programming.</p>
                            <div className="about-desc-bottom-container">
                                <div className="d-flex justify-content-around pt-5">
                                    <div>
                                        <div className="about-desc-bottom">
                                            <h6>Name: <span>Atikul Jaman</span></h6>
                                        </div>
                                        <div className="about-desc-bottom">
                                            <h6>Phone: <span>+8801646955311</span></h6>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="about-desc-bottom">
                                            <h6>Age: <span>22</span></h6>
                                        </div>
                                        <div className="about-desc-bottom">
                                            <h6>Address: <span>Dhaka, Bangladesh</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;