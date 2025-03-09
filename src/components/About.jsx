import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";

const About = () => {
  return (
    <div className="about__container container">
      <section className="about__section">
        <div className="left__side">
          <article className="about__text">
            <h1 className="about__text__heading">Assalamu Alaikum Everyone</h1>
            <p className="about__text__paragraph">
              Like every year, we, the students of Batch 25 of ISC Banasree
              Branch, will donate Iftar to those in need. This initiative will
              take place on March 16, 2025. To support this cause, we will
              collect donations until March 14, 2025. Half of the collected
              funds will be used to provide Iftar, while the other half will be
              donated to a Madrasah.
            </p>
            <p className="about__text__paragraph">
              After a long day of hard work and devotion to Sawm, what could be
              more fulfilling than offering someone a heartfelt Iftar? A simple
              act of kindness can bring immense joy—let’s make someone’s evening
              truly special!
            </p>
            <p className="about__text__paragraph">
              If anyone want to donate using Bkash, you can send money in this
              number : 01717099781. <br />
              <br /> Also for further information and queries check our page or
              call at the given number.
            </p>
          </article>
        </div>
        <div className="right__side">
          <img src={pic1} className="about__pic" alt="" />
          <img src={pic2} className="about__pic" alt="" />
          <img src={pic3} className="about__pic" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
