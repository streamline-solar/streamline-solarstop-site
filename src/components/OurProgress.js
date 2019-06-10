import React, { Component } from 'react';
import "./../styles/index.scss";
import "./../styles/progress.scss";
import Logo from "./../images/streamline-solar-logo.png";
import UniversitySupport from "./../images/progress-support.jpeg";
import StudentInvolvement from "./../images/progress-student.jpeg";

class Progress extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <div className="progress-top-page-wrapper">
          <div className="progress-top-page-background">
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
                      <a href="/" className="header-nav-item">Our Partners</a>
                      <a href="/" className="header-nav-item">Photos</a>
                      <a href="/" className="header-nav-item">Contact Us</a>
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
                      <strong>Our Progress</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="main-body-wrapper">
          <main className="body-content">
            <section className="streamline-main-page">
              <div className="index-page-wrapper">
                <div className="inner-index-wrapper">
                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>

                  <div className="inner-text-block">
                    <div className="top-inner-text-block JustSomePadding">
                      <h2 className="LargeText">Stay up to date on the advancements of the Streamline Solar Stops project!</h2>
                    </div>
                    <div className="bottom-inner-text-block JustSomePadding">
                      <p className="SmallText">Sign up for our newsletter to get updates sent directly to you! You can find the form at the end of this page.</p>
                    </div>
                  </div>

                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>

                  <div className="body-element-wrapper InlineBlock">
                    <div className="body-element-content FlexColCenter">
                      <div className="left-text-wrapper">
                        <div className="left-text-content">
                          <div className="left-text-title">
                            <h1>University Support</h1>
                          </div>
                          <div className="left-text-body">
                            <p className="SmallText">
                              We have received support and are seeking counsel from a number of department heads and faculty members around campus. Montana State University is aware and excited about the Streamline Solar Stops project!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="image-wrapper">
                        <div className="image-image">
                          <img className="progress-body-image" src={UniversitySupport} alt="just an image" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="body-element-wrapper InlineBlock">
                    <div className="body-element-content FlexColCenter">
                      <div className="left-text-wrapper">
                        <div className="left-text-content">
                          <div className="left-text-title">
                            <h1>Student Involvement</h1>
                          </div>
                          <div className="left-text-body">
                            <p className="SmallText">
                             Thanks to extensive student outreach and cooperation between many of the departments on cmapus, we have been able to actively include several different Montana State Unviersity disciplines. This adds invaluable diversity which will increase the quality and outcome of the Streamline Solar Stops proejct.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="image-wrapper">
                        <div className="image-image">
                          <img className="progress-body-image" src={StudentInvolvement} alt="just an image" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          
            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

          </main>
        </div>

      <footer className="Footer">
        <div className="inner-footer FlexCenter">
          <div className="promotional-content-wrapper">
            <div className="promotional-content">
            
            </div>
          </div>
          <div className="my-shameless-promo-wrapper">
            <div className="my-shameless-promo">
              <h6>Created By: Jesse Dahl</h6>
            </div>
          </div>
        </div>
      </footer>

      </div>
    );
  }
}

export default Progress;