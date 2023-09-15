/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-09-14 15:41:40
 * @LastEditTime: 2023-09-15 10:34:50
 * @LastEditors: qingZhiKing
 */
import "./InfoBox.less";
import DefaultImg from "@/assets/bg1.png";

export default function InfoBox({ info }: any) {
  return (
    <>
      <div className="info">
        <div className="box">
          <div className="info-box">
            <div>{info.title}</div>
            <div>{info.content}</div>
            <div>
              <div>
                <span>{info.author}</span>
                <span>{info.view}</span>
                <span>{info.like}</span>
              </div>
              {/* <div>
                {info.tags.map((item: any, key: number) => {
                  return <span key={key}>{item}</span>;
                })}
              </div> */}
            </div>
          </div>
          {info.img && (
            <div className="info-img">
              <img src={DefaultImg} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
