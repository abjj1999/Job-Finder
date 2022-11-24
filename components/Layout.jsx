import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import Nav from "./Nav";
import Footer from "./Footer";
const { Header, Content } = Layout;
const Layoutt = ({ children }) => (
  <Layout className="layout">
    <Nav />

    <Content
      style={{
        padding: "15px 50px",
        marginBottom: "20px",
        marginTop: "10px",
        backgroundColor: "white",
      }}
    >
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer />
  </Layout>
);
export default Layoutt;
