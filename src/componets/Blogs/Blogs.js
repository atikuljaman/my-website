import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpg';
import blog4 from '../../images/blog-4.jpg';
import { BsCalendar3 } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { AiOutlineLine } from "react-icons/ai";
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blog-section">
            <Container>
                <div className="text-center">
                    <h2 className="title">Blogs</h2>
                </div>
                <Row className="blog-container gy-4">
                    <Col md={3}>
                        <Card className="blog-card">
                            <Card.Img className="blog-img" variant="top" src={blog1} />
                            <Card.Body>
                                <Card.Title className="blog-title">WAYS TO MOTIVATE YOURSELF
                                    <div>
                                        <p><BsCalendar3 /> January 9, 2021</p>
                                        <p className="ms-3"><BiMessageSquareDetail /> 5 Comments</p>
                                    </div>
                                    <hr className="blog-hr" />
                                </Card.Title>
                                <Card.Text className="blog-desc">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <button className="blog-btn"><span><AiOutlineLine className="blog-icon" /></span>READ MORE <IoMdArrowRoundForward /></button>
                            </Card.Body>
                            <div className="blog-ctg">
                                <h6>LIFESTYLE</h6>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="blog-card">
                            <Card.Img className="blog-img" variant="top" src={blog3} />
                            <Card.Body>
                                <Card.Title className="blog-title">CREATE A FULL STACK WEBSITE
                                    <div>
                                        <p><BsCalendar3 /> January 9, 2021</p>
                                        <p className="ms-3"><BiMessageSquareDetail /> 5 Comments</p>
                                    </div>
                                    <hr className="blog-hr" />
                                </Card.Title>
                                <Card.Text className="blog-desc">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <button className="blog-btn"><span><AiOutlineLine className="blog-icon" /></span>READ MORE <IoMdArrowRoundForward /></button>
                            </Card.Body>
                            <div className="blog-ctg">
                                <h6>WEBSITE</h6>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="blog-card">
                            <Card.Img className="blog-img" variant="top" src={blog2} />
                            <Card.Body>
                                <Card.Title className="blog-title">TOP GRAPHIC DESIGN TOPICS
                                    <div>
                                        <p><BsCalendar3 /> January 9, 2021</p>
                                        <p className="ms-3"><BiMessageSquareDetail /> 5 Comments</p>
                                    </div>
                                    <hr className="blog-hr" />
                                </Card.Title>
                                <Card.Text className="blog-desc">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <button className="blog-btn"><span><AiOutlineLine className="blog-icon" /></span>READ MORE <IoMdArrowRoundForward /></button>
                            </Card.Body>
                            <div className="blog-ctg">
                                <h6>DESIGN</h6>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="blog-card">
                            <Card.Img className="blog-img" variant="top" src={blog4} />
                            <Card.Body>
                                <Card.Title className="blog-title">TOP 10 TOPICS OF FRONTEND DEVELOPMENT
                                    <div>
                                        <p><BsCalendar3 /> January 9, 2021</p>
                                        <p className="ms-3"><BiMessageSquareDetail /> 5 Comments</p>
                                    </div>
                                    <hr className="blog-hr" />
                                </Card.Title>
                                <Card.Text className="blog-desc">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <button className="blog-btn"><span><AiOutlineLine className="blog-icon" /></span>READ MORE <IoMdArrowRoundForward /></button>
                            </Card.Body>
                            <div className="blog-ctg">
                                <h6>WEBSITE</h6>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;