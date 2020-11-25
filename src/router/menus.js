import React, { lazy } from "react";  //使用路由懒加载，实验性阶段
import { HomeOutlined, PictureOutlined, PicLeftOutlined, MenuOutlined } from "@ant-design/icons";
const menus = [
  // {
  //   path: "/",
  //   component: "/home",
  //   meta: {
  //     hidden: true,
  //   }
  // },
  {
    path: "/",
    title: "系统首页",
    icon: <HomeOutlined />,
    component: lazy(() => import("./../views/home/Index")),
  },
  {
    path: "/bannermanager",
    title: "轮播图管理",
    icon: <PictureOutlined />,
    redirect: "/bannermanager/list",
    children: [
      {
        path: "/bannermanager/list",
        title: "轮播图列表",
        icon: <MenuOutlined />,
        component: lazy(() => import("./../views/banner/List")),
      },
      {
        path: "/bannermanager/add",
        title: "添加轮播图",
        icon: <MenuOutlined />,
        component: lazy(() => import("./../views/banner/Add")),
        meta: {
          hidden: true,
        },
      },
    ],
  },
  {
    path: "/navigatormanager",
    title: "快捷导航管理",
    icon: <PicLeftOutlined />,
    redirect: "/navgatormanager/list",
    children: [
      {
        path: "/navgatormanager/list",
        title: "导航列表",
        icon: <MenuOutlined />,
        component: lazy(() => import("./../views/navgator/List")),
      },
      {
        path: "/navgatormanager/category",
        title: "导航分类",
        icon: <MenuOutlined />,
        component: lazy(() => import("./../views/navgator/Category")),
      },
      {
        path: "/navgatormanager/hoemlist",
        title: "首页导航",
        icon: <MenuOutlined />,
        component: lazy(() => import("./../views/navgator/HomeList")),
      },
    ],
  },
  {
    path: "/seckillmanager",
    title: "秒杀管理",
    icon: <PicLeftOutlined />,
    component: lazy(() => import("./../views/seckill/List")),
  },
];

export default menus;
