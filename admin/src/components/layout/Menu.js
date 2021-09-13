import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

// import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import routes from '../../router/routes';

class MyMenu extends React.Component {
  render() {
    return (
      <Menu theme="dark" mode="inline">
        {routes.map(
          (item) =>
            item.meta.show && (
              <Menu.Item
                key={item.path}
                icon={item.meta.icon ? RouterIcon(item.meta.icon) : ''}
              >
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            )
        )}
      </Menu>
    );
  }
}

const RouterIcon = (iconType) => {
  return React.createElement(Icon[iconType], {
    style: { fontSize: '16px', color: '#08c' },
  });
};

export default MyMenu;
