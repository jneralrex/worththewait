import React from "react";
import "../assets/styles/Footer.css";
import { FaTag } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import Logo from "../assets/images/Screenshot_2024-08-26_at_00.30.46-removebg-preview.png";

const Footer = () => {
  return (
    <div className="main">
      <div className="footer-outter">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <img src={Logo} alt="" className="footerLogoImg" />
            </div>
            <div className="footer-qoute">
              "Love is composed of a single soul inhabiting two bodies"
            </div>
          </div>
          <div>
            <div className="divider">COLORS OF THE DAY</div>
            <div className="color-and-tag">
              <div>
                <FaTag style={{ color: "purple" }} />
              </div>
              <div className="color-name">Purple</div>
            </div>
            <div className="color-and-tag">
              <div>
                <FaTag style={{ color: "burlywood" }} />
              </div>
              <div className="color-name">Cream</div>
            </div>
          </div>
          <div>
            <div className="divider">
              <p>CONTACT</p>
            </div>
            <div className="contact-info">
              <div>
                <FiMessageSquare style={{ color: "gold" }} />
              </div>
              <div className="contact">theadvancedprojectacademy@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
