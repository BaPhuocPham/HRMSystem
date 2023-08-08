import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import "./ContentHeader.css";

export const ContentHeader = ({ title }) => {
  return (
    <div className="contentHeader">
      <p className="title">{title}</p>
      <div className="logoutBtn">
        <LogoutOutlined />
      </div>
    </div>
  );
};
