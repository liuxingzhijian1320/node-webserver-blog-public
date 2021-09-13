require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_538eee24_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(157);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-538eee24"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_538eee24_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-538eee24", Component.options)
  } else {
    hotAPI.reload("data-v-538eee24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scripts_feedback__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mpvue_wemark__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_styles_wemark_scss__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_styles_wemark_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_styles_wemark_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_write_commentlist__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_write_write__ = __webpack_require__(63);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "detail",
  data: function data() {
    return {
      detail: {},
      list: [],
      userInfo: {},
      aid: 0
    };
  },

  components: { wemark: __WEBPACK_IMPORTED_MODULE_6_mpvue_wemark__["a" /* default */], write: __WEBPACK_IMPORTED_MODULE_9__components_write_write__["a" /* default */], commentlist: __WEBPACK_IMPORTED_MODULE_8__components_write_commentlist__["a" /* default */] },
  methods: {
    write: function write(type, item, index) {
      var code = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var codeindex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      // 未登录
      if (!this.userInfo.username) {
        wx.navigateTo({
          url: "/pages/login/main"
        });
      } else {
        // console.log(123, index, item, code, codeindex);
        if (type === 2) {
          this.activeIndex = index + "-" + codeindex;
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: code.from_user.id,
            nickname: code.from_user.nickname
          };
        } else {
          this.activeIndex = index;
          // 回复
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: item.user.id,
            nickname: item.user.nickname
          };
        }
        this.show = true;
      }
    },
    getDetail: function getDetail(id) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({ title: "加载中..." });
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_5__assets_api__["d" /* getArticleDetail */])(id);

              case 3:
                res = _context.sent;

                _this.detail = res.data;
                wx.hideLoading();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getList: function getList(article_id) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var params, _ref, data;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {
                  article_id: article_id
                };
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_5__assets_api__["c" /* getArticleCommentList */])(params);

              case 3:
                _ref = _context2.sent;
                data = _ref.data;


                data.list.forEach(function (code) {
                  code.create_timeStr = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* formatDate */])(code.create_time);
                });

                _this2.list = data.list;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  mounted: function mounted() {
    var info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
  },
  onShow: function onShow() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  onLoad: function onLoad(_ref2) {
    var id = _ref2.id;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
    this.aid = id;
    this.getDetail(id);
    // this.getList(id);
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setError */
/* unused harmony export catchError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scripts_feedback__ = __webpack_require__(4);
// import store from '../store'



// 想Vuex发送错误通知
function setError(message, options) {
    Object(__WEBPACK_IMPORTED_MODULE_0__assets_scripts_feedback__["b" /* showMessage */])(message);

    // 记录错误日志及其参数
    console.info("HTTP requests are printed to:", message, options);

    // mpvue.hideLoading();
    // store.commit('setError', message)
}

// 应用级异常捕获
function catchError(err, options) {
    // console.log("wx.onError", err);
    if (err) {
        try {
            var errMessage = err.message;
            // 连接超时
            if (errMessage && errMessage.match(/timeout/g)) {
                setError("连接超时", options);
            } else {
                // 其余报错
                // ...
                setError("非常抱歉，程序出现异常", options);
            }
        } catch (e) {
            setError("c", options);
        }
    } else {
        setError("非常抱歉，程序出现异常...", options);
    }
}

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wemark_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_4e9ddfb6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_wemark_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e9ddfb6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wemark_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_4e9ddfb6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_wemark_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/mpvue-wemark/src/wemark.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wemark.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e9ddfb6", Component.options)
  } else {
    hotAPI.reload("data-v-4e9ddfb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse__ = __webpack_require__(145);
//
//
//
//
//
//
//
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
  props: {
    mdData: String,
    customStyle: [String, Object]
  },
  data: function data() {
    return { wemark: {} };
  },

  watch: {
    mdData: function mdData(next) {
      this.init(next);
    }
  },
  methods: {
    init: function init(md) {
      Object(__WEBPACK_IMPORTED_MODULE_0__parse__["a" /* default */])(md, this, {
        // 新版小程序可自适应宽高
        // imageWidth: wx.getSystemInfoSync().windowWidth - 40,
        name: "wemark"
      });
    }
  },
  mounted: function mounted() {
    this.init(this.mdData);
  }
});

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wemark_wrapper",
    style: (_vm.customStyle)
  }, _vm._l((_vm.wemark.renderList), function(renderBlock, blockIndex) {
    return _c('div', {
      key: blockIndex
    }, [_c('div', {
      class: renderBlock.type
    }, [_vm._l((renderBlock.content), function(renderInline, inlineIndex) {
      return (renderBlock.isArray) ? _c('div', {
        key: inlineIndex
      }, [(renderInline.type === 'text' || renderInline.type === 'code' || renderInline.type === 'strong' || renderInline.type === 'deleted' || renderInline.type === 'em' || renderInline.type === 'table_th' || renderInline.type === 'table_td') ? _c('span', {
        class: renderInline.type
      }, [_vm._v(_vm._s(renderInline.content))]) : _vm._e(), _vm._v(" "), (renderInline.type === 'image') ? _c('img', {
        staticClass: "_image",
        attrs: {
          "mode": "widthFix",
          "src": renderInline.src
        }
      }) : _vm._e()]) : _vm._e()
    }), _vm._v(" "), (!renderBlock.isArray) ? _c('div', [(renderBlock.type === 'code') ? _c('div', [_vm._v(_vm._s(renderBlock.content))]) : _vm._e(), _vm._v(" "), (renderBlock.type == 'video') ? _c('video', {
      staticClass: "divvideo",
      attrs: {
        "src": renderBlock.src,
        "poster": renderBlock.poster,
        "controls": ""
      }
    }) : _vm._e()]) : _vm._e()], 2)])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e9ddfb6", esExports)
  }
}

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_commentlist_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5baf8bf9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_commentlist_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5baf8bf9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_commentlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5baf8bf9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_commentlist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/write/commentlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] commentlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5baf8bf9", Component.options)
  } else {
    hotAPI.reload("data-v-5baf8bf9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__write__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_scripts_bus__ = __webpack_require__(64);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["aid"],
  data: function data() {
    return {
      show: false,
      activeIndex: -1,
      placeholder: "",
      cparams: {},
      list: [],

      userInfo: {}
    };
  },

  components: {
    write: __WEBPACK_IMPORTED_MODULE_2__write__["a" /* default */]
  },

  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_5__assets_scripts_bus__["a" /* default */].$on("setReloadComment", function (_ref) {
      var _ref$reload = _ref.reload,
          reload = _ref$reload === undefined ? false : _ref$reload;

      _this.show = false;
      if (reload) {
        _this.getList();
      }
    });

    var info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
    this.getList();
  },

  methods: {
    getList: function getList() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var params, _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  article_id: _this2.aid
                };
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__assets_api__["c" /* getArticleCommentList */])(params);

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;

                data.list.forEach(function (code) {
                  code.create_timeStr = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* formatDate */])(code.create_time);
                  code.name = code.user && code.user.nickname.slice(0, 1);
                  code.replyList.forEach(function (c) {
                    c.name = c.from_user && c.from_user.nickname.slice(0, 1);
                  });
                });

                _this2.list = data.list;
                console.log(4, _this2.list);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    write: function write(type, item, index) {
      var code = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var codeindex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      // 未登录
      if (!this.userInfo.nickname) {
        wx.navigateTo({
          url: "/pages/login/main"
        });
      } else {
        // console.log(123, index, item, code, codeindex);
        if (type === 2) {
          this.activeIndex = index + "-" + codeindex;
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: code.from_user && code.from_user.id,
            nickname: code.from_user && code.from_user.nickname
          };
        } else {
          this.activeIndex = index;
          // 回复
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: item.user && item.user.id,
            nickname: item.user && item.user.nickname
          };
        }
        this.show = true;
      }
    }
  },
  onLoad: function onLoad() {}
});

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scripts_feedback__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_scripts_bus__ = __webpack_require__(64);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      content: "",
      userInfo: {},
      placeholder: "",
      avatar: __webpack_require__(65)
    };
  },

  props: {
    showClose: {
      type: Boolean,
      default: false
    },
    tell: {
      type: Number,
      default: 1 // 1 一级评论  2二级回复
    },
    isShow: {
      type: Boolean,
      default: false
    },
    cparams: {
      type: Object
    },
    aid: {
      type: Number,
      default: 0,
      require: true
    }
  },
  onShow: function onShow() {
    console.log(222);
  },
  mounted: function mounted() {
    console.log("cparams", this.cparams);

    var info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
    console.log(11111, info);

    if (this.cparams && this.cparams.nickname) {
      this.placeholder = (this.userInfo.nickname || "违反规则") + " \u56DE\u590D " + (this.cparams.nickname || "违反规则");
    } else {
      this.placeholder = "\u5404\u4F4D\u62D4\u5200\u5427\uD83D\uDD2A\uD83D\uDD2A\uD83D\uDD2A";
    }
  },

  methods: {
    close: function close() {
      __WEBPACK_IMPORTED_MODULE_2__assets_scripts_bus__["a" /* default */].$emit("setReloadComment", {
        reload: false
      });
    },
    submit: function submit() {
      if (!this.userInfo.username) {
        wx.navigateTo({
          url: "/pages/login/main"
        });
        return;
      }

      if (!this.content) {
        Object(__WEBPACK_IMPORTED_MODULE_0__assets_scripts_feedback__["c" /* showToast */])("请填写评论信息哦😊😊～");
        return;
      }

      if (this.tell === 1) {
        // 评论
        console.log("评论");
        this.writeComment();
      } else {
        console.log("回复");
        // 回复
        this.writeReply();
      }
    },

    // 回复
    writeReply: function writeReply() {
      var _this = this;

      // 一级评论
      var _cparams = this.cparams,
          comment_id = _cparams.comment_id,
          from_id = _cparams.from_id,
          to_id = _cparams.to_id;

      var params = {
        comment_id: comment_id,
        from_id: from_id,
        to_id: to_id,
        content: this.content
      };
      console.log("回复", params);

      Object(__WEBPACK_IMPORTED_MODULE_1__assets_api__["b" /* createArticleCommentToReply */])(params).then(function (res) {
        _this.content = "";
        Object(__WEBPACK_IMPORTED_MODULE_0__assets_scripts_feedback__["c" /* showToast */])("回复成功");
        __WEBPACK_IMPORTED_MODULE_2__assets_scripts_bus__["a" /* default */].$emit("setReloadComment", { reload: true });
      });
    },


    // 评论
    writeComment: function writeComment() {
      var _this2 = this;

      // 一级评论
      var params = {
        article_id: this.aid,
        content: this.content,
        user_id: this.userInfo.userId
      };
      console.log("评论", params);
      Object(__WEBPACK_IMPORTED_MODULE_1__assets_api__["a" /* createArticleComment */])(params).then(function (res) {
        console.log(res);
        _this2.content = "";
        Object(__WEBPACK_IMPORTED_MODULE_0__assets_scripts_feedback__["c" /* showToast */])("评论成功");
        __WEBPACK_IMPORTED_MODULE_2__assets_scripts_bus__["a" /* default */].$emit("setReloadComment", { reload: true });
      });
    }
  }
});

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "write-box"
  }, [(_vm.isShow) ? _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.avatar,
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "input"
  }, [(_vm.showClose) ? _c('div', {
    staticClass: "close dc",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("关闭")]) : _vm._e(), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "textarea",
    attrs: {
      "placeholder": _vm.placeholder,
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [(_vm.userInfo && _vm.userInfo.nickname) ? _c('span', [_vm._v("登录昵称:\n        " + _vm._s(_vm.userInfo.nickname))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "submit",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n        " + _vm._s(_vm.userInfo && _vm.userInfo.nickname ? '提交' : '登录') + "\n      ")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d81a65b", esExports)
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "commentlist"
  }, [_c('ul', {
    staticClass: "ul"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "li"
    }, [_c('div', {
      staticClass: "li-item"
    }, [_c('div', {
      staticClass: "img dc"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "top"
    }, [_c('div', {
      staticClass: "nickanme"
    }, [_c('span', {
      staticStyle: {
        "color": "#666"
      }
    }, [_vm._v(_vm._s(item.user && item.user.nickname || '违反规则') + "：")]), _vm._v("\n            " + _vm._s(item.content))]), _vm._v(" "), _c('div', {
      staticClass: "value"
    }, [_vm._v(_vm._s(item.create_timeStr) + " "), _c('span', {
      staticClass: "callback pointer",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.write(1, item, index )
        }
      }
    }, [_vm._v(_vm._s(_vm.userInfo && _vm.userInfo.nickname ? '回复' : '登录'))])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "margin-bottom": "10px"
      }
    }, [(_vm.show && _vm.activeIndex == index) ? _c('write', {
      attrs: {
        "cparams": _vm.cparams,
        "tell": 2,
        "showClose": true,
        "eventid": '1_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "update:cparams": function($event) {
          _vm.cparams = $event
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('ul', _vm._l((item.replyList), function(code, codeindex) {
      return _c('li', {
        key: codeindex
      }, [_c('div', {
        staticClass: "li-item"
      }, [_c('div', {
        staticClass: "img dc"
      }, [_vm._v(_vm._s(code.name))]), _vm._v(" "), _c('div', {
        staticClass: "top"
      }, [_c('div', {
        staticClass: "nickanme"
      }, [_c('span', {
        staticStyle: {
          "color": "#666"
        }
      }, [_vm._v("\n                      " + _vm._s(code.from_user && code.from_user.nickname || '违反规则') + "\n                      回复\n                      " + _vm._s(code.to_user && code.to_user.nickname || '违反规则') + "：")]), _vm._v("\n                    " + _vm._s(code.content))]), _vm._v(" "), _c('div', {
        staticClass: "value"
      }, [_vm._v(_vm._s(code.create_timeStr) + "\n                    "), _c('span', {
        staticClass: "callback pointer",
        attrs: {
          "eventid": '2_' + index + '-' + codeindex
        },
        on: {
          "click": function($event) {
            _vm.write(2, item, index, code, codeindex)
          }
        }
      }, [_vm._v(_vm._s(_vm.userInfo && _vm.userInfo.username ? '回复' : '登录'))])])])]), _vm._v(" "), _c('div', {
        staticStyle: {
          "padding-left": "60px"
        }
      }, [(_vm.show && _vm.activeIndex == index + '-' + codeindex) ? _c('write', {
        attrs: {
          "cparams": _vm.cparams,
          "showClose": true,
          "tell": 2,
          "eventid": '3_' + index + '-' + codeindex,
          "mpcomid": '1_' + index + '-' + codeindex
        },
        on: {
          "update:cparams": function($event) {
            _vm.cparams = $event
          }
        }
      }) : _vm._e()], 1)])
    }))], 1)])])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5baf8bf9", esExports)
  }
}

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.detail && _vm.detail.title) ? _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "copy"
  }, [_vm._v("markdown语法渲染有些问题，具体可以浏览https://www.zhooson.cn")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.detail.title))]), _vm._v(" "), _c('div', {
    staticClass: "subtitle"
  }, [_vm._v("浏览量：" + _vm._s(_vm.detail.browser))]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('wemark', {
    attrs: {
      "mdData": _vm.detail.content,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "comment-title"
  }, [_vm._v("\n      发表评论\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "comment-hand"
  }, [_c('write', {
    attrs: {
      "aid": _vm.aid,
      "isShow": true,
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('commentlist', {
    attrs: {
      "aid": _vm.aid,
      "mpcomid": '2'
    }
  })], 1)]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-538eee24", esExports)
  }
}

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export debounce */
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scripts_feedback__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_api_domain__ = __webpack_require__(61);




/**
 * 防抖
 * @param {*} func
 * @param {*} wait
 */
function debounce(func, wait) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

function formatDate(time) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var date = new Date(time);

  var year = date.getFullYear(),
      month = pad(pad(date.getMonth() + 1), 2),
      // 月份是从0开始的
  day = pad(date.getDate(), 2),
      hour = pad(date.getHours(), 2),
      min = pad(date.getMinutes(), 2),
      sec = pad(date.getSeconds(), 2);
  if (type == "simple") {
    return year + "-" + month + "-" + day;
  } else if (type == "day") {
    return day - 0;
  } else if (type == "split") {
    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;
  } else if (type == "void") {
    return "" + year + month + day + hour + min + sec;
  } else if (type == "yearmonth") {
    return "" + [year, month];
  } else if (type == "sec") {
    return [year, month, day].join("-") + " " + [hour, min].join(":");
  } else if (type == "ios") {
    return [year, month, day].join("/") + " " + [hour, min].join(":");
  }
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
}

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_write_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d81a65b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_write_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d81a65b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_write_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d81a65b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_write_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/write/write.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] write.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d81a65b", Component.options)
  } else {
    hotAPI.reload("data-v-6d81a65b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue___default.a());

/***/ })

},[137]);