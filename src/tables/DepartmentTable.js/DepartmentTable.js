import React from "react";
import { Table, Tooltip } from "antd";
import {
  AlignLeftOutlined,
  NumberOutlined,
  PhoneOutlined,
  EllipsisOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { departmentData } from "../../shared/departmentData";
const columns = [
  {
    title: "",
    dataIndex: "",
    key: "",
    render: (text) => (
      <div
        style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold" }}
      >
        <EllipsisOutlined />
      </div>
    ),
    width: 20,
  },
  {
    title: <span>ID</span>,
    dataIndex: "id",
    key: "id",
    render: (text) => (
      <span style={{ minWidth: "max-content", color: "#797979" }}>{text}</span>
    ),
    width: 80,
  },
  {
    title: (
      <div>
        {" "}
        <UserOutlined />
        &emsp; <span>Tên phòng ban</span>
      </div>
    ),
    dataIndex: "departmentName",
    key: "departmentName",
    render: (text, record) => (
      <div>
        <div
          style={{
            display: "inline-block",
            backgroundColor: record.color,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
          }}
        ></div>
        &emsp;
        <span
          style={{
            color: "#797979",
            minWidth: "max-content",
          }}
        >
          {text}
        </span>
      </div>
    ),
    width: 250,
  },
  {
    title: (
      <div>
        {" "}
        <UserOutlined />
        &emsp;<span>Quản lý</span>
      </div>
    ),
    dataIndex: "manager",
    key: "manager",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        {record.image.length === 0 ? (
          <div></div>
        ) : (
          <img
            style={{
              display: "inline-block",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
            src={record.image}
            alt="manager"
          />
        )}
        &emsp;
        <span
          style={{
            minWidth: "max-content",
            color: "#797979",
            fontWeight: "bold",
          }}
        >
          {text}
        </span>
      </div>
    ),
    width: 200,
  },
  {
    title: (
      <div>
        <NumberOutlined />
        &emsp; <span>Số nhân viên</span>
      </div>
    ),
    dataIndex: "numOfEmployees",
    key: "numOfEmployees",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ minWidth: "max-content", color: "#797979" }}>
          {address}
        </span>
      </Tooltip>
    ),
    width: 100,
  },
  {
    title: (
      <div>
        <AlignLeftOutlined />
        &emsp; <span style={{ minWidth: "max-content" }}>Email quản lý</span>
      </div>
    ),
    dataIndex: "email",
    key: "email",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ minWidth: "max-content", color: "#797979" }}>
          {address}
        </span>
      </Tooltip>
    ),
    width: 200,
  },
  {
    title: (
      <div>
        <PhoneOutlined /> &emsp;{" "}
        <span style={{ minWidth: "max-content" }}>Số điện thoại</span>
      </div>
    ),
    dataIndex: "phone",
    key: "phone",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ minWidth: "max-content", color: "#797979" }}>
          {address}
        </span>
      </Tooltip>
    ),
    width: 200,
  },
];
const data = departmentData;

export const DepartmentTable = () => {
  return (
    <Table
      style={{ minWidth: "100%" }}
      scroll={{ x: "max-content" }}
      columns={columns}
      dataSource={data}
      pagination={{ defaultPageSize: 8 }}
    />
  );
};
