import React from "react";
import { Menu } from "antd";
import { withRouter, useHistory } from "react-router-dom";
import menus from "./../../router/menus";

const { SubMenu } = Menu;

const SideMenu = withRouter((props) => {
  const history = useHistory();
  const renderMenu = (menus) => {
    return (
      <>
        {menus.map((item) => {
          if (item.children) {
            return (
              <SubMenu key={item.path} icon={item.icon} title={item.title}>
                {renderMenu(item.children)}
              </SubMenu>
            );
          } else {
            return item.meta && item.meta.hidden ? null : (
              <Menu.Item key={item.path} icon={item.icon}>
                {item.title}
              </Menu.Item>
            );
          }
        })}
      </>
    );
  };
  const goPage = ({ key }) => {
    history.push(key);
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      onClick={goPage}
    >
      {renderMenu(menus)}
    </Menu>
  );
});

export default SideMenu;
