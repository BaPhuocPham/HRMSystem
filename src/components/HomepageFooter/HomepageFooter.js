import React from "react";
import "./HomepageFooter.css";

export const HomepageFooter = () => {
  return (
    <div className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        {/* left side */}
        <div className="flexColStart footer-left">
          <img src="assets/images/homepageImages/logo2.png" alt="" />

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter footer-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};
