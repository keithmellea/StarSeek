import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/keithmellea" className="github_logo">
            <img
              src={
                "https://avatars.githubusercontent.com/u/74005185?s=400&u=ca39b37c99438170af61cc9da7401aed08f3128d&v=4"
              }
              alt="logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/keith-mellea-8b9b13a6/"
            className="github_logo"
          >
            <img
              src={
                "https://avatars.githubusercontent.com/u/74005185?s=400&u=ca39b37c99438170af61cc9da7401aed08f3128d&v=4"
              }
              alt="logo"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
