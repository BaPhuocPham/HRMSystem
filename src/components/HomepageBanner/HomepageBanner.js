import React from "react";
import "./HomepageBanner.css";
import { EnvironmentFilled } from "@ant-design/icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export const HomepageBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="paddings innerWidth flexCenter banner-container">
        <div className="flexColStart banner-left">
          <div className="banner-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart banner-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <EnvironmentFilled
              style={{ color: "var(--blue)", fontSize: "25px" }}
            />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="banner-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="assets/images/homepageImages/hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
