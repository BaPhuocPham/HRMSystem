import React, { useEffect, useState } from "react";
import {
  MailOutlined,
  HomeOutlined,
  ClockCircleOutlined,
  UserAddOutlined,
  UserOutlined,
  TeamOutlined,
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
      <HomeOutlined />
      &emsp; Dashboard
    </p>,
    "/dashboard"
  ),
  getItem("Nhân viên", "sub1", "", [
    getItem("Phòng ban", "/department", <TeamOutlined />),
    getItem("Phòng ban của tôi", "/my_department", <TeamOutlined />),
    getItem("Toàn bộ nhân viên", "/employee", <TeamOutlined />),
    getItem("Tạo nhân viên mới", "/new_employee", <UserAddOutlined />),
  ]),
  getItem("Tăng ca", "sub2", <></>, [
    getItem(
      "Đơn tăng ca nhân viên",
      "/ot_applications",
      <ClockCircleOutlined />
    ),
    getItem(
      "Đơn tăng ca của tôi",
      "/my_ot_applications",
      <ClockCircleOutlined />
    ),
  ]),
  getItem("Nghỉ phép", "sub3", <></>, [
    getItem("Đơn nghỉ phép nhân viên", "/leave_applications", <MailOutlined />),
    getItem(
      "Đơn nghỉ phép của tôi",
      "/my_leave_applications",
      <MailOutlined />
    ),
  ]),
  getItem("Đơn khác", "sub4", <></>, [
    getItem("Danh sách đơn khác", "/other_applications", <MailOutlined />),
    getItem("Đơn khác của tôi", "/my_other_applications", <MailOutlined />),
  ]),
  getItem("Quản lí lương", "sub5", <></>, [
    getItem("Lương nhân viên", "/salary", <TeamOutlined />),
    getItem("Lương của tôi", "/my_salary", <UserOutlined />),
  ]),
  getItem("Hợp đồng", "sub6", <></>, [
    getItem("Hợp đồng nhân viên", "/contracts", <TeamOutlined />),
    getItem("Hợp đồng của tôi", "/my_contract", <UserOutlined />),
  ]),
  getItem("Tuyển dụng", "sub7", <></>, [
    getItem("Danh sách ứng viên", "/candidates", <TeamOutlined />),
  ]),
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
        minWidth: 256,
      }}
      selectedKeys={[selectMenu]}
      // defaultSelectedKeys={[defaultSelectMenu]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
