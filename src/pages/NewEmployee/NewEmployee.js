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

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const { Option } = Select;

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

  const handleChange = (e) => {
    console.log(e);
    if (e.target) {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      if (moment(e).format("YYYY-MM-DD") !== "Invalid date") {
        setFormData((prevData) => ({
          ...prevData,
          birthday: moment(e).format("YYYY-MM-DD"),
        }));
        console.log(moment(e).format("YYYY-MM-DD"));
      } else {
        setFormData((prevData) => ({ ...prevData, department: e }));
      }
    }
  };

  const steps = [
    {
      title: "Tạo tài khoản",
      content: (
        <div className="inputArea">
          <Form
            name="newEmployee1stContent"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: "100%",
              fonSize: "18px",
              marginTop: "60px",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Tên đăng nhập
              </span>
              name="username"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên đăng nhập!",
                },
              ]}
            >
              <Input
                placeholder="Nhập tên đăng nhập"
                className="newEmployeeInput"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Email
              </span>
              name="email"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập nhập email!",
                },
                {
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,
                  message: "Email không hợp lệ",
                },
              ]}
            >
              <Input
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="newEmployeeInput"
                placeholder="Nhập email"
              />
            </Form.Item>
            <Form.Item
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Mật khẩu
              </span>
              name="password"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mật khẩu!",
                },
              ]}
            >
              <div className="inputArea">
                <Input.Password
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Nhập mật khẩu"
                  className="newEmployeeInput"
                />
                <p className="subNote">
                  Mật khẩu cần ít nhất 1 ký tự đặc biệt, 1 chữ in hoa và một số
                </p>
              </div>
            </Form.Item>
            <Form.Item
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Xác nhận mật khẩu
              </span>
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập lại mật khẩu!",
                },
              ]}
            >
              <Input.Password
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                className="newEmployeeInput"
                placeholder="Nhập lại mật khẩu"
              />
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Thông tin cá nhân",
      content: (
        <div className="inputArea">
          <Form
            name="newEmployee2ndContent"
            labelCol={{
              span: 50,
            }}
            wrapperCol={{
              span: 50,
            }}
            style={{
              maxWidth: "100%",
              fonSize: "18px",
              marginTop: "60px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  marginTop: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Họ
              </span>
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập họ!",
                },
              ]}
            >
              <Input
                name="surname"
                onChange={handleChange}
                value={formData.surname}
                placeholder="Nhập họ"
                className="newEmployeeInput"
              />
            </Form.Item>

            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Tên
              </span>
              name="name"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên!",
                },
              ]}
            >
              <Input
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="newEmployeeInput"
                placeholder="Nhập tên"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Giới tính
              </span>
              name="gender"
            >
              <Radio.Group
                name="gender"
                onChange={handleChange}
                value={formData.gender}
                defaultValue={formData.gender}
                style={{ float: "left", fonSize: "18px!important" }}
              >
                <Radio value="Nữ" style={{ fonSize: "18px!important" }}>
                  <span style={{ fonSize: "18px" }}>Nữ</span>
                </Radio>
                <Radio style={{ fonSize: "18px" }} value="Nam">
                  Nam
                </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Quốc tịch
              </span>
              name="nationality"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập quốc tịch!",
                },
              ]}
            >
              <Input
                name="nationality"
                onChange={handleChange}
                value={formData.nationality}
                className="newEmployeeInput"
                placeholder="Nhập quốc tịch"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Số điện thoại
              </span>
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập số điện thoại!",
                },
              ]}
            >
              <Input
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="newEmployeeInput"
                placeholder="Nhập số điện thoại"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Ngày sinh
              </span>
              name="birthday"
            >
              <DatePicker
                name="birthday"
                // showTime={}
                onSelect={handleChange}
                value={formData.birthday}
                className="datePickerInput"
                placeholder="Chọn ngày sinh"
                style={{
                  width: "100%",
                  height: "60px",
                  fonSize: "18px",
                  color: "#797979",
                }}
                format={"DD-MM-YYYY"}
                placement="bottomRight"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "100%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Địa chỉ
              </span>
              name="address"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập địa chỉ!",
                },
              ]}
            >
              <Input
                name="address"
                onChange={handleChange}
                value={formData.address}
                className="newEmployeeInput"
                placeholder="Nhập địa chỉ"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              name="department"
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Phòng ban
              </span>
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Hãy chọn phòng ban của bạn!",
                },
              ]}
            >
              <Select
                name="department"
                placement="bottomLeft"
                onChange={handleChange}
                value={formData.department}
                defaultValue={formData.department}
                style={{
                  width: "100%",
                  textAlign: "left",
                  marginBottom: "0px",
                }}
              >
                <Option value="Sale">Sale</Option>
                <Option value="Marketing">Marketing</Option>
                <Option value="Finance">Finance</Option>
                <Option value="Human Resource">Human Resource</Option>
                <Option value="Operations">Operations</Option>
                <Option value="Engineering">Engineering</Option>
                <Option value="Customer Support">Customer support</Option>
                <Option value="Research & Development">
                  Research & Development
                </Option>
              </Select>
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                CMND/CCCD
              </span>
              name="identification"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập CMND/CCCD!",
                },
              ]}
            >
              <Input
                name="identification"
                onChange={handleChange}
                value={formData.identification}
                className="newEmployeeInput"
                placeholder="Nhập CMND/CCCD"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Tên tài khoản ngân hàng
              </span>
              name="bankAccountName"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên tài khoản ngân hàng!",
                },
              ]}
            >
              <Input
                name="bankAccountName"
                onChange={handleChange}
                value={formData.bankAccountName}
                className="newEmployeeInput"
                placeholder="Nhập tên tài khoản ngân hàng"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "49%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Số tài khoản ngân hàng
              </span>
              name="bankAccount"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập số tài khoản ngân hàng!",
                },
              ]}
            >
              <Input
                name="bankAccount"
                onChange={handleChange}
                value={formData.bankAccount}
                className="newEmployeeInput"
                placeholder="Nhập số tài khoản ngân hàng"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "100%" }}
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Ngân hàng
              </span>
              name="bankName"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập ngân hàng!",
                },
              ]}
            >
              <Input
                name="bankName"
                onChange={handleChange}
                value={formData.bankName}
                className="newEmployeeInput"
                placeholder="Nhập ngân hàng"
              />
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
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
        <div style={contentStyle}>{steps[current].content}</div>
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
            <Button size="large" type="primary" onClick={() => next()}>
              Tiếp
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              size="large"
              disabled={Object.values(formData).some((value) => !value)}
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Hoàn thành
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
