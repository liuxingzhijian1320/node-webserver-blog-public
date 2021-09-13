// 封装好 发送邮件
// app/service/tool.js

'use strict';

const Service = require('egg').Service;

// email
const nodemailer = require('nodemailer');

// phonecode
const Core = require('@alicloud/pop-core');
// 敏感词过滤
const Core2 = require('@alicloud/pop-core');

class ToolService extends Service {
  // 发送邮件(text / html 只能使用一个)
  async sendMail(email, subject, text, html) {
    // console.log(123, email, subject, text, html);
    // console.log('sendMail', email, subject, text, html);
    const user_email = '??????@qq.com';
    const transporter = nodemailer.createTransport({
      service: 'qq',
      secure: false,
      // secureConnection: true, // 使用 SSL
      port: 587,
      auth: {
        user: user_email,
        //这里密码不是qq密码，是你设置的smtp密码
        pass: '??????',
      },
    });

    const mailOptions = {
      from: user_email, // 发送者,与上面的user一致
      to: email, // 接收者,可以同时发送多个,以逗号隔开
      subject, // 标题
      text, // 文本
      html,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }

  // 发送验证码
  async sendPhonecode({ username, code }) {
    var client = new Core({
      accessKeyId: '??????',
      accessKeySecret: '??????',
      // securityToken: '<your-sts-token>', // use STS Token
      endpoint: '??????',
      apiVersion: '??????',
    });

    var params = {
      PhoneNumbers: username,
      SignName: '??????',
      TemplateCode: '??????',
      TemplateParam: JSON.stringify({ code }),
    };

    var requestOption = {
      method: 'POST',
    };

    return new Promise((resolve, reject) => {
      client.request('SendSms', params, requestOption).then(
        (result) => {
          console.log(JSON.stringify(result));
          resolve(result);
        },
        (ex) => {
          console.log(ex);
          reject(ex);
        }
      );
    });
  }

  // 敏感词过滤
  async sensitivewordsFilter(text) {
    var client = new Core2({
      accessKeyId: '??????',
      accessKeySecret: '??????',
      // securityToken: '<your-sts-token>', // use STS Token
      endpoint: '??????',
      apiVersion: '??????',
    });

    var params = {
      Tasks: [
        {
          Content: text,
        },
      ],
      Labels: [
        {
          Label: 'spam',
        },
        {
          Label: 'politics',
        },
        {
          Label: 'abuse',
        },
        {
          Label: 'terrorism',
        },
        {
          Label: 'porn',
        },
        {
          Label: 'flood',
        },
        {
          Label: 'contraband',
        },
        {
          Label: 'ad',
        },
      ],
    };

    var requestOption = {
      method: 'POST',
    };
    return new Promise((resolve, reject) => {
      client.request('ScanText', params, requestOption).then(
        (result) => {
          // console.log(JSON.stringify(result));
          resolve(JSON.stringify(result));
        },
        (ex) => {
          reject(ex);
        }
      );
    });
  }
}

module.exports = ToolService;
