import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { BsPeople } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";

const CounterCard = ({ icon: Icon, end, suffix, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it animates only once
    threshold: 0.5, // Starts counting when 30% of the element is visible
  });

  return (
    <div className="counter__card" ref={ref}>
      <div className="counter__card__icon">
        <Icon />
      </div>
      <div className="counter__card__info">
        <p className="counter__card__count">
          {inView ? <CountUp start={0} end={end} suffix={suffix} /> : 0}
        </p>
        <p className="counter__card__text">{text}</p>
      </div>
    </div>
  );
};

const Counters = () => {
  return (
    <div className="container counter__container">
      <section className="counter__section">
        <CounterCard
          icon={BsPeople}
          end={1000}
          suffix="+"
          text="Iftar Donated"
        />
        <CounterCard icon={FaDonate} end={3000} suffix="৳" text="Fund Raised" />
      </section>
    </div>
  );
};

export default Counters;
