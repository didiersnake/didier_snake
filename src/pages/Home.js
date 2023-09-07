import React from "react";
import { userDetails } from "../utils/Details";
import { Space, Typography, Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { downloadFile } from "../utils/fileDownload";
import ContactLinks from "../components/ContactLinks";
import Img1 from "../assets/images/code1.png";
import Img2 from "../assets/images/code2.png";

const { Title, Text } = Typography;
const resumeFile = require("../assets/resumeCV/Didier.pdf");
const { name, description, email } = userDetails;

const Home = () => {
  const downloadCV = () => {
    downloadFile(resumeFile);
  };

  return (
    <Row align={"top"}>
      <Col className="px-6" span={12}>
        <Title className="pb-3 " level={1}>
          Hello! <br /> I'm {name}
        </Title>
        <Space direction="vertical" size={36}>
          <Text className="tracking-wide ">{description}</Text>
          <Button
            onClick={downloadCV}
            type="primary"
            icon={<DownloadOutlined />}
            size={"large"}
          >
            Download CV
          </Button>
          <ContactLinks email={email} />
        </Space>
      </Col>
      <Col className="px-6" span={12}>
        <Images image={Img1} image2={Img2} />
      </Col>
    </Row>
  );
};

const Images = ({ image, image2 }) => {
  return (
    <div className="flex flex-col items-start">
      <img className="w-[85%]" src={image2} alt="img" />
      <img className="w-[90%] -mt-96 mx-8" src={image} alt="img" />
    </div>
  );
};
export default Home;
