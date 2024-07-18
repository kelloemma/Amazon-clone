import React, { useContext } from "react";
import "./header.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { DataContext } from "../dataProvider/DataProvider";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import usaFlaf from "../../assets/americanFlag.webp";
import LowerHeader from "./lowerHeader/LowerHeader";

const Header = () => {

  const [{basket},dispatch] = useContext(DataContext)
  return (
    <>
      <section className="headerOutter">
        {/* left*/}
        <div className="headerLogo">
          <Link to ="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>
          <a href="">
            <div className="headerLocation">
              <p>
                <LocationOnOutlinedIcon /> Delivering to usa
              </p>
              <p> Update location</p>
            </div>
          </a>
        </div>
        {/* middle */}
        <div className="headerSearch">
          <select name="" id="">
            <option value="">All</option>
            <option value="">hi</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <div className="headerserachIcon">
            <SearchIcon />
          </div>
        </div>
        {/* right */}
        <div className="headerSignout">
          <div className="headerSignoutOne">
            <img src={usaFlaf} alt="" />

            <p>EN</p>
            <ArrowDropDownOutlinedIcon />
          </div>
          <div>
            <Link to="/auth" className="headerSign">
              <div>
                <p>hello,sign in</p>
                <p>Account & Lists</p>
              </div>
              <div>
                <ArrowDropDownOutlinedIcon />
              </div>
            </Link>
          </div>
          <a href="/orders">
            <div>
              <p>Returns</p>
              <p>&Orders</p>
            </div>
          </a>
          <Link to="/cart">
            <div className="headerCarts">
              <ShoppingCartOutlinedIcon />
              <p>Carts</p>
              <span>{basket.length}</span>
            </div>
          </Link>
        </div>
      </section>
      <LowerHeader/>
    
    </>
  );
};

export default Header;
