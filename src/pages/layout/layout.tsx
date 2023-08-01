/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-08-01 11:28:23
 * @LastEditTime: 2023-08-01 14:03:01
 * @LastEditors: qingZhiKing
 */
import { Layout } from "antd";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import routes from "@/route";
import "./layout.less";

export default function LayoutHTML() {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout className="layout">
        <Header className="head">
          <div className="head-group">
            <NavLink className="head-group-item" to="/home">
              主页
            </NavLink>
            <NavLink className="head-group-item" to="/content">
              文章
            </NavLink>
          </div>
        </Header>
        <Content className="content">
          <Routes>
            {routes.map((item, key) => {
              return (
                <Route
                  key={key}
                  path={item.path}
                  element={<item.component />}
                />
              );
            })}
            <Route path="/" element={<Navigate to="/home" />}></Route>
          </Routes>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </>
  );
}
