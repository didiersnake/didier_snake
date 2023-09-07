import React from "react";
import { Image, Divider, Typography, Row } from "antd";
import { userDetails } from "../../utils/Details";
import ReactLogo from "../../assets/images/logo/react-2.svg";
import PostgreSqlLogo from "../../assets/images/logo/postgresql.svg";
import SpringLogo from "../../assets/images/logo/springio-icon.svg";

const { Title, Text } = Typography;

const Profile = () => {
  return (
    <div className="text-center bg-transparent">
      <Image
        className="rounded-full"
        width={240}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="grid gap-2 mt-3 ">
        <Title level={3}>{userDetails.name}</Title>
        <Row align={"middle"} className=" justify-self-center">
          <img className="w-6" src={ReactLogo} alt="react"></img>
          <Divider type="vertical" />
          <img className="w-6" src={PostgreSqlLogo} alt="react"></img>
          <Divider type="vertical" />
          <img className="w-6" src={SpringLogo} alt="react"></img>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
