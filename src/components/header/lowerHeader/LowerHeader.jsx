import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import '../lowerHeader/lowerHeader.css'

const LowerHeader = () => {
  return (
    <>
      <div className="lowerHeaderOutter">
        <div className="lowerInner">
          <ul>
            <MenuOutlinedIcon />
            <li>
              <p>All</p>
            </li>
            <li>
              <p>Medical Care </p>
             
            </li>
            
            <li>
              <p>Groceries</p>
            </li>
            <li>
              <p>Best Seller</p>
            </li>
            <li>
              <p>Amazon Basics</p>
            </li>
            <li>
              <p>Prime</p>
            </li>
            <li>
              <p>New Releases</p>
            </li>
            <li>
              <p>Todays Deals</p>
            </li>
            <li>
              <p>Customer Servies</p>
            </li>
            <li>
              <p>music</p>
            </li>
            <li>
              <p>Amazon Home</p>
            </li>
            <li>
              <p>Registry</p>
            </li>
            <li>
              <p>books</p>
            </li>
            <li>
              <p>pharmacy</p>
            </li>
            <li>
              <p>Gift Cards</p>
            </li>
            <li>
              <p>Fashion</p>
            </li>
            <li>
              <p>Smart Home</p>
            </li>
            <li>
              <p>Sell</p>
            </li>
          </ul>
        </div>
        <div>
          <p>4 Day untill prime day</p>
        </div>
      </div>
    </>
  );
};

export default LowerHeader;
