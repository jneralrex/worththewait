import React, { useEffect, useState } from "react";
import "../assets/styles/HomePage.css";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { TfiCalendar, TfiMusicAlt } from "react-icons/tfi";
import { FaChurch } from "react-icons/fa6";
import FrameOne from "../assets/images/frame2.webp";
import FrameTwo from "../assets/images/frame1.webp";
import Flower from "../assets/images/flower.png";
import Leaf from "../assets/images/leaf.png";
import emailjs from '@emailjs/browser';
import Snackbar from "../components/Snackbar";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    would_i_be_coming: "",
    event_i_Will_attend: [],
    a_plus_one: "",
    how_i_know_the_couple: "",
  });

  const [snackbar, setSnackbar] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        event_i_Will_attend: checked
          ? [...prevData.event_i_Will_attend, value]
          : prevData.event_i_Will_attend.filter((pref) => pref !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(  
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
       process.env.REACT_APP_EMAILJS_USER_ID
      );
      setSnackbar({ message: "RSVP submitted successfully!", type: "success" });
      setFormData({
        name: "",
        email: "",
        would_i_be_coming: "",
        event_i_Will_attend: [],
        a_plus_one: "",
        how_i_know_the_couple: "",
      }); 
    } catch (err) {
      setSnackbar({ message: "Failed to submit RSVP. Try again!", type: "error" });
    }
  };

  const closeSnackbar = () => {
    setSnackbar({ message: "", type: "" });
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="homePage">
      <div className="header">
        <Header />
      </div>
      <div className="banner-img">
        <div className="announcement-holder-outter">
          <div className="announcement-holder">
            <div className="announcement">WE'RE GETTING MARRIED!</div>
            <div className="hash-tag">#ATtheBeginning</div>
          </div>
        </div>
      </div>

      <div className="invite-board">
        <div className="invite-board-inner">
          <img src={FrameOne} alt="" className="frameOne frameleft" />
          <div className="invite-holder">
            <p className="announcement-01">We're Getting Married!</p>
            <p className="invite-note">
              You are cordially invited to the wedding of Adetutu & Ayobami.
              Join us as we celebrate our love and commitment to each other.
              Your presence will make our special day even more memorable.
            </p>
            <p className="hash-tag-one">#AtTheBeginning</p>
            <p className="color-of-the-day">Colors of the day</p>
            <p className="colors">Purpule / Cream</p>
          </div>
          <img src={FrameTwo} alt="" className="frameOne frameTwo" />
          <img src={Flower} alt="" className="frameOne flower" />
          <div className="leaf-holder">
            <img src={Leaf} alt="" className=" leaf" />
          </div>
        </div>
      </div>

      <div className="form-area">
        <div className="question">WILL YOU ATTEND?</div>
        <div className="form-block">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-input-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input-group">
              <div className="radio-area">
                <input
                  type="radio"
                  name="would_i_be_coming"
                  value="Yes I will be there"
                  id=""
                  checked={formData.would_i_be_coming === "Yes I will be there"}
                  onChange={handleChange}
                />
                <label htmlFor="">
                  <p>Yes I will be there</p>
                </label>
              </div>
              <div className="radio-area">
                <input
                  type="radio"
                  name="would_i_be_coming"
                  value="Sorry I cant come"
                  id=""
                  checked={formData.would_i_be_coming === "Sorry I cant come"}
                  onChange={handleChange}
                />
                <label htmlFor="">
                  <p>Sorry I can't come</p>
                </label>
              </div>
            </div>
            <div className="chosen-event">What will you be attending</div>
            <div className="check-area">
              <div className="check-input">
                <input
                  type="checkbox"
                  name="event_i_Will_attend"
                  id=""
                  value="Church"
                  checked={formData.event_i_Will_attend.includes(
                    "Church"
                  )}
                  onChange={handleChange}
                />
                <p> Church Ceremony</p>
              </div>
              <div className="check-input">
                <input
                  type="checkbox"
                  name="event_i_Will_attend"
                  id=""
                  value="Reception"
                  checked={formData.event_i_Will_attend.includes(
                    "Reception"
                  )}
                  onChange={handleChange}
                />
                <p> Reception/Engagement</p>
              </div>
              <div className="check-input">
                <input
                  type="checkbox"
                  name="event_i_Will_attend"
                  id=""
                  value="Afterparty"
                  checked={formData.event_i_Will_attend.includes("Afterparty")}
                  onChange={handleChange}
                />
                <p>The Afterparty</p>
              </div>
            </div>
            <div className="form-input-group">
              <input
                type="text"
                placeholder="Will you be coming with a +1 (Yes or No)"
                name="a_plus_one"
                value={formData.a_plus_one}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input-group">
              <textarea
                name="how_i_know_the_couple"
                id=""
                cols="30"
                rows="10"
                placeholder="How did you know the couple"
                value={formData.how_i_know_the_couple}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input-btn">
              <input type="submit" value="RSVP" />
            </div>
          </form>
        </div>
      </div>
      <div className="schedule">
        <div className="schedule-inner">
          <div className="leaf"></div>
          <p>WHEN & WHERE</p>
          <span>Wedding</span>
          <div className="event-holder">
            <div>
              <div className="icons">
                <TfiCalendar size={50} style={{ color: "#cb8c83" }} />
              </div>
              <div className="event-inner">
                <div className="event">THE CHURCH CEREMONY</div>
                <div className="location">
                  The Redeemed Christian Church of God, Salvation Centre, 10,
                  Oba Akinjobi Way, GRA Ikeja, Lagos State. <br /> Saturday, 12
                  October 2024 @11:30AM
                </div>
              </div>
            </div>
            <div>
              <div className="icons">
                <FaChurch size={50} style={{ color: "#cb8c83" }} />
              </div>
              <div className="event-inner">
                <div className="event">THE RECEPTION/ ENGAGEMENT</div>
                <div className="location">
                  Lagos Country Club. <br /> 2, Joel Ogunnaike Str, Off Moblaji
                  Bank Anthony Way, Ikeja GRA, Lagos State. <br /> Saturday, 12
                  October 2024 @2:00PM
                </div>
              </div>
            </div>
            <div>
              <div className="icons">
                <TfiMusicAlt size={50} style={{ color: "#cb8c83" }} />
              </div>
              <div className="event-inner">
                <div className="event">THE AFTER PARTY</div>
                <div className="location">
                  Lagos Country Club. <br /> 2, Joel Ogunnaike Str, Off Moblaji
                  Bank Anthony Way, Ikeja GRA, Lagos State. <br /> Saturday, 12
                  October 2024 @7:00PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={toggleModal} />}
      {snackbar.message && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={closeSnackbar}
        />
      )}
    </div>
  );
};

export default HomePage;
