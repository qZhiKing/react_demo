/*
 * @Description:  react路由
 * @Author: qingZhiKing
 * @Date: 2023-06-15 14:29:32
 * @LastEditTime: 2023-06-15 17:36:45
 * @LastEditors: qingZhiKing
 */

import Home from "@/pages/home/home";
import Content from "@/pages/content/content";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/content",
    component: Content,
  },
];
export default routes;
