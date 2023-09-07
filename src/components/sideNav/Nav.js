import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ConfigProvider, Menu, theme } from "antd";
import Profile from "./Profile";

function getItem(label, key) {
  return {
    key,
    label,
  };
}

const Nav = () => {
  const [current, setCurrent] = useState(localStorage.getItem("menuState"));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("menuState", current);
  });

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
    localStorage.setItem("menuState", e.key);
    console.log(e.key);
  };

  const items = [
    getItem("Home", "/"),
    getItem("About", "about"),
    getItem("Experience", "/experience"),
    getItem("Contact", "/contact"),
  ];
  return (
    <>
      <ConfigProvider theme={{}}>
        <div className=" max-w-[360px] min-h-screen text-center font-semibold border-r-[1px] py-8">
          <div className="grid gap-6 my-auto">
            <Profile />
            <Menu
              className="px-8 py-4 border-0"
              onClick={onClick}
              style={{
                width: 360,
              }}
              selectedKeys={[current]}
              mode="vertical"
              items={items}
            />
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Nav;
