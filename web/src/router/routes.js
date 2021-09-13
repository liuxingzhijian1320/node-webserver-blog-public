export default [
  {
    path: "/",
    name: "home",
    component: resolve => {
      require(["src/views/home/home"], resolve);
    },
    redirect: {
      //重定项 一面一打开显示那个页面
      name: "index"
    },
    children: [
      {
        path: "/",
        name: "index",
        component: resolve => {
          require(["src/views/index/index"], resolve);
        }
      },
      {
        path: "/article",
        name: "article",
        component: resolve => {
          require(["src/views/article/article"], resolve);
        }
      },
      {
        path: "/article/detail",
        name: "detail",
        component: resolve => {
          require(["src/views/article/detail"], resolve);
        }
      },
      {
        path: "/about",
        name: "about",
        component: resolve => {
          require(["src/views/about/about"], resolve);
        }
      },
      {
        path: "/open",
        name: "open",
        component: resolve => {
          require(["src/views/product/open"], resolve);
        }
      },
      {
        path: "/login",
        name: "login",
        component: resolve => {
          require(["src/views/login/login"], resolve);
        }
      },
      {
        path: "/user",
        name: "user",
        component: resolve => {
          require(["src/views/user/user"], resolve);
        }
      }
    ]
  }
];
