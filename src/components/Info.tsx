/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-25 17:43:51
 * @LastEditTime: 2023-05-29 15:32:50
 * @LastEditors: qingZhiKing
 */
import { Component, ReactNode } from "react";
// import PropTypes from "prop-types";

export default class Info extends Component {
  constructor(props: any) {
    super(props);
  }
  // static propTypes = {
  //   name: PropTypes.string.isRequired, //限制name必传，且为字符串
  //   sex: PropTypes.string, //限制sex为字符串
  //   age: PropTypes.number, //限制age为数值
  // };

  render(): ReactNode {
    // const { name } = this.props;
    console.log(this.props);
    return (
      <>
        <div>空立即哇</div>
      </>
    );
  }
}
