import { Typography } from 'antd';
import React from 'react';
import CustomLayout from '../components/layout/CustomLayout';
const { Title } = Typography;

const Home = (props) => {

  return (
    <CustomLayout>
      <Title level={1}>Home Page</Title>
    </CustomLayout>
  );
};

export default Home;
