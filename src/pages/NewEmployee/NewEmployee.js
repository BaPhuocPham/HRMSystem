import React, { useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  message,
  Radio,
  Select,
  Steps,
  theme,
} from "antd";
import "./NewEmployee.css";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import moment from "moment";
import { NewEmployeeAccountForm } from "../../forms/NewEmployeeForm/NewEmployeeAccountForm";
import { EmployeeInfoForm } from "../../forms/NewEmployeeForm/EmployeeInfoForm";
import dayjs from "dayjs";

export const NewEmployee = () => {
  const { token } = theme.useToken();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    surname: "",
    name: "",
    gender: "Nữ",
    nationality: "",
    phone: "",
    birthday: "",
    address: "",
    department: "Sale",
    identification: "",
    bankAccountName: "",
    bankAccount: "",
    bankName: "",
  });
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Tạo tài khoản",
    },
    {
      title: "Thông tin cá nhân",
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    if (current < steps.length - 1) {
      console.log("submit sucessfully");
      next();
      console.log(formData);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const [form] = Form.useForm();

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      if (moment(e).format("YYYY-MM-DD") !== "Invalid date") {
        setFormData((prevData) => ({
          ...prevData,
          birthday: dayjs(e).format("YYYY-MM-DD"),
        }));
        console.log(e);
        console.log(dayjs(e).format("YYYY-MM-DD"));
      } else {
        setFormData((prevData) => ({ ...prevData, department: e }));
      }
    }
  };

  const formContent = [
    <NewEmployeeAccountForm
      handleChange={handleChange}
      formData={formData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />,
    <EmployeeInfoForm
      handleChange={handleChange}
      formData={formData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />,
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: "#797979",
    fonSize: "18px",
    // backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <div className="newEmployee">
      <ContentHeader title="Thêm nhân viên" />
      <div className="newEmployeeWrapper">
        <Steps style={{ marginTop: "20px" }} current={current} items={items} />
        {/* <div style={contentStyle}>{steps[current].content}</div> */}
        {formContent[current]}
        <div
          style={{
            marginTop: 24,
            float: "right",
            marginBottom: 50,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* {current > 0 && ( */}
          <Button
            disabled={current > 0 ? false : true}
            size="large"
            onClick={() => prev()}
          >
            Quay về
          </Button>
          {/* )} */}
          {current < steps.length - 1 && (
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              form="newEmployee1stContent"
            >
              Tiếp
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              size="large"
              disabled={Object.values(formData).some((value) => !value)}
              type="primary"
              onClick={() => message.success("Processing complete!")}
              htmlType="submit"
              form="newEmployee2ndContent"
            >
              Hoàn thành
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
