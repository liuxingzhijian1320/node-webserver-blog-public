require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(182);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_55f4cf1e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(185);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-55f4cf1e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_55f4cf1e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55f4cf1e", Component.options)
  } else {
    hotAPI.reload("data-v-55f4cf1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 184:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "user",
  data: function data() {
    return {
      avatar: __webpack_require__(65),
      userInfo: {}
    };
  },

  components: {},
  methods: {
    logout: function logout() {
      var _this = this;

      if (this.userInfo && this.userInfo.username) {
        Object(__WEBPACK_IMPORTED_MODULE_3__assets_scripts_feedback__["a" /* showComfirm */])("确认退出吗？").then(function () {
          _this.userInfo = {};
          wx.removeStorageSync("userInfo");
          wx.removeStorageSync("userInfo-token");
        });
      } else {
        this.login();
      }
    },
    login: function login() {
      wx.navigateTo({
        url: "/pages/login/main?type=1"
      });
    },
    open: function open() {
      wx.navigateTo({
        url: "/pages/open/main"
      });
    },
    about: function about() {
      wx.navigateTo({
        url: "/pages/about/main"
      });
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
    var info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "min-content"
  }, [_c('header', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.avatar,
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.logout
    }
  }), _vm._v(" "), (_vm.userInfo && _vm.userInfo.nickname) ? _c('div', [_c('div', {
    staticClass: "info"
  }, [_vm._v(_vm._s(_vm.userInfo.nickname))]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("登录账号：" + _vm._s(_vm.userInfo.username))])]) : _c('div', {
    staticClass: "login",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("请登录")])]), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "section-list px1",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.open
    }
  }, [_c('div', {
    staticClass: "section-key"
  }, [_c('i', {
    staticClass: "iconfont icon-open item-icon"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "section-val"
  }, [_vm._v("开源实验室")])]), _vm._v(" "), _c('div', {
    staticClass: "section-list px1",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.about
    }
  }, [_c('div', {
    staticClass: "section-key"
  }, [_c('i', {
    staticClass: "iconfont icon-about item-icon"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "section-val"
  }, [_vm._v("关于本站")])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55f4cf1e", esExports)
  }
}

/***/ })

},[181]);