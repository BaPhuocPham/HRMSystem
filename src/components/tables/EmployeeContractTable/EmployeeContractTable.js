import { Table, Tooltip } from "antd";
import React from "react";
import { employeeContractData } from "../../../shared/employeeContractData";
import {
  AlignLeftOutlined,
  CalendarOutlined,
  EllipsisOutlined,
  NumberOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";

const dataSource = employeeContractData;

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
    title: <span style={{ minWidth: "max-content" }}>ID</span>,
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
      <div>
        {" "}
        <UserOutlined />
        <span style={{ minWidth: "max-content" }}>Tạo bởi</span>
      </div>
    ),
    dataIndex: "createBy",
    key: "createBy",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        {record.avatar.length === 0 ? (
          <div></div>
        ) : (
          <img
            style={{
              display: "inline-block",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
            src={record.avatar}
            alt="createBy"
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
      <div>
        {" "}
        <UnorderedListOutlined />
        <span style={{ minWidth: "max-content" }}>Loại hợp đồng</span>
      </div>
    ),
    dataIndex: "contractType",
    key: "contractType",
    ellipsis: {
      showTitle: false,
    },
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
            textDecoration: "underline",
            fontWeight: "bold",
            minWidth: "max-content",
          }}
        >
          {text}
        </span>
      </div>
    ),
  },
  {
    title: (
      <div>
        {" "}
        <UnorderedListOutlined />
        <span
          style={{
            minWidth: "max-content",
          }}
        >
          Trạng thái
        </span>
      </div>
    ),
    dataIndex: "status",
    key: "status",
    ellipsis: {
      showTitle: false,
    },
    render: (text) => (
      <span
        style={{
          color: text === "Hiệu Lực" ? "#9089c7" : "#db6c76",
          backgroundColor: text === "Hiệu Lực" ? "#eae6fe" : "#f5d7d7",
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
      <div>
        {" "}
        <UnorderedListOutlined />
        <span
          style={{
            minWidth: "max-content",
          }}
        >
          Loại lương
        </span>
      </div>
    ),
    dataIndex: "salaryType",
    key: "salaryType",
    ellipsis: {
      showTitle: false,
    },
    render: (text) => (
      <span
        style={{
          color: text === "Gross To Net" ? "#569ab5" : "#db6c76",
          backgroundColor: text === "Gross To Net" ? "#d3f5fe" : "#f5d7d7",
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
      <div>
        {" "}
        <NumberOutlined />
        <span style={{ minWidth: "max-content" }}>Người phụ thuộc</span>
      </div>
    ),
    dataIndex: "dependentCount",
    key: "dependentCount",
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
      <div>
        <CalendarOutlined />
        <span style={{ minWidth: "max-content" }}>Ngày bắt đầu</span>
      </div>
    ),
    dataIndex: "startDate",
    key: "startDate",
    ellipsis: {
      showTitle: false,
    },
    render: (startDate) => (
      <Tooltip placement="topLeft" title={startDate}>
        <span style={{ color: "#797979" }}>
          {" "}
          {`Thg ${moment(startDate).format("MM DD, YYYY, hh:mm")}`}
        </span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div>
        <CalendarOutlined />
        <span style={{ minWidth: "max-content" }}>Ngày kết thúc</span>
      </div>
    ),
    dataIndex: "endDate",
    key: "endDate",
    ellipsis: {
      showTitle: false,
    },
    render: (endDate) => (
      <Tooltip placement="topLeft" title={endDate}>
        <span style={{ color: "#797979" }}>{`Thg ${moment(endDate).format(
          "MM DD, YYYY, hh:mm"
        )}`}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div>
        {" "}
        <NumberOutlined />
        <span style={{ minWidth: "max-content" }}>Lương thoả thuận</span>
      </div>
    ),
    dataIndex: "salaryDeal",
    key: "salaryDeal",
    ellipsis: {
      showTitle: false,
    },
    render: (salaryDeal) => (
      <Tooltip placement="topLeft" title={salaryDeal}>
        <span style={{ color: "#797979" }}>
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(salaryDeal)}{" "}
        </span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div>
        {" "}
        <NumberOutlined />
        <span style={{ minWidth: "max-content" }}>Lương đóng thuế</span>
      </div>
    ),
    dataIndex: "salaryAfTax",
    key: "salaryAfTax",
    ellipsis: {
      showTitle: false,
    },
    render: (salaryAfTax) => (
      <Tooltip placement="topLeft" title={salaryAfTax}>
        <span style={{ color: "#797979" }}>
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(salaryAfTax)}
        </span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div>
        {" "}
        <NumberOutlined />
        <span style={{ minWidth: "max-content" }}>Tổng phụ cấp</span>
      </div>
    ),
    dataIndex: "allowance",
    key: "allowance",
    ellipsis: {
      showTitle: false,
    },
    render: (allowance) => (
      <Tooltip placement="topLeft" title={allowance}>
        <span style={{ color: "#797979" }}>
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(allowance)}
        </span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div>
        {" "}
        <NumberOutlined />
        <span style={{ minWidth: "max-content" }}>Ghi chú</span>
      </div>
    ),
    dataIndex: "note",
    key: "note",
    ellipsis: {
      showTitle: false,
    },
    render: (note) =>
      note.trim().length === 0 ? (
        <span
          style={{
            color: "#797979",
            fontStyle: "italic",
            fontWeight: "lighter",
          }}
        >
          Chưa có ghi chú
        </span>
      ) : (
        <span style={{ color: "#797979" }}>{note}</span>
      ),
  },
  {
    title: (
      <div>
        <CalendarOutlined />
        <span style={{ minWidth: "max-content" }}>Thời gian tạo</span>
      </div>
    ),
    dataIndex: "createAt",
    key: "createAt",
    ellipsis: {
      showTitle: false,
    },
    render: (createAt) => (
      <Tooltip placement="topLeft" title={createAt}>
        <span style={{ color: "#797979" }}>{`Thg ${moment(createAt).format(
          "MM DD, YYYY, hh:mm"
        )}`}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <div>
        <CalendarOutlined />
        <span style={{ minWidth: "max-content" }}>Thời gian thay đổi</span>
      </div>
    ),
    dataIndex: "changeAt",
    key: "changeAt",
    ellipsis: {
      showTitle: false,
    },
    render: (changeAt) => (
      <Tooltip placement="topLeft" title={changeAt}>
        <span style={{ color: "#797979" }}>{`Thg ${moment(changeAt).format(
          "MM DD, YYYY, hh:mm"
        )}`}</span>
      </Tooltip>
    ),
  },
];

export const EmployeeContractTable = () => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      style={{ minWidth: "100%", color: "#797979" }}
      scroll={{ x: "max-content" }}
    />
  );
};
