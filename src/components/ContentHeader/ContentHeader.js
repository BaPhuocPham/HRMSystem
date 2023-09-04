import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import "./ContentHeader.css";
import { useNavigate } from "react-router-dom";

export const ContentHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="contentHeader">
      <p className="title">{title}</p>
      <div className="logoutBtn">
        <LogoutOutlined onClick={() => navigate("/homepage")} />
      </div>
    </div>
  );
};
