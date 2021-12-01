import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdAlternateEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fj7xj7h', 'template_xal2dwi', e.target, 'user_00svf8V4Ck6BTOrsMzZ47')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => setResult(true));
    };
    return (
        <div>
            <Container className="contact-section">
                <div className="text-center">
                    <h2 className="title">Contact Me</h2>
                </div>
                <Row className="contact-container gy-4">
                    <Col md={4}>
                        <div className="contact-div">
                            <div className="text-center">
                                <div className="contact-icon-container mx-auto">
                                    <ImLocation className="contact-icon" />
                                </div>
                                <h5 className="service-card-title">LOCATION</h5>
                                <p className="service-card-desc">DHAKA, BANGLADESH</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="contact-div">
                            <div className="text-center">
                                <div className="contact-icon-container mx-auto">
                                    <MdAlternateEmail className="contact-icon" />
                                </div>
                                <h5 className="service-card-title">EMAIL</h5>
                                <p className="service-card-desc">atikuljamanatikul@gmail.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="contact-div">
                            <div className="text-center">
                                <div className="contact-icon-container mx-auto">
                                    <BsFillTelephoneFill className="contact-icon" />
                                </div>
                                <h5 className="service-card-title">PHONE</h5>
                                <p className="service-card-desc">+8801646-955311</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <form className="form" onSubmit={sendEmail}>
                                <div className="d-flex">
                                    <input className="w-100" type="text" name="name" required placeholder="Name *" />
                                    <input className="w-100 input-email" name="email" type="email" required placeholder="Email *" />
                                </div>
                                <input className="w-100" type="text" required name="subject" placeholder="Subject" />
                                <textarea className="w-100" cols="50" rows="5" name="message" placeholder="your message" />
                                <button>SEND MESSAGE</button>
                            </form>
                            {result ? <div className="text-white">Successfully message sent</div> : null}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;