import React from 'react';
import {Catagories} from './catagoryData';
import CatagoryCards from './CatagoryCards';
import './catagory.css'

 
const Catagory = () => {
 
    return (
      <div className="catagoryContainer">
        {Catagories.map((info) => {
          return <CatagoryCards data={info} />;
        })}
      </div>
    );
}

export default Catagory;
