/*
 * @Description:  HOME页面
 * @Author: qingZhiKing
 * @Date: 2023-06-15 14:27:11
 * @LastEditTime: 2023-09-13 15:13:07
 * @LastEditors: qingZhiKing
 */
import { useState } from "react";
// import { useImmer } from "use-immer";
import { Select } from "antd";
import "./home.less";

const tabList = [
  {
    name: "前端",
  },
  {
    name: "后端",
  },
];
const tabList1 = [
  {
    name: "推荐",
  },
  {
    name: "最新",
  },
  {
    name: "热门",
  },
];

function FixedTabs() {
  const [leftArr, setLeftArr]: Array<any> = useState(tabList);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (data: object, key: number) => {
    setActiveTab(key);
  };
  return (
    <div className="fixed-tabs">
      {leftArr.map((item: any, key: number) => {
        return (
          <div
            key={key}
            className={`fixed-tabs-item ${activeTab === key ? "active" : ""}`}
            onClick={() => {
              handleTabClick(item, key);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

function Content() {
  const [titleList, setTitleList]: Array<any> = useState(tabList1);
  const [activeTab, setActiveTab] = useState(0);
  const handleSetActiveTab = (key: number) => {
    setActiveTab(key);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="container">
        <div className="container-title">
          {titleList.map((item: any, key: number) => {
            return (
              <div
                key={key}
                className={`container-title-item ${
                  activeTab === key ? "active" : ""
                }`}
                onClick={() => {
                  handleSetActiveTab(key);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[{ value: "lucy", label: "Lucy" }]}
        />
      </div>
      <div></div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="left-fixed-tab"><FixedTabs /></div>
        <div className="center-container"><Content /></div>
        <div className="right-other">3</div>
      </div>
    </>
  );
}
