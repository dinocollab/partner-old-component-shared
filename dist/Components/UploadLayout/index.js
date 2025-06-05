import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, toConsumableArray as _toConsumableArray, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Box, Typography, Button } from '@mui/material';
import React__default, { PureComponent } from 'react';
import UploadStatus from './UploadStatus.js';
import { UploadMonitor } from './UploadMonitor.js';

var Sleep = function Sleep(sec) {
  return new Promise(function (res) {
    return setTimeout(res, sec);
  });
};
var UploadLayoutContext = /*#__PURE__*/React__default.createContext({});
var UploadLayout = /*#__PURE__*/function (_PureComponent) {
  function UploadLayout(props) {
    var _this;
    _classCallCheck(this, UploadLayout);
    _this = _callSuper(this, UploadLayout, [props]);
    _defineProperty(_this, "isUnmounted", false);
    _defineProperty(_this, "_monitor", void 0);
    _defineProperty(_this, "items", []);
    _defineProperty(_this, "addItems", function (items) {
      var _this$items;
      (_this$items = _this.items).push.apply(_this$items, _toConsumableArray(items));
      _this._monitor.start();
    });
    _defineProperty(_this, "getItem", function () {
      var item = _this.items.filter(function (x) {
        return x.Status === 'Pending';
      })[0];
      if (item) {
        item.Status = 'Processing';
      }
      return item;
    });
    _defineProperty(_this, "executor", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(item) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.props.UploadExecutor(item, function (value) {
                item.Value = value;
                _this.updateItems();
              });
            case 1:
              item.Status = 'Completed';
              _this.updateItems();
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "uploadComplete", function (item) {
      item.Status = 'Completed';
      _this.updateItems();
    });
    _defineProperty(_this, "uploadError", function (data) {
      data[0].Status = 'Error';
      _this.updateItems();
    });
    _defineProperty(_this, "onItemClose", function (item) {
      var _item$Signal;
      (_item$Signal = item.Signal) === null || _item$Signal === void 0 || _item$Signal.abort();
      var index = _this.items.findIndex(function (x) {
        return x === item;
      });
      _this.items.splice(index, 1);
      _this.updateItems();
      _this._monitor.start();
    });
    _defineProperty(_this, "onItemRetry", function (item) {
      item.Status = 'Pending';
      _this.updateItems();
      _this._monitor.start();
    });
    _defineProperty(_this, "onRetryAll", function () {
      _this.items.filter(function (x) {
        return x.Status === 'Error';
      }).forEach(function (x) {
        return x.Status = 'Pending';
      });
      _this.updateItems();
      _this._monitor.start();
    });
    _defineProperty(_this, "_timer", new Date());
    _defineProperty(_this, "updateItems", function () {
      // const tmp = new Date()
      // var diff = (tmp.getTime() - this._timer.getTime()) as number;
      // this._timer = tmp
      // if (diff < 500) return
      _this.forceUpdate();
    });
    _defineProperty(_this, "getErrors", function () {
      return _this.items.filter(function (x) {
        return x.Status === 'Error';
      });
    });
    _defineProperty(_this, "getComplete", function () {
      return _this.items.filter(function (x) {
        return x.Status === 'Completed';
      });
    });
    // setState = <K extends keyof IUploadLayoutState>(state: Pick<IUploadLayoutState, K> | IUploadLayoutState, callback?: () => void) => {
    //     if (this.isUnmounted) return
    //     super.setState(state, callback)
    // }
    _defineProperty(_this, "isCompleted", function () {
      return !_this.items.some(function (x) {
        return x.Status === 'Pending' || x.Status === 'Processing';
      });
    });
    _defineProperty(_this, "Close", function () {
      _this.items.forEach(function (x) {
        var _x$Signal;
        return (_x$Signal = x.Signal) === null || _x$Signal === void 0 ? void 0 : _x$Signal.abort();
      });
      _this.items = [];
      _this.setState({
        open: false,
        showComfirm: false
      });
    });
    _defineProperty(_this, "CheckClose", function (e) {
      e.stopPropagation();
      e.preventDefault();
      if (!_this.isCompleted()) {
        var _this$refUploadStatus;
        (_this$refUploadStatus = _this.refUploadStatus.current) === null || _this$refUploadStatus === void 0 || _this$refUploadStatus.UnCollapse();
        _this.setState({
          showComfirm: true
        });
        return;
      }
      _this.props.onClose && _this.props.onClose(true);
      _this.Close();
    });
    _defineProperty(_this, "Show", function () {
      _this.setState({
        open: true
      });
    });
    _defineProperty(_this, "closeComfirm", function () {
      _this.setState({
        showComfirm: false
      });
    });
    _defineProperty(_this, "renderUploadContent", function () {
      return jsxs(Box, {
        sx: {
          width: '100%',
          height: '100%',
          display: 'flex'
        },
        children: [jsx(UploadStatus, {
          ref: _this.refUploadStatus,
          ContentHeight: _this.props.ContentHeight,
          onUploadClose: _this.CheckClose
        }), jsx(Box, {
          sx: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: '#00000045',
            borderRadius: '5px',
            display: _this.state.showComfirm ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          },
          children: jsxs(Box, {
            sx: {
              display: 'flex',
              background: 'white',
              borderRadius: '10px',
              padding: '10px',
              flexDirection: 'column'
            },
            children: [jsx(Typography, {
              children: "There are files that have not been uploaded and they will not be uploaded!"
            }), jsxs(Box, {
              children: [jsx(Button, {
                sx: {
                  marginRight: '10px'
                },
                variant: "contained",
                onClick: function onClick() {
                  _this.Close();
                  _this.props.onClose && _this.props.onClose(false);
                },
                children: "Yes"
              }), jsx(Button, {
                variant: "outlined",
                onClick: _this.closeComfirm,
                children: "No"
              })]
            })]
          })
        })]
      });
    });
    _defineProperty(_this, "refUploadStatus", /*#__PURE__*/React__default.createRef());
    _this.state = {
      open: props.open,
      showComfirm: false
    };
    _this._monitor = new UploadMonitor(3, _this.executor, _this.getItem);
    _this._monitor.addEventListen('Error', _this.uploadError);
    _this._monitor.addEventListen('Completed', _this.uploadComplete);
    return _this;
  }
  _inherits(UploadLayout, _PureComponent);
  return _createClass(UploadLayout, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounted = true;
      this._monitor.events.removeAllListeners();
      this.items.forEach(function (x) {
        var _x$Signal2;
        return (_x$Signal2 = x.Signal) === null || _x$Signal2 === void 0 ? void 0 : _x$Signal2.abort();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return jsxs(UploadLayoutContext.Provider, {
        value: this,
        children: [this.props.children, this.props.inline !== true ? jsx(Box, {
          sx: {
            display: this.state.open ? 'flex' : 'none',
            justifyContent: this.props.Horizontal,
            alignItems: this.props.Vertical,
            position: 'fixed',
            zIndex: 1000,
            width: this.props.ContentWidth,
            top: this.props.Vertical === 'start' ? 0 : undefined,
            bottom: this.props.Vertical === 'end' ? 0 : undefined,
            left: this.props.Horizontal === 'start' ? 0 : undefined,
            right: this.props.Horizontal === 'end' ? 0 : undefined
          },
          children: this.state.open ? this.renderUploadContent() : jsx(Fragment, {})
        }) : jsx(Fragment, {})]
      });
    }
  }]);
}(PureComponent);
_defineProperty(UploadLayout, "defaultProps", {
  Horizontal: 'end',
  Vertical: 'end',
  ContentHeight: 400,
  ContentWidth: 400,
  open: false
});

export { Sleep, UploadLayoutContext, UploadLayout as default };
//# sourceMappingURL=index.js.map
