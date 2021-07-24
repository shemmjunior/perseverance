import React from "react";
import styles from "../styles/Global.module.css";
import { Layout, Typography, Button } from "antd";
import { MailFilled } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

export default function Navbar({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <Typography.Title level={4} className={styles.logo}>
          PERSEVERANCE
        </Typography.Title>
        <Button className={styles.nav_right_items} type="ghost" icon={<MailFilled />}>
          Get Product Updates
        </Button>
      </Header>
      <Content className={styles.content}>
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Some button Contents</Footer>
    </Layout>
  );
}
