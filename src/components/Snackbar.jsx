import '../assets/styles/Snackbar.css'
import { MdOutlineClear } from "react-icons/md";

const Snackbar = ({ message, type, onClose }) => {
    return (
      <div className={`snackbar ${type}`}>
        {message}
        <button onClick={onClose}><MdOutlineClear/></button>
      </div>
    );
  };
  export default Snackbar;
