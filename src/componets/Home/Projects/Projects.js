import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaPodcast, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./pj.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="project-section">
            <Container>
                <div className="text-center">
                    <h2 className="title">My Portfolio</h2>
                </div>
                <Row className="project-container gy-4">
                    {
                        projects.map(project => (
                            <Col className="mx-auto" md={4}>
                                <div className="project-card">
                                    <img className="img-fluid project-img" src={project?.img1} alt="Project_Image" />
                                    <div className="img-container h-100">
                                        <div>
                                            <h4 className="project-title">{project?.name}</h4>
                                            <div className="d-flex">
                                                <button className="project-btn">Details <FaArrowRight className="ms-2" /></button>
                                                <a className="text-decoration-none" href={project?.liveLink} target="_blank">
                                                    <button className="project-btn">Live Link <FaPodcast className="ms-2" /></button>
                                                </a>
                                                <a className="text-decoration-none" href={project?.code} target="_blank">
                                                    <button className="project-btn">Github <FaGithub className="ms-2" /></button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;



// https://i.ibb.co/XtGBgDh/screely-1638288701157.png
// https://i.ibb.co/L0XKn8y/screely-1638288683855.png
// https://i.ibb.co/XFt8B74/screely-1638288667408.png
// https://i.ibb.co/P13BRzk/screely-1638288613679.png
// https://i.ibb.co/dg1qGKm/screely-1638288586830.png
// https://i.ibb.co/M5h0c95/screely-1638288567082.png
// https://i.ibb.co/z5yyPFF/screely-1638288457021.png
// https://i.ibb.co/Y2ZXkWX/screely-1638288416400.png
// https://i.ibb.co/F3BP3Ys/pj.png