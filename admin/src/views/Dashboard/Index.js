import React, { Component } from 'react';
import './index.scss';

class Index extends Component {
  render() {
    return (
      <div className="shadow-radius">
        <div>
          <h1 className="title">
            {/* 这是一个后台管理系统，基于 react+react-router+hook+antd 开发。 */}
            10个肉包子的博客
          </h1>

          <ul className="project">
            <li className="project-item">
              网站：
              <a href="https://www.zhooson.cn" target="_blank">
                https://www.zhooson.cn
              </a>
            </li>
            <li className="project-item">
              后台管理系统：{' '}
              <a href="https://admin.zhooson.cn" target="_blank">
                https://admin.zhooson.cn
              </a>{' '}
              测试账号：test 密码：0000
            </li>
            <li className="project-item">小程序：10个肉包子</li>
            <li className="project-item">公众号：10个肉包子</li>
          </ul>

          <div className="imgs">
            <div className="img-item">
              <img
                className="img"
                src={require('../../assets/images/wechat.jpg').default}
                alt="微信"
              />
              微信二维码
            </div>
            <div className="img-item">
              <img
                className="img"
                src={require('../../assets/images/min.jpg').default}
                alt="小程序"
              />
              小程序二维码
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
