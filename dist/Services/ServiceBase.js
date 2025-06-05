import { createClass as _createClass, asyncToGenerator as _asyncToGenerator, inherits as _inherits, wrapNativeSuper as _wrapNativeSuper, regenerator as _regenerator, classCallCheck as _classCallCheck, defineProperty as _defineProperty, callSuper as _callSuper, superPropGet as _superPropGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import Axios from 'axios';
import { authService } from 'partner-oidc-auth';
import { HttpService } from './Getway/index.js';
import { ProcessRepose } from './Getway/RequestHelper.js';

var ProcessError = function ProcessError(err) {
  var _err$response$data, _err$response, _window$ApiAlertConte;
  var data = (_err$response$data = (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data) !== null && _err$response$data !== void 0 ? _err$response$data : {};
  var errorMessages = Object.keys(data).filter(function (x) {
    return data[x].length > 0;
  }).map(function (x) {
    return data[x][0];
  });
  if (errorMessages.length < 1) return;
  (_window$ApiAlertConte = window.ApiAlertContext.ApiAlert) === null || _window$ApiAlertConte === void 0 || _window$ApiAlertConte.PushError(errorMessages.join('\n'));
};
var ServiceBase = /*#__PURE__*/function () {
  /**
   *
   */
  function ServiceBase(http) {
    var _this = this;
    _classCallCheck(this, ServiceBase);
    _defineProperty(this, "_http", HttpService);
    _defineProperty(this, "_urlBase", '');
    _defineProperty(this, "MapResponse", function () {
      _this._http.interceptors.response.use(function (res) {
        return res;
      }, function (err) {
        return _this.TryFetchToken(err, ProcessRepose);
      });
      _this._http.interceptors.request.use(function (req) {
        return _this.InteruptHeader(req);
      });
    });
    _defineProperty(this, "TryFetchToken", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(error, next) {
        var _error$response;
        var originalRequest;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              originalRequest = error.config; // Thử lại tối đa 3 lần khi gặp lỗi 401
              if (!((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 && originalRequest)) {
                _context.n = 3;
                break;
              }
              originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;
              if (!(originalRequest._retryCount <= 3)) {
                _context.n = 3;
                break;
              }
              _context.n = 1;
              return authService.signIn({});
            case 1:
              _context.n = 2;
              return _this.InteruptHeader(originalRequest);
            case 2:
              return _context.a(2, Axios(originalRequest));
            case 3:
              return _context.a(2, next(error));
          }
        }, _callee);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(this, "_token", void 0);
    _defineProperty(this, "getToken", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!(_this._token === undefined)) {
              _context2.n = 2;
              break;
            }
            _context2.n = 1;
            return authService.getAccessToken();
          case 1:
            _t = _context2.v;
            _context2.n = 3;
            break;
          case 2:
            _t = _this._token;
          case 3:
            return _context2.a(2, _t);
        }
      }, _callee2);
    })));
    _defineProperty(this, "addToken", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(config) {
        var _token;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this.getToken();
            case 1:
              _token = _context3.v;
              if (_token) {
                if (!config) {
                  config = {
                    headers: {}
                  };
                }
                if (!config.headers) {
                  config.headers = {};
                }
                config.headers.Authorization = 'Bearer ' + _token;
              }
              return _context3.a(2, config);
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    if (http) {
      this._http = http;
    }
    this.MapResponse();
  }
  return _createClass(ServiceBase, [{
    key: "SetToken",
    value: function SetToken(token) {
      this._token = token;
    }
  }, {
    key: "addCustomHeader",
    value: function () {
      var _addCustomHeader = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(config) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!config) {
                config = {
                  headers: {}
                };
              }
              if (!config.headers) {
                config.headers = {};
              }
              return _context4.a(2, config);
          }
        }, _callee4);
      }));
      function addCustomHeader(_x4) {
        return _addCustomHeader.apply(this, arguments);
      }
      return addCustomHeader;
    }()
  }, {
    key: "InteruptHeader",
    value: function () {
      var _InteruptHeader = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(config) {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return this.addToken(config);
            case 1:
              return _context5.a(2, config);
          }
        }, _callee5, this);
      }));
      function InteruptHeader(_x5) {
        return _InteruptHeader.apply(this, arguments);
      }
      return InteruptHeader;
    }()
  }, {
    key: "Get",
    value: function () {
      var _Get = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(url, config) {
        var response, _t2, _t3, _t4;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _t2 = this._http;
              _t3 = url;
              _context6.n = 1;
              return this.addCustomHeader(config);
            case 1:
              _t4 = _context6.v;
              _context6.n = 2;
              return _t2.get.call(_t2, _t3, _t4);
            case 2:
              response = _context6.v;
              return _context6.a(2, response.data);
          }
        }, _callee6, this);
      }));
      function Get(_x6, _x7) {
        return _Get.apply(this, arguments);
      }
      return Get;
    }()
  }, {
    key: "TryGet",
    value: function () {
      var _TryGet = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(url, config) {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.p = 0;
              return _context7.a(2, this.Get(url, config));
            case 1:
              _context7.p = 1;
              _context7.v;
              return _context7.a(2, null);
          }
        }, _callee7, this, [[0, 1]]);
      }));
      function TryGet(_x8, _x9) {
        return _TryGet.apply(this, arguments);
      }
      return TryGet;
    }()
  }, {
    key: "Post",
    value: function () {
      var _Post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(url, data, config) {
        var response, _t6, _t7, _t8, _t9;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _t6 = this._http;
              _t7 = url;
              _t8 = data;
              _context8.n = 1;
              return this.addCustomHeader(config);
            case 1:
              _t9 = _context8.v;
              _context8.n = 2;
              return _t6.post.call(_t6, _t7, _t8, _t9);
            case 2:
              response = _context8.v;
              return _context8.a(2, response.data);
          }
        }, _callee8, this);
      }));
      function Post(_x0, _x1, _x10) {
        return _Post.apply(this, arguments);
      }
      return Post;
    }()
  }, {
    key: "PostResponse",
    value: function () {
      var _PostResponse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(url, data, config) {
        var response, _t0, _t1, _t10, _t11;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _t0 = this._http;
              _t1 = url;
              _t10 = data;
              _context9.n = 1;
              return this.addCustomHeader(config);
            case 1:
              _t11 = _context9.v;
              _context9.n = 2;
              return _t0.post.call(_t0, _t1, _t10, _t11);
            case 2:
              response = _context9.v;
              return _context9.a(2, response);
          }
        }, _callee9, this);
      }));
      function PostResponse(_x11, _x12, _x13) {
        return _PostResponse.apply(this, arguments);
      }
      return PostResponse;
    }()
  }, {
    key: "Put",
    value: function () {
      var _Put = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(url, data, config) {
        var response, _t12, _t13, _t14, _t15;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _t12 = this._http;
              _t13 = url;
              _t14 = data;
              _context0.n = 1;
              return this.addCustomHeader(config);
            case 1:
              _t15 = _context0.v;
              _context0.n = 2;
              return _t12.put.call(_t12, _t13, _t14, _t15);
            case 2:
              response = _context0.v;
              return _context0.a(2, response.data);
          }
        }, _callee0, this);
      }));
      function Put(_x14, _x15, _x16) {
        return _Put.apply(this, arguments);
      }
      return Put;
    }()
  }, {
    key: "TryPut",
    value: function () {
      var _TryPut = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(url, data, config) {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.p = 0;
              _context1.n = 1;
              return this.addToken(config);
            case 1:
              _context1.n = 2;
              return this.Put(url, data, config);
            case 2:
              return _context1.a(2, _context1.v);
            case 3:
              _context1.p = 3;
              _context1.v;
              return _context1.a(2, null);
          }
        }, _callee1, this, [[0, 3]]);
      }));
      function TryPut(_x17, _x18, _x19) {
        return _TryPut.apply(this, arguments);
      }
      return TryPut;
    }()
  }, {
    key: "TryPost",
    value: function () {
      var _TryPost = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(url, data, config) {
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              _context10.p = 0;
              _context10.n = 1;
              return this.Post(url, data, config);
            case 1:
              return _context10.a(2, _context10.v);
            case 2:
              _context10.p = 2;
              _context10.v;
              return _context10.a(2, null);
          }
        }, _callee10, this, [[0, 2]]);
      }));
      function TryPost(_x20, _x21, _x22) {
        return _TryPost.apply(this, arguments);
      }
      return TryPost;
    }()
  }, {
    key: "Delete",
    value: function () {
      var _Delete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(url, config) {
        var response, _t18, _t19, _t20;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              _t18 = this._http;
              _t19 = url;
              _context11.n = 1;
              return this.addCustomHeader(config);
            case 1:
              _t20 = _context11.v;
              _context11.n = 2;
              return _t18["delete"].call(_t18, _t19, _t20);
            case 2:
              response = _context11.v;
              return _context11.a(2, response.data);
          }
        }, _callee11, this);
      }));
      function Delete(_x23, _x24) {
        return _Delete.apply(this, arguments);
      }
      return Delete;
    }()
  }, {
    key: "TryDelete",
    value: function () {
      var _TryDelete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(url, config) {
        var _t21, _t22, _t23, _t24;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              _context12.p = 0;
              _t21 = this;
              _t22 = url;
              _context12.n = 1;
              return this.addCustomHeader(config);
            case 1:
              _t23 = _context12.v;
              _context12.n = 2;
              return _t21.Delete.call(_t21, _t22, _t23);
            case 2:
              return _context12.a(2, _context12.v);
            case 3:
              _context12.p = 3;
              _t24 = _context12.v;
              ProcessError(_t24);
              return _context12.a(2, null);
          }
        }, _callee12, this, [[0, 3]]);
      }));
      function TryDelete(_x25, _x26) {
        return _TryDelete.apply(this, arguments);
      }
      return TryDelete;
    }()
  }, {
    key: "TryPushNotify",
    value: function () {
      var _TryPushNotify = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(action) {
        var _len,
          p,
          _key,
          _args13 = arguments;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.n) {
            case 0:
              _context13.p = 0;
              for (_len = _args13.length, p = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                p[_key - 1] = _args13[_key];
              }
              _context13.n = 1;
              return this.PushNotify.apply(this, [action].concat(p));
            case 1:
              return _context13.a(2, _context13.v);
            case 2:
              _context13.p = 2;
              _context13.v;
            case 3:
              return _context13.a(2);
          }
        }, _callee13, this, [[0, 2]]);
      }));
      function TryPushNotify(_x27) {
        return _TryPushNotify.apply(this, arguments);
      }
      return TryPushNotify;
    }()
  }, {
    key: "PushNotify",
    value: function () {
      var _PushNotify = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(action) {
        var _len2,
          p,
          _key2,
          _error$response2,
          error,
          data,
          keys,
          _args14 = arguments,
          _t26;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.n) {
            case 0:
              _context14.p = 0;
              for (_len2 = _args14.length, p = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                p[_key2 - 1] = _args14[_key2];
              }
              _context14.n = 1;
              return action.bind(this).apply(void 0, p);
            case 1:
              return _context14.a(2, _context14.v);
            case 2:
              _context14.p = 2;
              _t26 = _context14.v;
              error = _t26;
              data = (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data;
              if (data) {
                keys = Object.keys(data);
                keys.forEach(function (key) {
                  var errors = data[key];
                  if (Array.isArray(errors)) {
                    errors.forEach(function (message) {
                      var _window$ApiAlertConte2;
                      (_window$ApiAlertConte2 = window.ApiAlertContext) === null || _window$ApiAlertConte2 === void 0 || (_window$ApiAlertConte2 = _window$ApiAlertConte2.ApiAlert) === null || _window$ApiAlertConte2 === void 0 || _window$ApiAlertConte2.PushError(message);
                    });
                  }
                });
              }
              throw error;
            case 3:
              return _context14.a(2);
          }
        }, _callee14, this, [[0, 2]]);
      }));
      function PushNotify(_x28) {
        return _PushNotify.apply(this, arguments);
      }
      return PushNotify;
    }()
  }]);
}();
var CancelAction = /*#__PURE__*/function (_AbortController) {
  function CancelAction() {
    var _this2;
    _classCallCheck(this, CancelAction);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this2 = _callSuper(this, CancelAction, [].concat(args));
    _defineProperty(_this2, "cancel", function () {
      _this2.trigger && _this2.trigger();
      _superPropGet((CancelAction), "abort", _this2)([]);
    });
    _defineProperty(_this2, "trigger", void 0);
    return _this2;
  }
  _inherits(CancelAction, _AbortController);
  return _createClass(CancelAction);
}(/*#__PURE__*/_wrapNativeSuper(AbortController));

export { CancelAction, ServiceBase as default };
//# sourceMappingURL=ServiceBase.js.map
