import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">
        <Link to="/">返回首页</Link>
      </Button>
    }
  />
);

export default NoFoundPage;
