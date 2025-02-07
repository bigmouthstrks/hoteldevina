import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
    <footer className="footer-section">
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-3 mb-5">
                    <ul className="list-unstyled link">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Rooms</a></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-5">
                    <ul className="list-unstyled link">
                        <li><a href="#">The Rooms & Suites</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Restaurant</a></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-5 pe-md-5 contact-info">
                    <p>
                        <span className="d-block"><i className="fa-solid fa-location-dot me-2 text-primary"></i>Address:</span>
                        <span>198 West 21st Street, Suite 721 New York, NY 10016</span>
                    </p>
                    <p>
                        <span className="d-block"><i className="fa-solid fa-phone me-2 text-primary"></i>Phone:</span>
                        <span>(+1) 435 3533</span>
                    </p>
                    <p>
                        <span className="d-block"><i className="fa-solid fa-envelope me-2 text-primary"></i>Email:</span>
                        <span>info@domain.com</span>
                    </p>
                </div>
                <div className="col-md-3 mb-5">
                    <p>Sign up for our newsletter</p>
                    <form action="#" className="footer-newsletter">
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Email..." />
                            <button type="submit" className="btn btn-primary">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-6 text-left">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} All rights reserved |
                        This template is made with <i className="fa-solid fa-heart text-danger"></i> by
                        <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
                    </p>
                </div>
                <div className="col-md-6 text-end social">
                    <a href="#"><i className="fa-brands fa-tripadvisor"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-vimeo"></i></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
