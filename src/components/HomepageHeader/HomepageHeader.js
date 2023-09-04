import React, { useState } from "react";
import "./HomepageHeader.css";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

export const HomepageHeader = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="header-wrapper">
      <div className="flexCenter paddings innerWidth header-container">
        <img src="assets/images/homepageImages/logo.png" width={100} />
        <div className="flexCenter header-menu">
          <a href="">Rescidencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="/login">Sign In</a>
          </button>
        </div>
        <div className="menu-icon">
          <MenuOutlined onClick={showDrawer} style={{ fontSize: "24px" }} />
          <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
            <div className="flexCenter menu-response">
              <a href="">Rescidencies</a>
              <a href="">Our Value</a>
              <a href="">Contact Us</a>
              <a href="">Get Started</a>
              <button className="button">
                <a href="/login">Sign In</a>
              </button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
