import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "../static/css/Index.css";

import { Route } from "react-router-dom";
import AddArticle from "./AddArticle";

const { Header, Sider, Content } = Layout;

function Index() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible="true" collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            工作台
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            文章管理
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            文章管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <div>
              <Route path="/index/" exact component={AddArticle}></Route>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Index;
