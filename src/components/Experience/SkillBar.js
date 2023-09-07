import React from "react";
import { Progress, Space, Col } from "antd";
import Title from "antd/es/typography/Title";

const SkillBar = ({ language, percent }) => {
  return (
    <>
      <div>
        <Title level={5}>{language}</Title>
        <Progress
          percent={percent}
          status="active"
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
          size={[400, 10]}
          showInfo={false}
        />
      </div>
    </>
  );
};

export default SkillBar;
