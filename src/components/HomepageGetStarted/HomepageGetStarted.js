import React from "react";
import "./HomepageGetStarted.css";

export const HomepageGetStarted = () => {
  return (
    <div className="getStarted-wrapper">
      <div className="paddings innerWidth getStarted-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};
