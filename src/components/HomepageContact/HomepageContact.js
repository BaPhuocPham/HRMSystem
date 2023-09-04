import React from "react";
import "./HomepageContact.css";
import { MailFilled, MessageFilled, PhoneFilled } from "@ant-design/icons";

export const HomepageContact = () => {
  return (
    <div className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        {/* left side */}
        <div className="flexColStart contact-left">
          <span className="orangeText">Our Contact Us</span>
          <span style={{ marginBottom: "20px" }} className="primaryText">
            Easy to contact us
          </span>
          <p
            style={{ textAlign: "left", marginBottom: "50px", width: "90%" }}
            className="secondaryText"
          >
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better.
          </p>

          <div className="flexStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart innerWidth">
                  <div className="flexCenter icon">
                    <PhoneFilled style={{ fontSize: "24px" }} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>
            </div>

            {/* second mode */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart innerWidth">
                  <div className="flexCenter icon">
                    <MessageFilled style={{ fontSize: "24px" }} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* third mode */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart innerWidth">
                  <div className="flexCenter icon">
                    <MessageFilled style={{ fontSize: "24px" }} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>
            </div>

            {/* fourth mode */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart innerWidth">
                  <div className="flexCenter icon">
                    <MailFilled style={{ fontSize: "24px" }} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter contact-right">
          <div className="image-container">
            <img src="assets/images/homepageImages/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
