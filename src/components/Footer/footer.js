import React from "react";
import './styles/footer.scss';
import logo from './images/venia-logo.png';

const Footer = () => {

    return (
        <footer className="footer">
            <hr className="footer-line"/>
            <section className="footer-container container">
                <div className="division-container">
                    <div className="division division-1">
                        <p className="div-item">Account</p>
                        <p className="div-item">Sign In</p>
                        <p className="div-item">Register</p>
                        <p className="div-item">Order Status</p>
                        <p className="div-item">Returns</p>
                    </div>
                    <div className="division division-2">
                        <p className="div-item">About Us</p>
                        <p className="div-item">Our Story</p>
                        <p className="div-item">Email Signup</p>
                        <p className="div-item">Give Back</p>
                    </div>
                    <div className="division division-3">
                        <p className="div-item">Help</p>
                        <p className="div-item">Live Chat</p>
                        <p className="div-item">Contatc Us</p>
                        <p className="div-item">Order Status</p>
                        <p className="div-item">Returns</p>
                    </div>
                    <div className="division division-4">
                        <p className="div-item">Follow Us!</p>
                        <p className="div-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className="social-media">
                            <p className="instagram social-icon"></p>
                            <p className="facebook social-icon"></p>
                            <p className="twitter social-icon"></p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="copyright-line"/>
            <section className="copyright-container container">
                <div className="footer-logo-div d-none d-lg-block">
                    <img src={logo} className="footer-logo" alt="venia logo"/>
                </div>
                <div className="terms">
                    <a href="/" className="terms-text">Terms of Use</a>
                    <a href="/" className="terms-text">Privacy Policy</a>
                </div>
                <div className="copyright">
                    <p className="copyright-text">© Company Name <span> Address Ave, City Name, State ZIP</span></p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;