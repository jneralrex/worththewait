import React from "react";
import { FaGift } from "react-icons/fa";
import "../assets/styles/Header.css";

const Giftoption = () => {
  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;

    if (selectedOption === "cash") {
      window.open("https://mywishlistng.com/event/wedding/645519930821076401", "_blank");
    } else if (selectedOption === "buyGift") {
      window.open("https://www.wishlist.com/user/worththewait", "_blank");
    }
  };

  return (
    <select
      name="giftOptions"
      id="giftOptions"
      className=""
      onChange={handleSelectChange}
      defaultValue=""
    >
      <option value="" className="defaultOPt" disabled>
        Gift for us?
      </option>
      <option value="cash">Cash</option>
      <option value="buyGift">Buy a gift</option>
    </select>
  );
};

export default Giftoption;
