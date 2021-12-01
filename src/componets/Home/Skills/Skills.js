import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

const Skills = () => {
    const html = 89;
    const bt = 80;
    const js = 75;
    const react = 79;
    const node = 49;
    const express = 30;
    const mongodb = 60;
    const communication = 85;
    const Teamwork = 80;
    const SelfMotivation = 75;
    const honest = 100;


    return (
        <div className="skills-section">
            <Container>
                <div className="text-center">
                    <h2 className="title">My Skills</h2>
                </div>
                <Row>
                    <Col>
                        <div className="skills-section-container">
                            <h5 style={{ color: '#e2e2e2', marginLeft: '18px', marginBottom: '25px' }}>Professional Skills
                            </h5>
                            <div className="d-flex progressbar">
                                <div className="progressbar-container d-flex">
                                    <h5>HTML + CSS</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={html} text={`${html}%`} />
                                        {/* <h5 className="m-0 text-center">HTML</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>BOOTSTRAP</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={bt} text={`${bt}%`} />
                                        {/* <h5 className="m-0 text-center">Bootstrap</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>JAVASCRIPT</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={js} text={`${js}%`} />
                                        {/* <h5 className="m-0 text-center">JavaScript</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>REACT JS</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={react} text={`${react}%`} />
                                        {/* <h5 className="m-0 text-center">React Js</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>NODE JS</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={node} text={`${node}%`} />
                                        {/* <h5 className="m-0 text-center">Node Js</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>EXPRESS JS</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={express} text={`${express}%`} />
                                        {/* <h5 className="m-0 text-center">Express Js</h5> */}
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex">
                                <div className="progressbar-container d-flex">
                                    <h5>MONGODB</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={mongodb} text={`${mongodb}%`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="skills-section-container">
                            <h5 style={{ color: '#e2e2e2', marginLeft: '18px', marginBottom: '25px' }}>Personal Skills
                            </h5>
                            <div className="d-flex progressbar">
                                <div className="progressbar-container d-flex">
                                    <h5>COMMUNICATION</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={communication} text={`${communication}%`} />
                                        {/* <h5 className="m-0 text-center">HTML</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>TEAMWORK</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={Teamwork} text={`${Teamwork}%`} />
                                        {/* <h5 className="m-0 text-center">Bootstrap</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>MOTIVATED</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={SelfMotivation} text={`${SelfMotivation}%`} />
                                        {/* <h5 className="m-0 text-center">JavaScript</h5> */}
                                    </div>
                                </div>
                                <div className="progressbar-container d-flex">
                                    <h5>HONEST</h5>
                                    <div className="progressbar-sub-container">
                                        <CircularProgressbar className="progressbar" styles={buildStyles({ pathColor: '#4bffa5', trailColor: 'white', textColor: 'white' })} background={false} value={honest} text={`${honest}%`} />
                                        {/* <h5 className="m-0 text-center">React Js</h5> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Skills;