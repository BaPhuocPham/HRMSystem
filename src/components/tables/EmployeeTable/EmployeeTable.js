import React from "react";
import { Table, Tooltip } from "antd";
import {
  AlignLeftOutlined,
  BarsOutlined,
  CalendarOutlined,
  EllipsisOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { employeeData } from "../../../shared/employeeData";
const columns = [
  {
    title: "",
    dataIndex: "moreOptions",
    key: "moreOptions",
    render: (text) => (
      <div
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        <EllipsisOutlined />
      </div>
    ),
    width: 40,
  },
  {
    title: "",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <div
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: status === "working" ? "#0080ff" : "gray",
          borderRadius: "50%",
          padding: "5px 0",
          color: "#ffffff",
        }}
      >
        <UserOutlined />
      </div>
    ),
    width: 40,
  },
  {
    title: (
      <span style={{ color: "#9f9f9f", minWidth: "max-content" }}>ID</span>
    ),
    // style: { color: "#eaeaea" },
    dataIndex: "id",
    key: "id",
    render: (text) => (
      <p style={{ minWidth: "max-content", color: "#797979" }}>{text}</p>
    ),
    width: 40,
    sorter: (a, b) => a.id - b.id,
    defaultSortOrder: "ascend",
    sortDirections: ["descend"],
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        {" "}
        <AlignLeftOutlined />
        <span style={{ minWidth: "max-content" }}>Tên nhân viên</span>
      </div>
    ),
    dataIndex: "employeeName",
    key: "employeeName",
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
            alt="employee"
          />
        )}

        <span
          style={{
            minWidth: "max-content",
            fontWeight: "bold",
            color: "#797979",
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
      <div style={{ color: "#9f9f9f" }}>
        {" "}
        <BarsOutlined />{" "}
        <span
          style={{
            minWidth: "max-content",
            color: "#9f9f9f",
          }}
        >
          Phòng ban
        </span>
      </div>
    ),
    dataIndex: "departmentName",
    key: "departmentName",
    render: (text, record) => (
      <div>
        <div
          style={{
            textDecoration: "underline",
            display: "inline-block",
            backgroundColor: record.color,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
          }}
        ></div>

        <span
          style={{
            textDecoration: "underline",
            minWidth: "max-content",
            color: "#797979",
          }}
        >
          {text}
        </span>
      </div>
    ),
    width: 300,
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        <PhoneOutlined />{" "}
        <span
          style={{
            minWidth: "max-content",
          }}
        >
          Số điện thoại
        </span>
      </div>
    ),
    dataIndex: "phone",
    key: "phone",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ color: "#797979" }}>{address}</span>
      </Tooltip>
    ),
    width: 200,
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        {" "}
        <BarsOutlined />
        <span
          style={{
            minWidth: "max-content",
          }}
        >
          Giới tính
        </span>
      </div>
    ),
    dataIndex: "gender",
    key: "gender",
    ellipsis: {
      showTitle: false,
    },
    render: (text) => (
      <span
        style={{
          color: text === "Nam" ? "#619db5" : "#db6c76",
          backgroundColor: text === "Nam" ? "#d1f2fb" : "#f5d7d7",
          borderRadius: "7px",
          padding: "5px 10px",
          fontWeight: "bold",
        }}
      >
        {text}
      </span>
    ),
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        {" "}
        <AlignLeftOutlined />
        <span style={{ minWidth: "max-content" }}>Email</span>
      </div>
    ),
    dataIndex: "email",
    key: "email",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ color: "#797979" }}>{address}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        {" "}
        <AlignLeftOutlined />
        <span style={{ minWidth: "max-content" }}>Ngân hàng</span>
      </div>
    ),
    dataIndex: "bank",
    key: "bank",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ color: "#797979" }}>{address}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        <CalendarOutlined />
        <span style={{ minWidth: "max-content" }}>Ngày sinh</span>
      </div>
    ),
    dataIndex: "birthday",
    key: "birthday",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ color: "#797979" }}>{address}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        <AlignLeftOutlined />
        <span style={{ minWidth: "max-content", color: "#9f9f9f" }}>
          Địa chỉ
        </span>
      </div>
    ),
    dataIndex: "address",
    key: "address",
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
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        <AlignLeftOutlined />
        <span style={{ minWidth: "max-content" }}>Quốc gia</span>
      </div>
    ),
    dataIndex: "nation",
    key: "nation",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ color: "#797979" }}>{address}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div style={{ color: "#9f9f9f" }}>
        <CalendarOutlined />
        <span style={{ minWidth: "max-content" }}>Tài khoản ngân hàng</span>
      </div>
    ),
    dataIndex: "bankAccount",
    key: "bankAccount",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <span style={{ color: "#797979" }}>{address}</span>
      </Tooltip>
    ),
  },
];
const data = employeeData;

export const EmployeeTable = () => {
  return (
    <Table
      style={{ minWidth: "100%", color: "#797979" }}
      scroll={{ x: "max-content" }}
      columns={columns}
      dataSource={data}
    />
  );
};
