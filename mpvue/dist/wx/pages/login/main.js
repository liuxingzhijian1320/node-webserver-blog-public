require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(167);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73f8284c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(175);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73f8284c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73f8284c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/login/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73f8284c", Component.options)
  } else {
    hotAPI.reload("data-v-73f8284c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_md5__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_api__ = __webpack_require__(21);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var TIME_COUNT = 60;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "user",
  data: function data() {
    return {
      loginType: 1,
      formData: {
        nickname: "",
        username: "",
        code: "",
        password: "",
        repassword: "",
        id: 0
      },

      count: 0,
      show: false,
      timer: null
    };
  },

  components: {},
  methods: {
    login: function login() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _formData, username, password, res;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _formData = _this.formData, username = _formData.username, password = _formData.password;

                if (!(!username || username.length != 11)) {
                  _context.next = 6;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("请填写手机号哦😊😊～");
                return _context.abrupt("return");

              case 6:
                if (password) {
                  _context.next = 9;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("请填写密码哦😊😊～");
                return _context.abrupt("return");

              case 9:
                _context.next = 11;
                return Object(__WEBPACK_IMPORTED_MODULE_6__assets_api__["g" /* loginWebsite */])({ username: username, password: __WEBPACK_IMPORTED_MODULE_4_js_md5___default()(password) });

              case 11:
                res = _context.sent;

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])(res.message);
                wx.setStorageSync("userInfo", __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(res.data));
                wx.setStorageSync("userInfo-token", res.data.token);
                wx.navigateBack();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getCode: function getCode() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var username;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                username = _this2.formData.username;

                if (!(!username || username.length != 11)) {
                  _context2.next = 4;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("请填写正确的手机号哦😊😊");
                return _context2.abrupt("return");

              case 4:
                if (_this2.timer) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_6__assets_api__["f" /* loginGetCode */])({ username: username }).then(function (res) {
                  Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])(res.message);
                  if (res.code === 200) {
                    _this2.formData.id = res.data.id;
                    _this2.count = TIME_COUNT;
                    _this2.show = true;
                    _this2.timer = setInterval(function () {
                      if (_this2.count > 0 && _this2.count <= TIME_COUNT) {
                        _this2.count--;
                      } else {
                        _this2.show = false;
                        clearInterval(_this2.timer);
                        _this2.timer = null;
                      }
                    }, 1000);
                  }
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    optBtn: function optBtn(opt) {
      this.loginType = opt;
    },
    close: function close() {
      wx.navigateBack();
    },

    // 注册
    register: function register() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _formData2, username, nickname, code, password, repassword, res;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _formData2 = _this3.formData, username = _formData2.username, nickname = _formData2.nickname, code = _formData2.code, password = _formData2.password, repassword = _formData2.repassword;

                if (nickname) {
                  _context3.next = 6;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("请填写帅气的昵称哦😊😊～");
                return _context3.abrupt("return");

              case 6:
                if (username) {
                  _context3.next = 11;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("请填写手机号哦😊😊～");
                return _context3.abrupt("return");

              case 11:
                if (!(!code || code.length != 6)) {
                  _context3.next = 16;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("请填写正确的验证码哦😊😊～");
                return _context3.abrupt("return");

              case 16:
                if (!(!password || !repassword)) {
                  _context3.next = 21;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("请填写密码哦😊😊～");
                return _context3.abrupt("return");

              case 21:
                if (!(password != repassword)) {
                  _context3.next = 24;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])("两次密码不一致😊😊～");
                return _context3.abrupt("return");

              case 24:
                _context3.next = 26;
                return Object(__WEBPACK_IMPORTED_MODULE_6__assets_api__["h" /* registerWebsite */])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this3.formData, {
                  password: __WEBPACK_IMPORTED_MODULE_4_js_md5___default()(password),
                  repassword: __WEBPACK_IMPORTED_MODULE_4_js_md5___default()(repassword)
                }));

              case 26:
                res = _context3.sent;

                Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_feedback__["c" /* showToast */])(res.message);
                _this3.formData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this3.formData, {
                  nickname: "",
                  code: "",
                  password: "",
                  repassword: "",
                  id: 0
                });
                _this3.loginType = 1;

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  },
  onLoad: function onLoad(_ref) {
    var _this4 = this;

    var type = _ref.type;
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // Object.assign(this.$data, this.$options.data());
              _this4.loginType = type || 1;

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  onShow: function onShow() {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  }
});

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login dc"
  }, [(_vm.loginType == 2) ? _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "login-btn pointer",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.optBtn(1)
      }
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('h3', {
    staticClass: "title lg"
  }, [_vm._v("注册")]), _vm._v(" "), _c('div', {
    staticClass: "close dc",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.close
    }
  }, [_c('i', {
    staticClass: "iconfont icon-close unit-close"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.formData.nickname),
      expression: "formData.nickname",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder-style": "color: #ccc; font-size: 28rpx",
      "placeholder": "起个牛逼点的昵称吧~",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.formData.nickname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.nickname = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.formData.username),
      expression: "formData.username",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "number",
      "placeholder-style": "color: #ccc; font-size: 28rpx",
      "placeholder": "手机号（登录账号）",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.formData.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.username = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "code dc pointer",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.getCode
    }
  }, [_vm._v("\n        " + _vm._s(_vm.show ? _vm.count + 's' : '获取验证码') + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.formData.code),
      expression: "formData.code",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "number",
      "placeholder-style": "color: #ccc; font-size: 28rpx",
      "placeholder": "验证码",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.formData.code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.code = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.formData.password),
      expression: "formData.password",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder-style": "color: #ccc; font-size: 28rpx",
      "placeholder": "登录密码",
      "eventid": '6'
    },
    domProps: {
      "value": (_vm.formData.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.password = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.formData.repassword),
      expression: "formData.repassword",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder-style": "color: #ccc; font-size: 28rpx",
      "placeholder": "确认登录密码",
      "eventid": '7'
    },
    domProps: {
      "value": (_vm.formData.repassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.repassword = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "submit dc",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("\n      注册\n    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.loginType == 1) ? _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "login-btn pointer",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.optBtn(2)
      }
    }
  }, [_vm._v("注册")]), _vm._v(" "), _c('h3', {
    staticClass: "title lg"
  }, [_vm._v("登录")]), _vm._v(" "), _c('div', {
    staticClass: "close dc",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.close
    }
  }, [_c('i', {
    staticClass: "iconfont icon-close unit-close"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.formData.username),
      expression: "formData.username",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder-style": "color: #ccc; font-size: 28rpx",
      "placeholder": "登录账号",
      "eventid": '11'
    },
    domProps: {
      "value": (_vm.formData.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.username = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.formData.password),
      expression: "formData.password",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder-style": "color: #ccc; font-size: 28rpx",
      "placeholder": "登录密码",
      "eventid": '12'
    },
    domProps: {
      "value": (_vm.formData.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.password = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "submit dc",
    attrs: {
      "eventid": '13'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("\n      登录\n    ")])], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73f8284c", esExports)
  }
}

/***/ })

},[166]);