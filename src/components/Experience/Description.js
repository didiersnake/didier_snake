import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;
const Description = () => {
  return (
    <>
      <Row align={"top"} justify={"space-evenly"}>
        <Col span={12}>
          <Text>
            Throughout my career as a software developer I've focused on
            developing scaleable and well documented code. I enjoy working
            collaboratively but can also run with projects on my own.
          </Text>
        </Col>
        <Col span={12}>
          <div className="flex items-center justify-center">
            <Button>
              <Link to="/">Download my CV for details</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Description;
