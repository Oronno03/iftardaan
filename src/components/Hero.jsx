import React from "react";
import pic from "../assets/download.jpeg";
import { BiCalendar, BiLocationPlus } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="container hero__container">
      <section className="hero__section">
        <img src={pic} className="hero__img" alt="" />
        <div className="texts">
          <div className="text__main">
            <h1 className="text__heading">Iftar Daan</h1>
            <p className="text__year">2025</p>
          </div>
          <div className="text__subtitle">
            <p className="date">
              <BiCalendar /> 16 March, 2025
            </p>
            <p className="location">
              <BiLocationPlus /> Ideal School & College, Banasree Branch
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
