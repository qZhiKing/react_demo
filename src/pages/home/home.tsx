/*
 * @Description:  HOME页面
 * @Author: qingZhiKing
 * @Date: 2023-06-15 14:27:11
 * @LastEditTime: 2023-11-14 09:31:40
 * @LastEditors: qingZhiKing
 */
import { useState, useEffect } from "react";
import type { FC } from "react";
// import { useImmer } from "use-immer";
import { Select, Button } from "antd";
import { getFixedTabs } from "../../mock/home";
import InfoBox from "../../components/InfoBox";

import "./home.less";

let tabList: any = [];
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
const tabList2 = [
  {
    name: "推荐",
  },
  {
    name: "热门",
  },
];
const init = async () => {
  const res: any = await getFixedTabs();
  if (res.code === 200) {
    tabList = res.data;
  }
};
init();
function FixedTabs({ leftArr }: any) {
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

function Content({ headTabs }: any) {
  const [activeTab, setActiveTab] = useState(0);
  const handleSetActiveTab = (key: number) => {
    setActiveTab(key);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const infoBoxList = [
    {
      title: "写给前端的一句话",
      content: "从Vue到React的过渡之路，快速上手React。",
      author: "修够不会修狗",
      view: "6923",
      like: "125",
      tags: ["Vue", "React"],
    },
    {
      title: "写给后端的一句话",
      content: "从Vue到React的过渡之路，快速上手React。",
      author: "修够不会修狗",
      view: "6923",
      like: "125",
      img: true,
      tags: ["Vue", "React"],
    },
  ];

  return (
    <>
      <div className="container">
        <div className="container-title">
          {headTabs.map((item: any, key: number) => {
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
      <div className="info-content">
        {infoBoxList.map((item: any, key: number) => {
          return <InfoBox key={key} info={item} />;
        })}
      </div>
    </>
  );
}

function RightOther() {
  let title = "";
  const hour = new Date().getHours();
  if (hour < 12) {
    title = "上午好";
  } else if (hour < 18) {
    title = "下午好";
  } else {
    title = "晚上好";
  }
  const handleToSign = () => {
    console.log("去签到");
  };
  return (
    <>
      <div className="tag_item tag_item1">
        <div>
          <span>{title}!</span>
          <div className="tag_item1-title">点亮在社区的每一天</div>
        </div>
        <Button onClick={handleToSign}>去签到</Button>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  );
}
const Home: FC = () => {
  const [leftTabArr, setLeftTabArr]: Array<any> = useState(tabList);
  const [centerTabs, setCenterTabs]: Array<any> = useState(tabList1);
  return (
    <>
      <div className="main">
        <div className="left-fixed-tab">
          <FixedTabs leftArr={leftTabArr} />
        </div>
        <div className="center-container">
          <Content headTabs={centerTabs} />
        </div>
        <div className="right-other">
          <RightOther />
        </div>
      </div>
    </>
  );
};

export default Home;
