/*
 * @Description:  HOME页面
 * @Author: qingZhiKing
 * @Date: 2023-06-15 14:27:11
 * @LastEditTime: 2023-07-18 09:24:58
 * @LastEditors: qingZhiKing
 */
// import { Link } from "react-router-dom";
import { Layout } from "antd";
import React from "react";

export default function Home() {
  const { Header, Footer, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  const layoutStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>龙明培是帅哥</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </>
  );
}
