import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, objectSpread2 as _objectSpread2, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { LazyStatus } from '../Redux/core/type.js';
import { LazyView } from '../SubComponent/index.js';

var HocLazyView = function HocLazyView(options) {
  return function (WrappedComponent) {
    var hocComponent = /*#__PURE__*/function (_Component) {
      function hocComponent(props) {
        var _this;
        _classCallCheck(this, hocComponent);
        _this = _callSuper(this, hocComponent, [props]);
        _defineProperty(_this, "SwitchView", function (status) {
          switch (status) {
            case LazyStatus.Loading:
            case LazyStatus.Loaded:
              return jsx(LazyView, {
                IsLazy: status === LazyStatus.Loading,
                sx: {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                },
                children: jsx(WrappedComponent, _objectSpread2(_objectSpread2({}, _this.props), {}, {
                  data: _this.state.data,
                  FetchData: _this.FetchData,
                  SetData: _this.SetData
                }))
              });
            default:
              return jsx("div", {
                children: "Error..."
              });
          }
        });
        _defineProperty(_this, "SetData", function (data) {
          _this.setState({
            data: data
          });
        });
        _defineProperty(_this, "componentDidMount", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var _options$params, _this$props$params;
          var param;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                param = Object.assign({}, (_options$params = options === null || options === void 0 ? void 0 : options.params) !== null && _options$params !== void 0 ? _options$params : {}, (_this$props$params = _this.props.params) !== null && _this$props$params !== void 0 ? _this$props$params : {});
                _this.TokenSources = new AbortController();
                _context.n = 1;
                return _this.FetchData(param);
              case 1:
                return _context.a(2);
            }
          }, _callee);
        })));
        _defineProperty(_this, "FetchData", /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(params, controller) {
            var _this$TokenSources, _this$TokenSources2, signal, data, _this$TokenSources3;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _context2.p = 0;
                  (controller === null || controller === void 0 ? void 0 : controller.abort) && ((_this$TokenSources = _this.TokenSources) === null || _this$TokenSources === void 0 ? void 0 : _this$TokenSources.signal.addEventListener("abort", controller === null || controller === void 0 ? void 0 : controller.abort));
                  signal = controller ? controller.signal : (_this$TokenSources2 = _this.TokenSources) === null || _this$TokenSources2 === void 0 ? void 0 : _this$TokenSources2.signal;
                  _context2.n = 1;
                  return options.FetchData(params, signal);
                case 1:
                  data = _context2.v;
                  _this.setState({
                    status: LazyStatus.Loaded,
                    data: data
                  });
                  _context2.n = 3;
                  break;
                case 2:
                  _context2.p = 2;
                  _context2.v;
                  _this.setState({
                    status: LazyStatus.Error
                  });
                case 3:
                  _context2.p = 3;
                  (controller === null || controller === void 0 ? void 0 : controller.abort) && ((_this$TokenSources3 = _this.TokenSources) === null || _this$TokenSources3 === void 0 ? void 0 : _this$TokenSources3.signal.removeEventListener("abort", controller === null || controller === void 0 ? void 0 : controller.abort));
                  return _context2.f(3);
                case 4:
                  return _context2.a(2);
              }
            }, _callee2, null, [[0, 2, 3, 4]]);
          }));
          return function (_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }());
        _defineProperty(_this, "TokenSources", void 0);
        _this.state = {
          status: LazyStatus.Loading,
          data: null
        };
        _this.FetchData = _this.FetchData.bind(_this);
        return _this;
      }
      _inherits(hocComponent, _Component);
      return _createClass(hocComponent, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this$TokenSources4;
          console.log("componentWillUnmount");
          (_this$TokenSources4 = this.TokenSources) === null || _this$TokenSources4 === void 0 || _this$TokenSources4.abort();
        }
      }, {
        key: "render",
        value: function render() {
          return this.SwitchView(this.state.status);
        }
      }]);
    }(Component);
    return hocComponent;
  };
};

export { HocLazyView as default };
//# sourceMappingURL=index.js.map
