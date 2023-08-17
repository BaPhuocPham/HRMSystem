import React from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { Contract } from "../../components/ContractContent/Contract";
import "./MyContract.css";

export const MyContract = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <ContentHeader title="Hợp đồng của tôi" />
      <Contract />
    </div>
  );
};
