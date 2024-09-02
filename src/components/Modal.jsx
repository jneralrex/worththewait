import React, { useEffect, useState } from "react";
import "../assets/styles/Modal.css";
import { TfiClose } from "react-icons/tfi";

const Modal = ({ closeModal }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 2000);

    if (countdown === 0) {
      closeModal();
    }

    return () => clearInterval(timer);
  }, [countdown, closeModal]);

  return (
    <div>
      <div className="modal-board">
        <div className="modal-inner">
          <TfiClose
            onClick={closeModal}
            className="close-btn"
            size={30}
            style={{ position: "fixed", top: "9" }}
          />
          <div className="modal-content">
            <p>Join us on our journey to forever.</p>
            <p>#ATtheBeginning.</p>
            <p className="time">{countdown}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
