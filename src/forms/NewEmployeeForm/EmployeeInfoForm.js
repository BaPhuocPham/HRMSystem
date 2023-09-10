import { DatePicker, Form, Input, Radio, Select } from "antd";
import React, { useEffect } from "react";

import dayjs from "dayjs";

const { Option } = Select;

export const EmployeeInfoForm = ({
  formData,
  handleChange,
  onFinish,
  onFinishFailed,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("run Effect", formData);
    form.setFieldsValue({
      surname: formData.surname,
      name: formData.name,
      gender: formData.gender,
      nationality: formData.nationality,
      phone: formData.phone,
      birthday: dayjs(formData.birthday),
      address: formData.address,
      department: formData.department,
      identification: formData.identification,
      bankAccountName: formData.bankAccountName,
      bankAccount: formData.bankAccount,
      bankName: formData.bankName,
    });
  }, []);

  const disabledDate = (current) => {
    // get current date
    const currentDate = new Date();

    // compare to current date
    return current && current > currentDate;
  };
  return (
    <Form
      form={form}
      id="newEmployee2ndContent"
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
            marginTop: "10px",
          }}
        >
          Ngày sinh
        </span>
        name="birthday"
      >
        <DatePicker
          name="birthday"
          onSelect={handleChange}
          value={formData.birthday}
          className="datePickerInput"
          placeholder="Chọn ngày sinh"
          disabledDate={disabledDate}
          style={{
            width: "100%",
            height: "45px",
            fonSize: "18px!important",
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
      >
        <Select
          name="department"
          placement="bottomLeft"
          onChange={handleChange}
          value={formData.department}
          defaultValue={"Sale"}
          defaultActiveFirstOption={true}
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
          <Option value="Research & Development">Research & Development</Option>
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
  );
};
