import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification, Typography } from "antd";
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from "../apis/authentication";
import UnAuthCustomLayout from '../components/layout/UnAuthCustomLayout';
import { JWT_TOKEN } from '../constants/constants';
const { Title } = Typography;

const Login = (props) => {
  const onFinish = (values) => {
    login(values)
      .then(response => {
        localStorage.setItem(JWT_TOKEN, response.jwtToken);
        notification.success({
          message: 'React Login Starter',
          description: "You're successfully logged in.",
        });
        props.history.push("/");
      }).catch(error => {
        notification.error({
          message: 'React Login Starter',
          description: 'Your Username or Password is incorrect. Please try again!'
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <UnAuthCustomLayout>
      <Title level={4}> Log In </Title>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter your Email!",
            },
          ]}
          hasFeedback
        >
          <Input

            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="yourmail@domain.com"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type={"primary"} htmlType="submit" block>
            Log In
          </Button>
          Don't have an account?<Link to="/register"> Create One</Link>
        </Form.Item>
      </Form>
    </UnAuthCustomLayout>
  );
};

export default Login;
