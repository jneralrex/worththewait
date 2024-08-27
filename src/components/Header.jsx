import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/Header.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaClockRotateLeft, FaGift, FaImages } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import Giftoption from "../components/Giftoption";


const Header = () => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const targetDate = new Date("October 12, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeRemaining("Now We are Married");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" className="logoImg" />
        </div>
        <div className="nav-items">
          <NavLink to="/gallery">
            <div className="gallery navBtn">
              <FaImages size={20} style={{ color: "lightBlue" }} />
              Gallery
            </div>
          </NavLink>
          <div className="gift navBtn">
            <FaGift style={{ color: "purple" }} /> <Giftoption/>
            </div>
          <div className="timeCounter navBtn">
            <FaClockRotateLeft style={{ color: "red" }} />
            {timeRemaining}
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
