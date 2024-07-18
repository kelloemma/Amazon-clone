import React from "react";
import './catagory.css'
const CatagoryCards = ({data}) => {
       console.log(data);
  return (
    <div className="catagory">
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt="" />
        <p>shop more</p>
      </a>

    </div>
  );
  
}

export default CatagoryCards;
