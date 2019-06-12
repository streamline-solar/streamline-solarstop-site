import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import Logo from "./../images/streamline-solar-logo.png";
import "./../styles/index.scss";
import "./../styles/contact.scss";

class Contact extends Component {

  render() {
    return(
      <div className="main-page-wrapper">

        <Fade>
        <div className="contact-top-page-wrapper">
          <div className="contact-top-page-background">
            <header className="header-wrapper">
              <div className="header-content FlexColCenter">
                <div className="logo-wrapper">
                  <a href="/" className="header-logo">
                    <img id="actual-logo-image" src={Logo} alt="Streamline Logo" />
                  </a>
                </div>
                <div className="navigation-wrapper">
                  <nav className="header-nav">
                    <div className="header-nav-content">
                      <a href="/" className="header-nav-item">Home</a>
                      <a href="/the-project" className="header-nav-item">The Project</a>
                      <a href="/our-progress" className="header-nav-item">Our Progress</a>
                      <a href="/our-partners" className="header-nav-item">Our Partners</a>
                      <a href="/photos" className="header-nav-item">Photos</a>
                      <a href="/contact-us" className="header-nav-item">Contact Us</a>
                      <a href="/" className="header-nav-item">Support Us</a>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
            <section id="streamline-vision">
              <div className="vision-wrapper FlexRowCenter">
                <div className="vision-content">
                  <div className="vision-content-text">
                    <h2 className="LargerText">
                      <strong>Contact Us</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        </Fade>

        <div className="main-body-wrapper">
          <main className="body-content">
            <div className="contact-info-wrapper">
              <div className="contact-info-content">
                <div className="contact-info-title-wrapper">
                  <div className="contact-info-title">
                    <h3>Streamline Solar Stops</h3>
                  </div>
                  <div className="contact-info-subtitle">
                    <h4>AlChE at Montana State University</h4>
                  </div>
                </div>
                <div className="contact-actual-info-wrapper">
                  <div className="contact-info-email">
                    <h4>Email: </h4>
                    <a href="mailto: streamline.solar.stops@gmail.com">streamline.solar.stops@gmail.com</a>
                  </div>
                  <div className="contact-info-instagram">
                    <h4>Instagram: </h4>
                    <a href="https://www.instagram.com/streamlinesolarstops/?hl=en" target="_blank">Streamline Solar Stops</a>
                  </div>
                  <div className="contact-info-other-information">
                    <p>Please email with questions, comments, or concerns and we will get back to you as soon as possible</p>
                    <p>For specific or urgent inquiries about events, participants, or donations, please contact the appropriate team members in addition to the general project email</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

      </div>
    );
  }
}

export default Contact;