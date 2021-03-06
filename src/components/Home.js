import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import "./../styles/index.scss";
import "./../styles/mobile.scss";
import Logo from "./../images/streamline-solar-logo.png";
import ProjectImage from "./../images/home-project-image-effects-min.jpg";
import ProgressImage from "./../images/home-progress-image-effects-min.jpg";
import PartnerImage from "./../images/home-partners-image-effects-min.jpg";
import ContactImage from "./../images/home-contact-us-image-effects-min.jpg";
import PhotosImage from "./../images/home-images-image-effects-min.jpg";
import AlChEBanner from "./../images/AIChEBanner.png";
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import Footer from "./Footer";

class Home extends Component {


  handleClick() {
    this.setState({
        open: !this.state.open
    });
  }

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return({sideDrawerOpen: !prevState.sideDrawerOpen})
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  constructor(props) {
    super(props);

    this.state = {
      HeaderTitle: props.title,
      BackgroundImg: props.background,
    };

  }

  render() {
    return (
      <div className="main-page-wrapper">
        <Fade duration='2000'>
        <div className="home-top-page-wrapper">
          <div className="home-top-page-background">
            <header className="header-wrapper">
              <div className="header-content FlexColCenter">
                <div className="logo-wrapper">
                  <a href="/" className="header-logo">
                    <img id="actual-logo-image" src={Logo} alt="Streamline Logo" />
                  </a>
                </div>
                <div className="navigation-mobile-wrapper">

                </div>
                <div className="navigation-wrapper">
                  <div className="mobile-hamburger-menu">
                    <DrawerToggleButton click={this.drawerToggleClickHandler}/>
                  </div>
                  <SideDrawer show={this.state.sideDrawerOpen}/>
                  <nav className="header-nav">
                    <div className="header-nav-content">
                      <Link to="/" className="header-nav-item">Home</Link>
                      <Link to="/the-project" className="header-nav-item">The Project</Link>
                      <Link to="/our-progress" className="header-nav-item">Our Progress</Link>
                      <Link to="/our-partners" className="header-nav-item">Our Partners</Link>
                      <Link to="/photos" className="header-nav-item">Photos</Link>
                      <Link to="/contact-us" className="header-nav-item">Contact Us</Link>
                      <Link to="/support-us" className="header-nav-item">Support Us</Link>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
            <section id="streamline-vision">
              <div className="vision-wrapper FlexRowCenter">
                <div className="vision-content">
                  <div className="vision-content-text">
                    <h1 className="MidText"> 
                      <em>Streamline Solar Stops</em>
                    </h1>
                    <h2 className="LargerText">
                      <strong>Sustainable Bus Stops For a Renewable World</strong>
                    </h2>
                  </div>
                  <div className="button-wrapper FlexRowCenter">
                    <div className="button-content">
                      <Link to="/support-us" className="Button FlexCenter">Support Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        </Fade>

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
                      <h1 className="LargeText">MSU Students Are Giving Back to Their Local Community</h1>
                    </div>
                    <div className="bottom-inner-text-block JustSomePadding">
                      <p className="SmallText">
                        The Streamline Solar Stops team is using the American Institute of Chemical Engineering chapter at Montana State University as a platform to apply student interests to the needs of our local community. Our goal is to design and implement sustainable, solar powered bus stops, which will be capable of providing light and heat during the harsh Montana winters.
                      </p>
                    </div>
                  </div>
                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>
                <div className="home-link-content-wrapper">
                  <div className="home-link-content">

                    <div className="single-image-wrapper AlignLeft JustSomePadding">
                      <div className="image-content-wrapper FlexCenter">
                        <img className="QuickLinkImage" id="project-link-image" src={ProjectImage} alt="pic of a classroom"></img>
                        <div className="image-text-block">
                          <div className="image-text-title">
                            <h2 className="ImageTitle">The Project</h2>
                          </div>
                          <div className="image-text-description">
                            <p className="ImageBody">Wondering what we're all about? Find out more about our story, goals, and student involvement.</p>
                          </div>
                          <div className="button-wrapper FlexRowCenter">
                            <div className="button-content">
                              <a href="/the-project" className="Button ImageButton FlexCenter">Learn More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="single-image-wrapper AlignRight JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={ProgressImage} alt="bus"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Our Progress</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Curious about where we are in the process and what we are working on now? Stay up to date!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/our-progress" className="Button ImageButton FlexCenter">Explore</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignLeft JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={PartnerImage} alt="random kids in the great outdoors"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Our Partners</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Excited about the project? See who has contributed to our efforts and consider joining them!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/our-partners" className="Button ImageButton FlexCenter">Find Out How</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignRight JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={PhotosImage} alt="Streamline Solar Stops at Sustainabilibash"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Photos</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Want to see our team in action? Check out our pictures!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/photos" className="Button ImageButton FlexCenter">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignLeft JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={ContactImage} alt="more random kids"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Contact Us</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Have questions, comments, or concerns? Want to know more ways that you can get involved? Contact us!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/contact-us" className="Button ImageButton FlexCenter">Contact</a>
                          </div>
                        </div>
                      </div>
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

            <section className="ALCHE-section">
              <div className="alche-content-wrapper">
                <div className="inner-alche-content">
                  <div className="alche-logo-wrapper JustSomePadding FlexCenter">
                    <div className="alche-banner">
                      <img className="alche-logo-banner" src={AlChEBanner} alt="AlChE Banner"></img>
                    </div>
                  </div>
                  <div className="alche-text-wrapper JustSomePadding">
                    <div className="alche-text-content AlignTextCenter">
                      <p className="alche-text">
                      “The American Institute of Chemical Engineers is a world wide professional organization that facilitates the sharing of research, student competitions, varied conferences, global networking, and other learning opportunities.” 
                      </p>
                      <p className="alche-text">
                        -AIChE
                      </p>
                      <p className="alche-text">
                      Our chapter, at Montana State University, focuses on working with our community to spread information about STEM professions and the possibilities of chemical engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seperator-block">
                <hr className="seperator"></hr>
              </div>
            </section>

          </main>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Home;