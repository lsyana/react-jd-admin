import React,{ useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

function MainHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
     <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      { 
        collapsed ? 
        <MenuUnfoldOutlined style={{ fontSize: '24px' }} className="trigger" onClick={toggle}/> : 
        <MenuFoldOutlined style={{ fontSize: '24px' }} className="trigger" onClick={toggle}/>
      } 
    </Header>
    </>
  );
}

export default MainHeader;
