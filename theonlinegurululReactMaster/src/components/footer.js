import React from "react";
import '../css/footerStyle.css';
// import $ from 'jquery';


const Footer = () => {
    
    // var dateYear = {currentTime: (new Date()).toLocaleString()}
    // this.setState({dateYear:dateYear });


    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="container">
                        <div className="footer-section">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer-heading">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="footer-about-us-para">
                                        <p style={{lineHeight: '25px'}}>
                                            <span style={{color: '#007aff'}}>theOnline</span><span style={{color: '#f47629'}}>Gurukul </span>
                                             is a online tutoring platform from “Decon Edu Pvt. Ltd.” a subsidiary of Decon Telecom
                                            Solutions Pvt Ltd. that provides one stop solution for online education. Decon is a
                                            multinational company, having officies in India, Indonesia, Bangladesh, Srilanka, kenya,
                                            Tanzania & Vietnam.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer-heading">
                                        <h3>Contact Us (India)</h3>
                                    </div>
                                    <div className="footer-contact-india">
                                        <ul>

                                            <li key="1"><a href="mailto:info@theonlinegurukul.com" style={{fontSize:'16px'}}><i
                                                        className="fa fa-envelope"></i><span>Email :</span>
                                                    info@theonlinegurukul.com</a></li>
                                            <li key="2"><a href="tel:+919899416555"><i className="fa fa-phone"></i> <span>Phone : </span>
                                                    +91-9899416555 , 9899406555</a></li>
                                            <li key="3">
                                                <a target="blank" rel="noopener noreferrer"
                                                    href="https://maps.google.com/?q=116 Phase IV, Udyog Vihar, Sector 18 Gurugram, Haryana 122008"><i
                                                        className="fa fa-map-o"></i><span>Address :</span> plot no : 116, First
                                                    Floor,Near Atlas Chowk,
                                                    Udyog Vihar, Phase – 4, 122015, Gurugram, Haryana, India</a>
                                            </li>
                                            <li key="4"> <a href="/" target="blank" rel="noopener noreferrer"><i className="fa fa-building"></i> <span>Decon Edu Pvt
                                                        Ltd.</span> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer-heading">
                                        <h3>Contact Us (Indonesia)</h3>
                                    </div>
                                    <div className="footer-contact-indonesia">
                                        <ul>
                                            <li key="5"> <a href="mailto:info@theonlinegurukul.com" style={{fontSize:'16px'}}><i
                                                        className="fa fa-envelope"></i><span>Email :</span>
                                                    info@theonlinegurukul.com</a>
                                            </li>
                                            <li key="6"> <a href="tel:+62-81387360795"><i className="fa fa-phone"></i> <span>Phone : </span>
                                                    +62-81387360795</a>
                                            </li>
                                            <li key="7"> <a target="blank" rel="noopener noreferrer"
                                                    href="https://maps.google.com/?q=RT.8/RW.5, Manggarai, Tebet, South Jakarta City, Jakarta, Indonesia"><i
                                                        className="fa fa-map-o"></i><span>Address :</span> JL. Dr. Sahario No. 15,
                                                    RT 004/RW 05 Kelurahan Manggarai, Kacamatan Tebet, Jakarta Selatan 12850</a>
                                            </li>
                                            <li key="8"> <a href="/" target="blank"><i className="fa fa-building"></i> <span>Decon Edu Pvt
                                                        Ltd.</span> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 cd-ft">
                                <p className="copyright-para">&copy; Copyright date theOnlineGurukul | Powered by Decon
                                    Edu Pvt. Ltd.</p>
                            </div>
                            <div className="col-lg-7 col-md-12 cd-ft">
                                <div className="socil-icon-footer">
                                    <ul>
                                        <li key="11" className="social-facebook-btn"><a target="_blank" rel="noopener noreferrer" 
                                                href="https://www.facebook.com/theOnlineGurukul"><i
                                                    className="fa fa-facebook"></i></a>
                                        </li>
                                        <li key="12" className="social-twitter-btn"><a target="_blank" rel="noopener noreferrer"
                                                href="https://twitter.com/theonlineguruk1"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li key="13" className="social-instagram-btn"><a target="_blank" rel="noopener noreferrer"
                                                href="https://www.instagram.com/the_online_gurukul/"><i
                                                    className="fa fa-instagram"></i></a>
                                        </li>
                                        <li key="14" className="social-linkedin-btn"><a target="_blank" rel="noopener noreferrer"
                                                href="https://www.linkedin.com/company/77644312"><i
                                                    className="fa fa-linkedin-square"></i></a>
                                        </li>
                                        <li key="15" className="social-youtube-btn"><a
                                                href="https://www.youtube.com/channel/UClaMTpEL5It4Jo-gBlihdTA"><i
                                                    className="fa fa-youtube"></i></a>
                                        </li>
                                        <li key="16" className="bdh-dgs"><a href="https://www.deconhost.com" target="_blank" rel="noopener noreferrer"
                                                className="dechost_link">Buy Domain & Hosting </a>| &nbsp;
                                            <a href="https://deconglobalsolutions.com/" target="_blank" rel="noopener noreferrer" className="dechost_link">
                                                DGS Services</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}
 

export default Footer;
