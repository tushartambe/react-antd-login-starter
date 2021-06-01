import { Typography } from 'antd';
import React from 'react';
import CustomLayout from '../components/layout/CustomLayout';
const { Title } = Typography;

const Profile = (props) => {

  return (
    <CustomLayout>
      <Title level={1}>Profile Page</Title>
    </CustomLayout>
  );
};

export default Profile;
