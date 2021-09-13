import React, { Component, useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Table, Button, Form, Input, Select, Modal, message } from 'antd';

import { userList, userAban } from '../../assets/api/user';

const { Option } = Select;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      list: [],

      username: '',
      nickname: '',
      status: '',

      selectData: {},
    };
  }

  componentDidMount() {
    this.GetList();
  }

  downHandler(text, record) {
    const { nickname, id, status } = record;

    Modal.confirm({
      title: `提示`,
      icon: <ExclamationCircleOutlined />,
      content: `您确定${status === 1 ? '禁用' : '启用'} ${nickname} 吗？`,
      okText: '确定',
      okType: record.status === 1 ? 'danger' : 'primary',
      cancelText: '返回',
      onOk: () => {
        userAban({ id }).then(() => {
          message.success('操作成功');
          this.GetList();
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // 列表
  GetList = (p) => {
    this.setState({ ...p, loading: true });
    const { pageIndex, pageSize, username, nickname, status } = this.state;
    userList({ pageIndex, pageSize, username, nickname, status }).then(
      (res) => {
        this.setState({
          list: res.list,
          total: res.total - 0,
          loading: false,
        });
      }
    );
  };

  fn = ({ needReload = false }) => {
    if (needReload) {
      this.GetList();
    }
    this.setState({ showAddUpdate: false });
  };

  render() {
    const { list, loading, pageIndex, total } = this.state;

    const columns = [
      {
        title: '操作',
        width: 100,
        dataIndex: 'opt',
        key: 'opt',
        fixed: 'left',
        render: (text, record) => (
          <div>
            <Button
              type={record.status === 1 ? 'danger' : 'primary'}
              style={{ marginRight: '10px' }}
              onClick={() => this.downHandler(text, record)}
            >
              {record.status === 1 ? '禁用' : '正常'}
            </Button>
          </div>
        ),
      },
      {
        title: '登录账号',
        dataIndex: 'username',
        key: 'username',
        width: 140,
      },
      {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
        width: 100,
      },
      {
        title: '用户状态',
        dataIndex: 'status',
        key: 'status',
        width: 100,
        render: (t, r) => {
          return r.status === 1 ? '正常' : '禁用';
        },
      },
    ];
    return (
      <div>
        <SearchBox f={this.GetList} />
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
      <Form.Item label="" name="nickname">
        <Input placeholder="请输入昵称" />
      </Form.Item>
      <Form.Item label="" name="username">
        <Input placeholder="请输入登录账号" />
      </Form.Item>
      <Form.Item label="用户状态" name="status">
        <Select style={{ width: 160 }} placeholder="请选择状态">
          <Option value="">全部</Option>
          <Option value="1">正常</Option>
          <Option value="0">禁用</Option>
        </Select>
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

export default withRouter(User);
