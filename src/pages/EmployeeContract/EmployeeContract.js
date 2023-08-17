import React from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { EmployeeContractTable } from "../../components/tables/EmployeeContractTable/EmployeeContractTable";
import "./EmployeeContract.css";
import { InputBasic } from "../../components/InputBasic/InputBasic";

export const EmployeeContract = () => {
  return (
    <div className="employeeContract">
      <ContentHeader title="Hợp đồng nhân viên" />
      <div className="actionBar">
        <div className="searchBar">
          <InputBasic />
        </div>
      </div>
      <div className="contractTable">
        <EmployeeContractTable />
      </div>
    </div>
  );
};
