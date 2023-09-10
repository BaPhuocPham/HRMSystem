import { Form, Input } from "antd";
import React, { useEffect } from "react";

export const NewEmployeeAccountForm = ({
  formData,
  handleChange,
  onFinish,
  onFinishFailed,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("run Effect", formData);
    form.setFieldsValue({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
  }, []);

  return (
    <Form
      form={form}
      id="newEmployee1stContent"
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
          // defaultValue={formData.username}
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
          // defaultValue={formData.email}
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
            // defaultValue={formData.password}
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
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Hãy nhập lại mật khẩu!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Mật khẩu xác nhận không trùng khớp!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          name="confirmPassword"
          onChange={handleChange}
          // defaultValue={formData.confirmPassword}
          value={formData.confirmPassword}
          className="newEmployeeInput"
          placeholder="Nhập lại mật khẩu"
        />
      </Form.Item>
    </Form>
  );
};
