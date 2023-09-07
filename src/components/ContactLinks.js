import React from "react";
import { Row, Button } from "antd";
import { LinkedinFilled, GithubFilled, MailFilled } from "@ant-design/icons";

const ContactLinks = ({ email }) => {
  const emailMe = (e) => {
    const mailto = `mailto:${email}`;
    window.location.href = mailto;
    e.preventDefault();
  };

  return (
    <div className="w-1/3">
      <Row justify={"space-around"}>
        <Button
          type="link"
          icon={<GithubFilled style={{ fontSize: "24px" }} />}
          size="large"
          href="https://github.com/didiersnake"
          target="_blank"
        ></Button>
        <Button
          type="link"
          href="https://www.linkedin.com/in/didier-fotsing-599a56202/"
          target="_blank"
          icon={<LinkedinFilled style={{ fontSize: "24px" }} />}
          size="large"
        ></Button>
        <Button
          id="1"
          onClick={emailMe}
          type="link"
          icon={<MailFilled style={{ fontSize: "24px" }} />}
          size="large"
        ></Button>
        {/* <Button
        onClick={whatAppMe}
        type="link"
        icon={<WhatsAppOutlined />}
        size="large"
      ></Button> */}
      </Row>
    </div>
  );
};

export default ContactLinks;
