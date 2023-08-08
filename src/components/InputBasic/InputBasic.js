import { Input } from "antd";
import React from "react";

export const InputBasic = () => {
  return (
    <Input
      style={{
        border: "none",
        outline: "none",
        borderRadius: "0",
        boxShadow: "none",
        borderBottom: "1px solid #dfdfdf",
        width: "50%",
        padding: "0",
        fontSize: "18px",
        color: "#797979",
      }}
      placeholder="Tìm kiếm"
    />
  );
};
