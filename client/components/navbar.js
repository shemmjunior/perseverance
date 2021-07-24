import React from "react";
import styles from "../styles/Global.module.css";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

export default function Navbar({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <div className={styles.logo} />
      </Header>
      <Content className={styles.content}>
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Some button Contents</Footer>
    </Layout>
  );
}
