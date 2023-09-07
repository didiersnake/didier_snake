import React, { useState } from "react";
import Nav from "../components/sideNav/Nav";
import { Outlet } from "react-router-dom";
import { Content, Sider } from "antd/es/layout/layout";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex items-start">
      <Nav />
      <Content className="px-6 py-16">
        <Outlet />
      </Content>
    </div>
  );
};

export default Layout;
