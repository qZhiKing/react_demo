/*
 * @Description:  HOME页面
 * @Author: qingZhiKing
 * @Date: 2023-06-15 14:27:11
 * @LastEditTime: 2023-09-12 14:56:31
 * @LastEditors: qingZhiKing
 */
import { useState } from "react";
import "./home.less";

const tabList = [
  {
    name: "龙",
  },
  {
    name: "饶骄阳",
  },
];

function FixedTabs() {
  const [leftArr, setLeftArr]: Array<any> = useState(tabList);
  return (
    <div className="fixed-tabs">
      {tabList.map((item, key) => {
        return (
          <div key={key} className="fixed-tab">
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="left-fixed-tab">{FixedTabs()}</div>
        <div className="center-container">2</div>
        <div className="right-other">3</div>
      </div>
    </>
  );
}
