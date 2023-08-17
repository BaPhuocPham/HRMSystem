import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="loginBackgr">
        <img src="assets/images/login.jpg"></img>
      </div>
      <div className="loginWrapper">
        <div className="loginContainer">
          <h1>Welcome back!</h1>
          <p>Login to continue</p>
          <Form
            name="loginForm"
            layout="vertical"
            labelCol={{
              span: 20,
            }}
            wrapperCol={{
              span: 22,
            }}
            style={{
              maxWidth: "100%",
              width: "100%",
              //   padding: "40px",
              //   margin: "0 auto",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label=<span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Username
              </span>
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                style={{
                  height: "50px",
                  fontSize: "18px",
                  outlineColor: "#30a281",
                }}
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
                Password
              </span>
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="inputArea"
                style={{
                  height: "50px",
                  fontSize: "18px",
                }}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                // offset: 8,
                span: 22,
              }}
            >
              <p className="subText">Forgot password</p>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                // offset: 8,
                span: 22,
              }}
            >
              <Button
                style={{
                  height: "50px",
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "whitesmoke",
                  backgroundColor: "#30a281",
                  // float: "left",
                }}
                // type="primary"
                // htmlType="submit"
                onClick={() => navigate("/")}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
