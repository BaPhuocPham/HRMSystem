import React from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import "./Employee.css";
import { EmployeeTable } from "../../components/tables/EmployeeTable/EmployeeTable";
import { ActionBar } from "../../components/ActionBar/ActionBar";

export const Employee = () => {
  return (
    <div className="employee">
      <ContentHeader title={"Danh sách nhân viên"} />
      <ActionBar />
      <div className="employeeTable">
        <EmployeeTable />
      </div>
    </div>
  );
};
