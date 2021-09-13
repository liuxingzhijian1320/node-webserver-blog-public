import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { timeStampFormat } from '../../assets/scripts/utils';
import {
  SearchOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { Table, Button, Form, Input, Select, Modal, message } from 'antd';

import {
  getArticleList,
  delArticlelOne,
  hiddenArticle,
  abanArticle,
} from '../../assets/api/article';

const { Option } = Select;
const { confirm } = Modal;

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      list: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      title: '',
      is_del: '',
    };
  }

  componentDidMount() {
    this.GetList();
  }

  delHandler(text, record) {
    const { title, id } = record;

    confirm({
      title: `您确定删除 ${title} 吗？`,
      icon: <ExclamationCircleOutlined />,
      content: '删除后数据无法恢复',
      okText: '删除',
      okType: 'danger',
      cancelText: '返回',
      onOk: () => {
        delArticlelOne({ id }).then(() => {
          message.success('删除成功');
          this.GetList();
        });
      },
    });
  }

  hiddenHandler(h) {
    confirm({
      title: `确认${h.is_del === 1 ? '下架' : '上架'}《${h.title}》吗?`,
      onOk: () => {
        hiddenArticle({ id: h.id }).then((res) => {
          message.success(res.message);
          this.GetList();
        });
      },
      okText: '确认',
      cancelText: '取消',
    });
  }

  abanHandler(h) {
    confirm({
      title: `确认${h.istop === 1 ? '取消置顶' : '置顶'}《${h.title}》吗?`,
      onOk: () => {
        abanArticle({ id: h.id }).then((res) => {
          message.success(res.message);
          this.GetList();
        });
      },
      okText: '确认',
      cancelText: '取消',
    });
  }

  GetList = (p) => {
    this.setState({ ...p, loading: true });
    const { pageIndex, pageSize, title, is_del } = this.state;
    getArticleList({ pageIndex, pageSize, title, is_del }).then((res) => {
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
        title: '操作',
        width: 430,
        dataIndex: 'opt',
        key: 'opt',
        fixed: 'left',
        render: (text, record) => (
          <div>
            <Button type="primary" style={{ marginRight: '10px' }}>
              <Link to={`/article_detail/${record.id}`}>详情</Link>
            </Button>
            <Button
              type="danger"
              style={{ marginRight: '10px' }}
              onClick={() => this.delHandler(text, record)}
            >
              删除
            </Button>
            {record.is_del === 0 && (
              <Button
                type="ghost"
                onClick={() => this.hiddenHandler(record)}
                style={{ marginRight: '10px' }}
              >
                上架
              </Button>
            )}
            {record.is_del === 1 && (
              <Button
                type="dashed"
                onClick={() => this.hiddenHandler(record)}
                danger
                style={{ marginRight: '10px' }}
              >
                下架
              </Button>
            )}
            <Button type="dashed" style={{ marginRight: '10px' }}>
              <Link to={`/article_comment/${record.id}`}>评论</Link>
            </Button>
            {record.istop === 0 && (
              <Button
                type="ghost"
                onClick={() => this.abanHandler(record)}
                style={{ marginRight: '10px' }}
              >
                置顶
              </Button>
            )}
            {record.istop === 1 && (
              <Button
                type="dashed"
                onClick={() => this.abanHandler(record)}
                danger
                style={{ marginRight: '10px' }}
              >
                取消置顶
              </Button>
            )}
          </div>
        ),
      },
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: 150,
        ellipsis: true,
      },
      {
        title: '封面',
        dataIndex: 'cover',
        key: 'cover',
        width: 80,
        render: (v) => {
          return (
            <div>
              <img width="50" height="50" src={v} alt="" />
            </div>
          );
        },
      },
      {
        title: '标签',
        dataIndex: 'tag',
        key: 'tag',
        width: 120,
        render: (v, t) => {
          return t.taglist.map((c) => c.name).join(',') || '';
        },
      },
      {
        title: '浏览量',
        dataIndex: 'browser',
        key: 'browser',
        width: 80,
      },
      {
        title: '简介',
        dataIndex: 'introduction',
        key: 'introduction',
        ellipsis: true,
        width: 100,
      },
      {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        ellipsis: true,
        width: 100,
      },
      {
        title: '状态',
        dataIndex: 'is_del',
        key: 'is_del',
        width: 80,
        render: (v) => {
          return v === 1 ? '已上架' : '已下架';
        },
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        width: 230,
        render: (v) => {
          return v && timeStampFormat(v);
        },
      },
      {
        title: '更新时间',
        dataIndex: 'update_time',
        key: 'update_time',
        width: 230,
        render: (v) => {
          return v && timeStampFormat(v);
        },
      },
    ];
    return (
      <div>
        <SearchBox f={this.GetList} />
        <Table
          columns={columns}
          dataSource={list}
          scroll={{ x: 1350 }}
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
      <Form.Item label="标题" name="title">
        <Input placeholder="请输入标题" />
      </Form.Item>
      <Form.Item label="状态" name="is_del">
        <Select style={{ width: 160 }} placeholder="请选择状态">
          <Option value="">全部</Option>
          <Option value="1">上架</Option>
          <Option value="0">下架</Option>
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
        <Link to={`/article_add`}>
          <Button type="primary" ghost icon={<PlusOutlined />}>
            新增
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
}

export default withRouter(Hotel);
