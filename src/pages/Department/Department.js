import React from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import "./Department.css";
import { DepartmentTable } from "../../components/tables/DepartmentTable.js/DepartmentTable";
import { PlusOutlined } from "@ant-design/icons";

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
