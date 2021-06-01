import { LockOutlined, MailOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification, Typography } from "antd";
import React from 'react';
import { Link } from "react-router-dom";
import { register } from "../apis/authentication";
import UnAuthCustomLayout from '../components/layout/UnAuthCustomLayout';


const { Title } = Typography;

const Register = (props) => {
  const onFinish = (values) => {
    delete values.confirmPassword;
    register(values)
      .then(response => {
        notification.success({
          message: 'React Login Starter',
          description: "Thank you! You're successfully registered. Please Login to continue!",
        });
        props.history.push("/login");
      }).catch(error => {
        notification.error({
          message: 'React Login Starter',
          description: error.message || 'Sorry! Something went wrong. Please try again!'
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <UnAuthCustomLayout>
      <Title level={4}>Create Account</Title>
      <Form
        name="normal_signup"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your Name!",
            },
          ]}
        >
          <Input
            prefix={<SmileOutlined className="site-form-item-icon" />}
            placeholder="Your Name"
          />
        </Form.Item>
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
              message: "Please enter your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} htmlType="submit" block>
            Create Account
          </Button>
          Already have an account? <Link to="/login">Log in</Link>
        </Form.Item>
      </Form>
    </UnAuthCustomLayout>
  );
};

export default Register;
