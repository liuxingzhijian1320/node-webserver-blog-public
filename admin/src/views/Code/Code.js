import React, { Component, useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Button, Form, Input } from 'antd';
import { getCodeList } from '../../assets/api/code';
import { timeStampFormat } from '../../assets/scripts/utils';

class EmailCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      list: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0,

      username: '',
    };
  }

  componentDidMount() {
    this.GetList();
  }

  // 列表
  GetList = (p) => {
    this.setState({ ...p, loading: true });
    const { pageIndex, pageSize, username } = this.state;
    getCodeList({ pageIndex, pageSize, username }).then((res) => {
      this.setState({
        list: res.list,
        total: res.total - 0,
        loading: false,
      });
    });
  };

  render() {
    const { list, loading, pageIndex, total } = this.state;

    const columns = [
      {
        title: '账号',
        dataIndex: 'username',
        key: 'username',
        width: 100,
      },
      {
        title: '验证码',
        dataIndex: 'code',
        key: 'code',
        width: 100,
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        width: 100,
        render: (t, r) => {
          return r.type === 1 ? '邮箱' : '手机';
        },
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        width: 100,
        render: (t, r) => {
          return timeStampFormat(r.create_time);
        },
      },
    ];
    return (
      <div>
        <SearchBox f={this.GetList} fnAdd={this.fnAdd} />
        <Table
          columns={columns}
          dataSource={list}
          scroll={{ x: 1250 }}
          sticky
          rowKey={(row) => row.id}
          loading={loading}
          pagination={{
            position: ['bottomCenter'],
            defaultCurrent: pageIndex,
            total,
            showTotal: () => `total: ${total}`,
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50, 100],
            onChange: (pageIndex, pageSize) => {
              this.setState(
                {
                  pageIndex,
                  pageSize,
                },
                () => {
                  this.GetList();
                }
              );
            },
          }}
        />
      </div>
    );
  }
}

function SearchBox(props) {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={(d) => props.f(d)}
      style={{ padding: 15, margin: '10px 0' }}
    >
      <Form.Item label="账号" name="username">
        <Input placeholder="请输入账号" />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ marginRight: 20 }}
          type="primary"
          htmlType="submit"
          icon={<SearchOutlined />}
        >
          搜索
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(EmailCode);
