import React from 'react';
import md5 from 'md5';
import './login.scss';
import { Input, Button, message } from 'antd';
import { userLogin } from '../../assets/api/user';
import { clearAllInfo } from '../../assets/scripts/utils';

class Login extends React.Component {
  componentDidMount() {
    clearAllInfo();
  }

  render() {
    let formData = {
      username: '',
      password: '',
    };

    const getEmail = (e) => {
      formData.username = e.target.value;
    };

    const getPassword = (e) => {
      formData.password = e.target.value;
    };

    const submit = async () => {
      const { username, password } = formData;
      if (!username) {
        message.error('登录账号不能为空');
      } else if (!password) {
        message.error('密码不能为空');
      } else {
        await userLogin({ username, password: md5(password) }).then((res) => {
          localStorage.setItem('blog-userinfo', JSON.stringify(res));
          localStorage.setItem('blog-userinfo-token', res.token);
          message.success('主人，欢迎回来!');
          this.props.history.push('/');
        });
      }
    };

    // console.info(234, this.props);

    return (
      <div className="login dc">
        <div className="content">
          <div className="title">欢迎进入10个肉包子的博客系统</div>
          <div className="subtitle">WELCOME TO ZHOOSON SYSTEM</div>
          <div className="login-box">
            <div className="ipt">
              <img
                className="icon"
                src={require('../../assets/images/icon-user.png').default}
                alt=""
              />
              <Input
                size="small"
                onChange={getEmail}
                placeholder="登录账号"
                className="input"
              />
            </div>
            <div className="ipt">
              <img
                className="icon"
                src={require('../../assets/images/icon-lock.png').default}
                alt=""
              />
              <Input.Password
                size="small"
                onChange={getPassword}
                placeholder="登录密码"
                className="input input-demo"
              />
            </div>
            <div className="subbtn">
              <Button className="submit-btn" type="primary" onClick={submit}>
                登录
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
