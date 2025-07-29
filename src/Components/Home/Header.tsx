import React from "react";
import "../../App.css";

const Header = () => {

    return(
        <nav className="navbar font-face-gm  navbar-expand-lg " id="home">
    
        {/* <header> */}
        <div className="container ">
        <div className="d-flex flex-column align-items-center">
          {/* <img src={logo_myepulse} className="headerLogo" alt="" /> */}
          <div className="text text-white fs-8 font-face-MuseoSans900">
            Hello Stuti
            {/* <br /> made simple */}
          </div>
        </div>
        </div>
        <div className=" header-links" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase flex-row">
            <li className="mx-3">
              <a
                className="nav-link text-light font-face-MuseoSans300"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="mx-3">
              <a
                className="nav-link text-light font-face-MuseoSans300"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="mx-3">
              <a
                className="nav-link text-light font-face-MuseoSans300"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="mx-3">
              <a
                className="nav-link text-light font-face-MuseoSans300 privacy-support"
                href="#privacy"
              >
                Privacy & Support
              </a>
            </li>
            <li className="mx-3">
              <a
                className="nav-link text-light font-face-MuseoSans300"
                href="#faq"
              >
                FAQ
              </a>
            </li>
            <li className="mx-3">
              <a
                className="nav-link contact font-face-MuseoSans300"
                href="#contact"
              >
                Contact us
              </a>
            </li>
            </ul>
      {/* <nav>
        <button className="nav-link">ABOUT</button>
        <a href="/">TREATMENTS</a>
        <a href="/">PACKAGES</a>
        <a href="/">CONTACT</a>
        <a href="/">Log In</a>
      </nav> */}
      </div>
    {/* </header> */}
{/* 
    <main>
      <section className="our-story">
        <div className="image-container">
          <img src="/images/your-image.jpg" alt="Our Story" />
          <div className="diagonal-lines"></div>
        </div>
        <div className="story-content">
          <h2>OUR STORY</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
          </p>
        </div>
      </section>
    </main> */}
        </nav>
    )

}

export default Header;