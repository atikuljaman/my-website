import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineLaptopChromebook, MdDesignServices } from "react-icons/md";
import { FaCode, FaBriefcase, FaFlag } from "react-icons/fa";
import { CgSupport } from "react-icons/cg";
import './Services.css';

const Services = () => {
    return (
        <div className="service">
            <Container>
                <div className="text-center">
                    <h2 className="title">Services</h2>
                </div>
                <Row className="card-section gy-4">
                    <Col md={4}>
                        <div className="service-card">
                            <div className="text-center">
                                <div className="card-icon-container mx-auto">
                                    <MdOutlineLaptopChromebook className="card-icon" />
                                </div>
                                <h5 className="service-card-title">USER INTERFACE</h5>
                                <p className="service-card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="service-card">
                            <div className="text-center">
                                <div className="card-icon-container mx-auto">
                                    <MdDesignServices className="card-icon" />
                                </div>
                                <h5 className="service-card-title">CREATIVE DESIGN</h5>
                                <p className="service-card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="service-card">
                            <div className="text-center">
                                <div className="card-icon-container mx-auto">
                                    <FaCode className="card-icon" />
                                </div>
                                <h5 className="service-card-title">CLEAN CODE</h5>
                                <p className="service-card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="card-section-2 gy-4">
                    <Col md={4}>
                        <div className="service-card">
                            <div className="text-center">
                                <div className="card-icon-container mx-auto">
                                    <FaBriefcase className="card-icon" />
                                </div>
                                <h5 className="service-card-title">USER EXPERIIENCE</h5>
                                <p className="service-card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="service-card">
                            <div className="text-center">
                                <div className="card-icon-container mx-auto">
                                    <FaFlag className="card-icon" />
                                </div>
                                <h5 className="service-card-title">BRANDING</h5>
                                <p className="service-card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="service-card">
                            <div className="text-center">
                                <div className="card-icon-container mx-auto">
                                    <CgSupport className="card-icon" />
                                </div>
                                <h5 className="service-card-title">FAST SUPPORT</h5>
                                <p className="service-card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;