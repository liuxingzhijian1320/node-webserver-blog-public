require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(177);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28b39246_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(180);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28b39246"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28b39246_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/open/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28b39246", Component.options)
  } else {
    hotAPI.reload("data-v-28b39246", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scripts_feedback__ = __webpack_require__(4);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "open",
  data: function data() {
    return {};
  },

  components: {},
  methods: {
    copy: function copy(url) {
      wx.setClipboardData({
        data: url,
        success: function success(res) {
          Object(__WEBPACK_IMPORTED_MODULE_3__assets_scripts_feedback__["c" /* showToast */])("复制成功");
        }
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(_this.$data, _this.$options.data());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  onShow: function onShow() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "open"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("1. 自游（旅游型H5）")]), _vm._v(" "), _c('div', {
    staticClass: "subtitle"
  }, [_c('h4', [_vm._v("前端-h5端(vue3+vue-router+vuex)\n        "), _c('a', {
    staticClass: "href",
    attrs: {
      "target": "_blank",
      "href": "http://h.sanzhikaola.com",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.copy('http://h.sanzhikaola.com')
      }
    }
  }, [_vm._v("预览地址")])]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("订单+收藏")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("我的")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("酒店+搜索+评论")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("登录，注册，找回密码，重置密码等")]), _vm._v(" "), _c('h4', [_vm._v("前端-pc端(nuxt) "), _c('a', {
    staticClass: "href",
    attrs: {
      "target": "_blank",
      "href": "http://www.sanzhikaola.com",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.copy('http://www.sanzhikaola.com')
      }
    }
  }, [_vm._v("预览地址（暂时没有开发完）")])]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("订单+收藏")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("我的")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("酒店+搜索+评论")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("登录，注册，找回密码，重置密码等")]), _vm._v(" "), _c('h4', [_vm._v("Admin后台系统(react17 + Hook + antd4)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("酒店管理（CURD）+房间（CURD）+ 上下架 + 上传图片 + 评论")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("用户管理（CURD）+ 管理员 + 超级管理 + 游客")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("订单列表")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("邮箱验证码列表")]), _vm._v(" "), _c('h4', [_vm._v("node后端（egg）")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("接口的编写")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("jwt验证")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("评论敏感词过滤")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("发送邮件")]), _vm._v(" "), _c('h4', [_vm._v("数据库(mysql)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("mysql")]), _vm._v(" "), _c('h4', [_vm._v("服务器端(centos+pm2+docker)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("pm2 运行 koa admin h5")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("nginx 代理转发")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("2. cnode社区 "), _c('a', {
    staticClass: "href",
    attrs: {
      "target": "_blank",
      "href": "https://github.com/liuxingzhijian1320/vue3-cnode",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://github.com/liuxingzhijian1320/vue3-cnode')
      }
    }
  }, [_vm._v("github地址")]), _vm._v(" "), _c('a', {
    staticClass: "href",
    attrs: {
      "target": "_blank",
      "href": "http://cnode.zhooson.cn",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.copy('http://cnode.zhooson.cn')
      }
    }
  }, [_vm._v("预览地址")])]), _vm._v(" "), _c('div', {
    staticClass: "subtitle"
  }, [_c('h4', [_vm._v("前端(vue3+vue-router+vuex)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("首页 ")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("发表")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("个人中心")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("token登录")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("自定义的plugins的实现")]), _vm._v(" "), _c('h4', [_vm._v("服务器端(centos+pm2)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("pm2 运行 h5")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("nginx 代理转发")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("3. 个人博客 "), _c('a', {
    staticClass: "href",
    attrs: {
      "target": "_blank",
      "href": "https://github.com/liuxingzhijian1320/node-webserver-blog-public",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://github.com/liuxingzhijian1320/node-webserver-blog-public')
      }
    }
  }, [_vm._v("github地址")]), _vm._v(" "), _c('a', {
    staticClass: "href",
    attrs: {
      "target": "_blank",
      "href": "https://www.zhooson.cn",
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://www.zhooson.cn')
      }
    }
  }, [_vm._v("预览地址")])]), _vm._v(" "), _c('div', {
    staticClass: "subtitle"
  }, [_c('h4', [_vm._v("前端(vue2+vue-router+vuex)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("首页 （思维导图（树状图））")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("文章 （文章列表，个人分类，热门文章，文章详情，文章目录结构）")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("个人开源（历年来的开源项目）")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("关于（关于项目介绍）")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("登录 （普通登录，Github 登录， QQ 登录）")]), _vm._v(" "), _c('h4', [_vm._v("Admin后台系统(vue2+vue-router+vuex)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("分类管理（CURD）")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("文章列表：CURD，上下架，上传图片，markdown 编辑器，评论列表按钮")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("评论列表：CURD，上下架，评论， 发邮件")]), _vm._v(" "), _c('h4', [_vm._v("KOA后端(koa2)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("接口的编写")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("jwt验证")]), _vm._v(" "), _c('h4', [_vm._v("数据库(mysql)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("mysql")]), _vm._v(" "), _c('h4', [_vm._v("服务器端(centos+pm2+docker)")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("pm2 运行 koa admin")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("docker 运行h5")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("nginx 代理转发")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("https证书绑定")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28b39246", esExports)
  }
}

/***/ })

},[176]);