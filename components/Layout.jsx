import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import Nav from "./Nav";
import Footer from "./Footer";
const { Header, Content } = Layout;
const Layoutt = ({ children }) => (
  <Layout
    style={{
      backgroundColor: "white",
    }}
    className="layout h-100"
  >
    <Nav />

    <Content
      style={{
        padding: "15px 50px",
        marginBottom: "20px",

        backgroundColor: "white",
      }}
    >
      <div className="">{children}</div>
    </Content>
    <Footer />
  </Layout>
);
export default Layoutt;
