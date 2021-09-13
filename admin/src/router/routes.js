import Dashboard from '../views/Dashboard/Index';
import Article from '../views/Article/Index';
import ArticleDetail from '../views/Article/Detail';
import ArticlelAdd from '../views/Article/Add';
import ArticleComment from '../views/Article/Comment';
import Code from '../views/Code/Code';
import User from '../views/User/User';
import Cate from '../views/Cate/Cate';
import Log from '../views/Log/Log';
import Loginlog from '../views/Loginlog/Loginlog';

import NoFoundPage from '../views/Error/404';

//eslint-disable-next-line
export default [
  {
    path: '/dashboard',
    component: Dashboard,
    title: '首页',
    meta: {
      icon: 'HomeOutlined',
      show: true,
    },
  },
  {
    path: '/article',
    component: Article,
    title: '文章',
    meta: {
      icon: 'EditOutlined',
      show: true,
    },
  },
  {
    path: '/article_detail/:id',
    component: ArticleDetail,
    title: '详情',
    meta: {
      icon: '',
      show: false,
    },
  },
  {
    path: '/article_add',
    component: ArticlelAdd,
    title: '新增',
    meta: {
      icon: '',
      show: false,
    },
  },
  {
    path: '/article_comment/:id',
    component: ArticleComment,
    title: '评论',
    meta: {
      icon: '',
      show: false,
    },
  },

  {
    path: '/user',
    component: User,
    title: '用户',
    meta: {
      icon: 'UserOutlined',
      show: true,
    },
  },
  {
    path: '/cate',
    component: Cate,
    title: '分类',
    meta: {
      icon: 'AimOutlined',
      show: true,
    },
  },
  {
    path: '/code',
    component: Code,
    title: '验证码',
    meta: {
      icon: 'CodepenOutlined',
      show: true,
    },
  },
  {
    path: '/log',
    component: Log,
    title: 'IP日志',
    meta: {
      icon: 'DashboardOutlined',
      show: true,
    },
  },
  {
    path: '/loginlog',
    component: Loginlog,
    title: '登录日志',
    meta: {
      icon: 'EnvironmentOutlined',
      show: true,
    },
  },
  {
    path: '/error/404',
    component: NoFoundPage,
    title: '404',
    meta: {
      icon: '',
      show: false,
    },
  },
];
