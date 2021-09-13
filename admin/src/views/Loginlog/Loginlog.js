import React, { Component, useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import { SearchOutlined } from '@ant-design/icons';
import { Table, Button, Form, Input } from 'antd';
import { timeStampFormat } from '../../assets/scripts/utils';

import { getLoginlogList } from '../../assets/api/loginlog';

class Loginlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      list: [],

      ip: '',
      showAddUpdate: false,
      selectData: {},
    };
  }

  componentDidMount() {
    this.GetList();
  }

  // 列表
  GetList = (p) => {
    this.setState({ ...p, loading: true });
    const { pageIndex, pageSize, ip } = this.state;
    getLoginlogList({ pageIndex, pageSize, ip }).then((res) => {
      this.setState({
        list: res.list,
        total: res.total - 0,
        loading: false,
      });
    });
  };

  fn = ({ needReload = false }) => {
    if (needReload) {
      this.GetList();
    }
    this.setState({ showAddUpdate: false });
  };

  fnAdd = () => {
    this.setState({
      showAddUpdate: true,
      selectData: {},
    });
  };

  render() {
    const { list, loading, pageIndex, total } = this.state;

    const columns = [
      {
        title: 'ip',
        dataIndex: 'ip',
        key: 'ip',
        width: 100,
      },
      {
        title: '登录昵称',
        dataIndex: 'day',
        key: 'day',
        width: 100,
        render: (t, r) => {
          return r.userInfo.nickname;
        },
      },
      {
        title: '客户端',
        dataIndex: 'client',
        key: 'client',
        width: 200,
      },
      {
        title: '登录类型',
        dataIndex: 'client',
        key: 'client',
        width: 50,
        render: (t, r) => {
          if (r.type === 2) {
            return 'admin系统';
          } else if (r.type === 3) {
            return 'web';
          }
        },
      },

      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        width: 100,
        render: (t, r) => {
          return r.create_time && timeStampFormat(r.create_time);
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
      <Form.Item label="IP" name="ip">
        <Input placeholder="请输入IP" />
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

export default withRouter(Loginlog);
