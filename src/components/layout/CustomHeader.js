import { Input, Typography } from 'antd';
import React, { useState } from 'react';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link, useHistory } from 'react-router-dom';
import Switch from "react-switch";
import ProfileActions from '../ProfileActions';

const { Title } = Typography;
const { Search } = Input;

const CustomHeader = (props) => {
  const history = useHistory();


  const [isDarkMode, setIsDarkMode] = useState(true);
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  return (
    <div style={{ padding: '5px', margin: "0", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
        <Link to='/'>
          <Title level={3} style={{ color: '#52c41a' }} >React Login Starter</Title>
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ProfileActions></ProfileActions>
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          onColor="#4F4B58"
          offColor="#4F4B58"
          onHandleColor="#27262C"
          offHandleColor="#EDF094"
          handleDiameter={26}
          uncheckedIcon={false}
          checkedIcon={false}
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20
              }}>
              <IoSunny />
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20
              }}
            >
              <IoMoon />
            </div>
          }
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={18}
          width={44}
          className="react-switch"
          id="material-switch"
        />
      </div>
    </div >
  );
};

export default CustomHeader;
