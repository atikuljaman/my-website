import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <hr className="footer-hr" />
                <div className="d-flex justify-content-between align-items-center footer-container pt-4">
                    <h6 className="footer-title">All Right Reserved © 2021 <span>Atikul Jaman</span></h6>
                    <div className="d-flex align-items-center">
                        <h6 style={{ color: '#4bffa5' }} className="me-3 m-0">Follow On</h6>
                        <div className="footer-icon">
                            <p><FaLinkedinIn /></p>
                        </div>
                        <div className="footer-icon">
                            <p><FaTwitter /></p>
                        </div>
                        <div className="footer-icon">
                            <p><FaFacebookF /></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;