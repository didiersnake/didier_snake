import React from "react";
import Description from "../components/Experience/Description";
import SkillBar from "../components/Experience/SkillBar";
import { Col, Row, Typography } from "antd";

function getItem(label, number) {
  return {
    label,
    number,
  };
}

const { Title } = Typography;

const Experience = () => {
  const skillsArray = [
    getItem("HTML", 95),
    getItem("CSS", 80),
    getItem("Javascript", 80),
    getItem("Java", 40),
    getItem("Tailwind css", 80),
    getItem("SQL & MySQL", 70),
    getItem("React & Redux", 75),
    getItem("Spring Boot", 30),
  ];

  const skills = skillsArray.map((item) => {
    return (
      <SkillBar key={item.label} language={item.label} percent={item.number} />
    );
  });
  console.log(skillsArray);
  return (
    <div className="px-6">
      <Title level={1}>Experience </Title>
      <div className="grid">
        <Description />
        <div>
          <Title level={2}>Skills</Title>
          <Row wrap align={"top"} justify={"space-between"}>
            {skills}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Experience;
