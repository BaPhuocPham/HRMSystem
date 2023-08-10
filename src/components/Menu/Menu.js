import React, { useEffect, useState } from "react";
import {
  MailOutlined,
  HomeOutlined,
  ClockCircleOutlined,
  UserAddOutlined,
  UserOutlined,
  TeamOutlined,
  FileDoneOutlined,
  FileSyncOutlined,
  FileAddOutlined,
  DollarOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
      <img
        style={{
          display: "inline-block",
          width: "35px",
          height: "35px",
          borderRadius: "12px",
        }}
        src="assets/images/Gmail-letter-N.jpg"
        alt="avatar"
      />
      &emsp;{" "}
      <span
        style={{
          minWidth: "max-content",
          fontWeight: "bold",
          color: "#797979",
        }}
      >
        Nguyen Van Quan Ly
      </span>
    </div>,
    "/"
  ),
  getItem(
    <p>
      <HomeOutlined style={{ fontSize: "16px" }} />
      &emsp; Dashboard
    </p>,
    "/"
  ),
  getItem(
    <span style={{ fontWeight: "700" }}>
      {" "}
      <TeamOutlined style={{ fontSize: "16px" }} />
      &emsp; Nhân viên
    </span>,
    "sub1",
    "",
    [
      getItem("Phòng ban", "/department", ""),
      getItem("Phòng ban của tôi", "/my_department", ""),
      getItem("Toàn bộ nhân viên", "/employee", ""),
      getItem("Tạo nhân viên mới", "/new_employee", ""),
    ]
  ),
  getItem(
    <span style={{ fontWeight: "700" }}>
      <FileDoneOutlined style={{ fontSize: "16px" }} />
      &emsp;Tăng ca
    </span>,
    "sub2",
    <></>,
    [
      getItem("Đơn tăng ca nhân viên", "/ot_applications", ""),
      getItem("Đơn tăng ca của tôi", "/my_ot_applications", ""),
    ]
  ),
  getItem(
    <span style={{ fontWeight: "700" }}>
      <FileSyncOutlined style={{ fontSize: "16px" }} />
      &emsp;Nghỉ phép
    </span>,
    "sub3",
    <></>,
    [
      getItem("Đơn nghỉ phép nhân viên", "/leave_applications", ""),
      getItem("Đơn nghỉ phép của tôi", "/my_leave_applications", ""),
    ]
  ),
  getItem(
    <span style={{ fontWeight: "700" }}>
      <FileAddOutlined style={{ fontSize: "16px" }} /> &emsp;Đơn khác
    </span>,
    "sub4",
    <></>,
    [
      getItem("Danh sách đơn khác", "/other_applications", ""),
      getItem("Đơn khác của tôi", "/my_other_applications", ""),
    ]
  ),
  getItem(
    <span style={{ fontWeight: "700" }}>
      <DollarOutlined style={{ fontSize: "16px" }} /> &emsp;Quản lí lương
    </span>,
    "sub5",
    <></>,
    [
      getItem("Lương nhân viên", "/salary", ""),
      getItem("Lương của tôi", "/my_salary", ""),
    ]
  ),
  getItem(
    <span style={{ fontWeight: "700" }}>
      <AuditOutlined style={{ fontSize: "16px" }} />
      &emsp;Hợp đồng
    </span>,
    "sub6",
    <></>,
    [
      getItem("Hợp đồng nhân viên", "/contracts", ""),
      getItem("Hợp đồng của tôi", "/my_contract", ""),
    ]
  ),
  getItem(
    <span style={{ fontWeight: "700" }}>
      <MailOutlined style={{ fontSize: "16px" }} />
      &emsp;Tuyển dụng
    </span>,
    "sub7",
    <></>,
    [getItem("Danh sách ứng viên", "/candidates", "")]
  ),
];
export const MenuBar = () => {
  const navigate = useNavigate();
  const [selectMenu, setSelectMenu] = useState("/employee");
  useEffect(() => {
    if (localStorage.getItem("locationMenu")) {
      setSelectMenu(localStorage.getItem("locationMenu"));
      navigate(localStorage.getItem("locationMenu"));
    }
  }, []);
  const onClick = (e) => {
    console.log("click ", e.key);
    localStorage.setItem("locationMenu", e.key);
    setSelectMenu(e.key);
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: "20%",
        height: "100vh",
        overflow: "auto",
        textAlign: "left",
        fontWeight: "500",
        fontSize: "16px",
        minWidth: 256,
        color: "#797979",
      }}
      selectedKeys={[selectMenu]}
      // defaultSelectedKeys={[defaultSelectMenu]}
      defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7"]}
      mode="inline"
      items={items}
    />
  );
};
