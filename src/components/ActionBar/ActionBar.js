import { Input } from "antd";
import React from "react";
import { InputBasic } from "../InputBasic/InputBasic";
import { DepartmentDropdown } from "../Dropdown/DepartmentDropdown";
import "./ActionBar.css";
import { PlusOutlined } from "@ant-design/icons";

export const ActionBar = () => {
  return (
    <div className="actionBar">
      <div className="inputSearchArea">
        <InputBasic />
      </div>
      <div className="dropdownArea">
        <DepartmentDropdown />
        <div className="resetBtn">Làm mới</div>
      </div>
      <div className="addBtnArea">
        <div className="addBtn">
          <PlusOutlined style={{ fontWeight: "bold" }} /> Thêm nhân viên
        </div>
      </div>
    </div>
  );
};
