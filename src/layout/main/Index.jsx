import React from "react";
import { Layout } from "antd";

import SideMenu from "./SideMenu";
import MainHeader from "./MainHeader";
import RouterView from './../../router/RouterView'

import logo from "./../../jd_logo.png";

const { Sider, Content } = Layout;

class Index extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ borderColor: "red" }}
        >
          <div className="logo">
            <img
              src={logo}
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "16px 10px",
                borderRadius: "16px",
              }}
            />
            {this.state.collapsed ? null : (
              <span style={{ lineHeight: "64px", marginRight: "20px" }}>
                JD ADMIN PRO
              </span>
            )}
          </div>
          <SideMenu />
        </Sider>
        <Layout className="site-layout">
          <MainHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              position: "relative",
            }}
          >
            <RouterView />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
