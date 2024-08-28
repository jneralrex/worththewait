import { useEffect, useState } from 'react';
import '../assets/styles/Snackbar.css'
import { MdOutlineClear } from "react-icons/md";

const Snackbar = ({ message, type, onClose }) => {
  const [sanckbarcountdown, setSnackBarCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSnackBarCountdown(prev => prev - 1);
    }, 2000);

    if (sanckbarcountdown === 0) {
      onClose();
    }

    return () => clearInterval(timer);
  }, [sanckbarcountdown, onClose]);
    return (
      <div className={`snackbar ${type}`}>
        {message}
        <MdOutlineClear size={40} onClick={onClose} style={{color:'black'}}/>
      </div>
    );
  };
  export default Snackbar;
