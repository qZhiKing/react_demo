/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-09-19 16:32:35
 * @LastEditTime: 2023-09-19 16:44:46
 * @LastEditors: qingZhiKing
 */
export function getFixedTabs() {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: [
        {
          name: "前端",
        },
        {
          name: "后端",
        },
      ],
    });
  });
}
