import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Dropdown, Menu, notification } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { JWT_TOKEN } from '../constants/constants';

const ProfileActions = (props) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem(JWT_TOKEN);

    history.push("/login");

    notification.success({
      message: 'React Login Starter',
      description: "You've successfully logged out.",
    });
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />} onClick={() => history.push("/profile")}>
        Profile
    </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />} onClick={() => history.push("/setttings")}>
        Settings
    </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={logout}>
        Log Out
    </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} arrow>
      <Button type="primary" shape="circle" icon={<UserOutlined />} />
    </Dropdown >
  );
};

export default ProfileActions;
