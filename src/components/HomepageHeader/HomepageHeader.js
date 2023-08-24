import React from "react";

export const HomepageHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <img src="assets/images/homepageImages/logo.png" width={100} />
      </div>
      <div className="header-menu">
        <a href="">Rescidencies</a>
        <a href="">Our Value</a>
        <a href="">Contact Us</a>
        <a href="">Get Started</a>
        <button className="button">
          <a href="">Contact</a>
        </button>
      </div>
    </div>
  );
};
