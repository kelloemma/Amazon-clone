import React from "react";
import { Carousel } from "react-responsive-carousel";
import images  from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css';

const Carousell = () => {
  return (
    <>
      <Carousel className="carousel"
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {images.map((image) => {
          return <img src={image} />;
        })}
      </Carousel>
      <div className="fade">
       
      </div>
    </>
  );
};

export default Carousell;
