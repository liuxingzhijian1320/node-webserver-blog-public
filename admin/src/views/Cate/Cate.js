import React, { Component, useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import {
  SearchOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Table, Button, Form, Input, Modal, message } from 'antd';
import AddUpdate from '../../components/cateAddUpdate';
import { timeStampFormat } from '../../assets/scripts/utils';

import { getCateList, delCateOne } from '../../assets/api/cate';

class Cate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      list: [],

      name: '',

      showAddUpdate: false,
      selectData: {},
    };
  }

  componentDidMount() {
    this.GetList();
  }

  updateHandler(record) {
    this.setState({
      showAddUpdate: true,
      selectData: record,
    });
  }

  delHandler(text, record) {
    const { name, id } = record;

    Modal.confirm({
      title: `您确定删除 ${name} 吗？`,
      icon: <ExclamationCircleOutlined />,
      content: '删除后数据无法恢复',
      okText: '删除',
      okType: 'danger',
      cancelText: '返回',
      onOk: () => {
        delCateOne({ id }).then(() => {
          message.success('删除成功');
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
    const { pageIndex, pageSize, name } = this.state;
    getCateList({ pageIndex, pageSize, name }).then((res) => {
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
        title: '操作',
        width: 100,
        dataIndex: 'opt',
        key: 'opt',
        fixed: 'left',
        render: (text, record) => (
          <div>
            <Button
              type="danger"
              style={{ marginRight: '10px' }}
              onClick={() => this.delHandler(text, record)}
            >
              删除
            </Button>
          </div>
        ),
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 140,
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
        {this.state.showAddUpdate && (
          <AddUpdate
            selectData={this.state.selectData}
            fn={this.fn}
            showAddUpdate={this.state.showAddUpdate}
          />
        )}
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
      <Form.Item label="名称" name="name">
        <Input placeholder="请输入名称" />
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

        <Button
          type="primary"
          onClick={props.fnAdd}
          ghost
          icon={<PlusOutlined />}
        >
          新增
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(Cate);
