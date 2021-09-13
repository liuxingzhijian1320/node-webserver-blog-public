import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import { Layout, Comment, Avatar, Card, Empty, Modal, message } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

import {
  getArticleCommentList,
  delCommentOne,
  delReplyOne,
} from '../../assets/api/article';

const { Content } = Layout;
const { confirm } = Modal;

function ArticleComment() {
  let { id } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const getList = () => {
    const params = {
      article_id: id,
      pageIndex: 1,
      pageSize: 100,
    };
    setLoading(true);
    getArticleCommentList(params).then((res) => {
      setList(res.list);
      setLoading(false);
    });
  };

  const delComment = (item) => {
    const { content, id } = item;

    console.log(4234, item);

    confirm({
      title: `您确定删除 ${content} 吗？`,
      icon: <ExclamationCircleOutlined />,
      content: '删除后数据无法恢复',
      okText: '删除',
      okType: 'danger',
      cancelText: '返回',
      onOk: () => {
        if (item.article_id) {
          delCommentOne({ id }).then(() => {
            message.success('删除成功');
            getList();
          });
        } else {
          delReplyOne({ id }).then(() => {
            message.success('删除成功');
            getList();
          });
        }
      },
    });
  };

  const ExampleComment = ({ children, item }) => (
    <Comment
      actions={[
        <span key="comment-nested-reply-to" onClick={() => delComment(item)}>
          删除
        </span>,
      ]}
      author={
        <a>{item?.user ? item.user.nickname : item.from_user.nickname}</a>
      }
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p>{item.content}</p>}
    >
      {children}
    </Comment>
  );

  return (
    <Card title="评论" loading={loading}>
      <Content>
        {list.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}

        {list.map((item) => (
          <ExampleComment key={item.id} item={item}>
            {item.replyList.map((code) => (
              <ExampleComment key={code.id} item={code}></ExampleComment>
            ))}
          </ExampleComment>
        ))}
      </Content>
    </Card>
  );
}

export default withRouter(ArticleComment);
