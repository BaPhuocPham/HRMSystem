import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
export const DepartmentDropdown = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <p
        style={{ color: "#797979", fontWeight: "500" }}
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          <span style={{ marginRight: "20px" }}>Toàn bộ phòng ban</span>
          <DownOutlined style={{ fontWeight: "bold" }} />
        </Space>
      </p>
    </Dropdown>
  );
};
