require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(106);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d0f7f70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d0f7f70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d0f7f70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/about/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d0f7f70", Component.options)
  } else {
    hotAPI.reload("data-v-6d0f7f70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
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
  name: "about",
  data: function data() {
    return {
      countdown: "",
      code: __webpack_require__(122),
      person: __webpack_require__(123)
    };
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
    },
    cacl: function cacl() {
      var _this = this;

      var starttime = +new Date("2019-8-1 00:00:00");
      setInterval(function () {
        var nowtime = +new Date();
        var time = nowtime - starttime;
        var day = parseInt(time / 60 / 60 / 24 / 1000); //天
        var hour = parseInt(time / 1000 / 60 / 60 % 24); //小时
        var minute = parseInt(time / 1000 / 60 % 60); //分钟
        var seconds = parseInt(time / 1000 % 60); //秒
        // console.info("剩余", `${day}天${hour}时${minute}分${seconds}秒`);
        _this.countdown = day + "\u5929" + hour + "\u65F6" + minute + "\u5206" + seconds + "\u79D2";
      }, 1000);
    }
  },
  onLoad: function onLoad() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(_this2.$data, _this2.$options.data());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
  },
  onShow: function onShow() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this3.cacl();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this3);
    }))();
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/code.jpg";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/min.jpg";

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about"
  }, [_c('div', {
    staticClass: "count"
  }, [_c('div', {
    staticClass: "subtitle lg"
  }, [_vm._v("本站已经运行")]), _vm._v(" "), _c('div', {
    staticClass: "lg"
  }, [_vm._v(_vm._s(_vm.countdown))])]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n    2019年：\n    本人92年程序员一枚，鬼知道是什么星座。建站初衷就是前后端都想过一遍，正好通过本站技术把自己零零碎碎的node技术整合一起。\n    本站的设计也是参考很多的网上设计最终的整合完成的，后期的有时间的准备把自己的博客网站前后端源码github公开的。本站博客前后断断续续持续了大半年，服务器到期等各种事情耽搁，本站的在建站中也遇到各种各样的问题，源码已上传至\n    "), _c('span', {
    staticClass: "href",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://github.com/liuxingzhijian1320/node-webserver-blog-public')
      }
    }
  }, [_vm._v("github")]), _vm._v("，如果遇到问题欢迎一起交流\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n    *** 由于项目中多次用到图片，故自己写了一套简易图床的项目，允许动态文件夹创建，搭建了属于自己一套图片项目。\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n    2021年8月19\n    正好阿里云ESC做活动，注册一个新的账号花了242元（新用户优惠原价252元，领取10元优惠券）购买一台\n    "), _c('span', {
    staticClass: "href",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://www.aliyun.com/activity/daily/july?userCode=bsneu3xr')
      }
    }
  }, [_vm._v("2核2G5M的轻量级ESC")]), _vm._v("，每月1000G的流量限制（个人项目根本用不完），同时又购买了25元5000条短信服务(2年使用期)。本次blog的重构将原先的发送邮箱的验证码改为短信验证码，逼格蹭蹭的上涨。\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n    2021年8月26：由于工作中使用egg比较多，故现在对整体blog的后端进行重构，使用egg来作为整体的框架，性能有明显的提升，对服务器做了负载均衡的配置。对文章的评论模块做了很大的改变，之前是一张表来存，评论和回复的数据，新的设计采用俩张表来实现，目前只允许做到2级评论，同时对敏感词也做了限制，防止瞎**搞事，\n    同时也添加封“坏人”IP的功能，对账户体系做了扩展，有游客，管理员，root等多集权限，数据库库弃用Sequlize，采用原生的sql语句来实现复杂的业务逻辑。对于前端的博客操作，本次将会适配移动端(正在开发中)，暂时移除留言板块，\n    新增登录注册退出功能。(代码后期整理开源出来)\n  ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "ul"
  }, [_c('li', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "li-title"
  }, [_vm._v("小程序")]), _vm._v(" "), _c('ul', {
    staticClass: "ul2"
  }, [_c('li', {
    staticClass: "li2"
  }, [_vm._v("mpvue")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("mpvue-wemark")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("...")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "li-title"
  }, [_vm._v("前端/后台")]), _vm._v(" "), _c('ul', {
    staticClass: "ul2"
  }, [_c('li', {
    staticClass: "li2"
  }, [_vm._v("vue")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("mavon-editor")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("highlight")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("...")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "li-title"
  }, [_vm._v("后端")]), _vm._v(" "), _c('ul', {
    staticClass: "ul2"
  }, [_c('li', {
    staticClass: "li2"
  }, [_vm._v("egg")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("jwt")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("cors")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("...")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "li-title"
  }, [_vm._v("数据库")]), _vm._v(" "), _c('ul', {
    staticClass: "ul2"
  }, [_c('li', {
    staticClass: "li2"
  }, [_vm._v("mysql")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("navicate(工具)")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("...")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "li-title"
  }, [_vm._v("部署")]), _vm._v(" "), _c('ul', {
    staticClass: "ul2"
  }, [_c('li', {
    staticClass: "li2"
  }, [_vm._v("pm2")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("nginx")]), _vm._v(" "), _c('li', {
    staticClass: "li2"
  }, [_vm._v("docker")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "decode"
  }, [_c('div', [_vm._v("\n      已完成计划:\n      "), _c('div', {
    staticClass: "decode-item href",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://github.com/liuxingzhijian1320/node-webserver-blog-public')
      }
    }
  }, [_vm._v("\n        源码已分享")]), _vm._v(" "), _c('div', {
    staticClass: "decode-item href",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://blog.csdn.net/Zhooson/article/details/101067545')
      }
    }
  }, [_vm._v("\n        docker运行前端项目")]), _vm._v(" "), _c('div', {
    staticClass: "decode-item href",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://blog.csdn.net/Zhooson/article/details/107756222')
      }
    }
  }, [_vm._v("\n        https证书[http和https都可以访问]")]), _vm._v(" "), _c('div', {
    staticClass: "decode-item href",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.copy('https://blog.csdn.net/Zhooson/article/details/85617665')
      }
    }
  }, [_vm._v("\n        离线缓存[ServiceWorker]")])])]), _vm._v(" "), _c('div', {
    staticClass: "code dc"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "t-title"
  }, [_vm._v("技术交流添加微信")]), _vm._v(" "), _c('div', {
    staticClass: "t-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.code,
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "t-title"
  }, [_vm._v("微信小程序")]), _vm._v(" "), _c('div', {
    staticClass: "t-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.person,
      "alt": ""
    }
  })])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "it"
  }, [_vm._v("本站的技术栈：主要包含 "), _c('span', {
    staticClass: "it-title"
  }, [_vm._v("前端，后端，数据库，部署")]), _vm._v("四大方面\n  ")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d0f7f70", esExports)
  }
}

/***/ })

},[105]);