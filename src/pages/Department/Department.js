import React from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import "./Department.css";
import { PlusOutlined } from "@ant-design/icons";
import { DepartmentTable } from "../../tables/DepartmentTable.js/DepartmentTable";

export const Department = () => {
  return (
    <div className="department">
      <ContentHeader title={"Danh sách phòng ban"} />
      <div className="actionArea">
        <div className="addBtn">
          <PlusOutlined style={{ fontWeight: "bold" }} /> Thêm phòng ban
        </div>
      </div>
      <div className="departmentTable">
        <DepartmentTable />
      </div>
    </div>
  );
};
