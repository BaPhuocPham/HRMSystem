import React, { useState } from "react";
import "./HomepageValue.css";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import { accordionData } from "../../shared/homepageAccordion";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems = (panelStyle) => [
  {
    key: "1",
    label: (
      <p
        style={{
          color: "#1f3e72",
          width: "100%",
          //   textAlign: "left!important",
          fontWeight: "bold",
          fontSize: "1rem",
          position: "relative",
          lineHeight: "4rem",
        }}
      >
        <CaretRightOutlined className="icon-container" rotate={90} />
        Best interest rates on the market
      </p>
    ),
    children: (
      <p
        style={{ textAlign: "left", marginTop: "20px" }}
        className="secondaryText"
      >
        {text}
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

export const HomepageValue = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    width: "100%",
    marginBottom: "20px",
    borderRadius: "8px",
    background: "white",
    border: "0.8px solid rgba(128, 128, 128, 0.143",
    boxShadow: "var(--shadow)",
  };
  return (
    <div className="value-wrapper">
      <div className="paddings innerWidth flexCenter value-container">
        {/* left side */}
        <div className="value-left">
          <div className="image-container">
            <img src="assets/images/homepageImages/value.png" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart value-right">
          <span className="orangeText">Our Value</span>
          <span style={{ marginBottom: "20px" }} className="primaryText">
            Value We Give to You
          </span>
          <span
            style={{ textAlign: "left", marginBottom: "50px" }}
            className="secondaryText"
          >
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better.
          </span>

          <Collapse
            bordered={false}
            accordion
            defaultActiveKey={["0"]}
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  marginTop: "50%",
                }}
                className="flexCenter"
              >
                <div className="dropdownIcon-container">
                  <CaretRightOutlined rotate={90} />
                </div>
              </div>
            )}
            style={{
              background: token.colorBgContainer,
              width: "100%",
            }}
            items={accordionData.map((accordion, index) => {
              return {
                key: index,
                label: (
                  <p
                    style={{
                      color: "#1f3e72",
                      width: "100%",
                      fontWeight: "bold",
                      position: "relative",
                      lineHeight: "4rem",
                    }}
                    className="accordion-header"
                  >
                    <span>{accordion.icon}</span>
                    {accordion.heading}
                  </p>
                ),
                children: (
                  <p
                    style={{ textAlign: "left", marginTop: "20px" }}
                    className="secondaryText"
                  >
                    {text}
                  </p>
                ),
                style: panelStyle,
              };
            })}
          />
        </div>
      </div>
    </div>
  );
};
