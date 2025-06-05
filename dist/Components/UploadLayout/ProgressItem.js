import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Pending, ArrowCircleUp, Info, Done, Close } from '@mui/icons-material';
import { Box, Typography, LinearProgress, IconButton, Button } from '@mui/material';
import { Component } from 'react';

var ProgressItem = /*#__PURE__*/function (_Component) {
  function ProgressItem(props) {
    var _this;
    _classCallCheck(this, ProgressItem);
    _this = _callSuper(this, ProgressItem, [props]);
    _defineProperty(_this, "onRetry", function () {
      _this.props.onRetry();
    });
    _defineProperty(_this, "getIcons", function () {
      switch (_this.props.item.Status) {
        case 'Completed':
          return jsx(Done, {
            color: "success",
            fontSize: "small"
          });
        case 'Error':
          return jsx(Info, {
            color: "error",
            fontSize: "small"
          });
        case 'Processing':
          return jsx(ArrowCircleUp, {
            color: "info",
            fontSize: "small"
          });
        default:
          return jsx(Pending, {
            color: "info",
            fontSize: "small"
          });
      }
    });
    _defineProperty(_this, "getButton", function (item) {
      return item.Status === 'Completed' || _this.props.disableDelete === true ? jsx(Fragment, {}) : jsx(IconButton, {
        sx: {
          padding: 0
        },
        onClick: _this.onClose,
        children: jsx(Close, {
          fontSize: "small"
        })
      });
    });
    _defineProperty(_this, "onClose", function () {
      _this.setState({
        isHover: true
      });
    });
    _defineProperty(_this, "isShowHover", function (item) {
      return item.Status === 'Error' || _this.state.isHover;
    });
    _defineProperty(_this, "onConfirm", function () {
      _this.setState({
        isHover: false
      });
      if (_this.props.item.Status === 'Completed') return;
      _this.props.onClose();
    });
    _defineProperty(_this, "getContentHover", function (item) {
      return _this.state.isHover ? jsxs(Box, {
        sx: {
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1003,
          marginRight: '30px',
          padding: '0 10px',
          borderRadius: '15px'
        },
        children: [jsx(IconButton, {
          onClick: _this.onConfirm,
          sx: {
            background: '#e0e0e0',
            marginRight: '5px'
          },
          children: jsx(Done, {
            color: "action",
            fontSize: "small"
          })
        }), jsx(Typography, {
          color: 'red',
          children: "Are you sure delete!"
        })]
      }) : item.Status === 'Error' ? jsx(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          flex: 1
        },
        children: jsx(Box, {
          sx: {
            background: 'white'
          },
          children: jsx(Button, {
            onClick: _this.onRetry,
            children: "Retry"
          })
        })
      }) : jsx(Fragment, {});
    });
    _defineProperty(_this, "onHoverClose", function () {
      _this.setState({
        isHover: false
      });
    });
    _this.state = {
      isHover: false
    };
    return _this;
  }
  _inherits(ProgressItem, _Component);
  return _createClass(ProgressItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var _this2 = this;
      return Object.keys(nextProps).some(function (key) {
        return nextProps[key] !== _this2.props[key];
      }) || nextState.isHover !== this.state.isHover;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.isHover && this.props.item.Status === 'Completed') {
        this.setState({
          isHover: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$item$Valu;
      return jsxs(Fragment, {
        children: [jsxs(Box, {
          sx: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            margin: '12px 0',
            padding: '12px 8px',
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            gap: '5px'
          },
          children: [jsxs(Box, {
            sx: {
              display: 'flex',
              gap: '5px',
              alignItems: 'center'
            },
            children: [this.getIcons(), jsx(Box, {
              sx: {
                flex: 1,
                overflow: 'hidden'
              },
              children: jsx(Typography, {
                sx: {
                  textAlign: 'start'
                },
                noWrap: true,
                children: this.props.item.Name
              })
            }), this.getButton(this.props.item)]
          }), jsx(LinearProgress, {
            sx: {
              display: this.props.item.Status === 'Processing' ? 'flex' : 'none'
            },
            variant: "determinate",
            value: (_this$props$item$Valu = this.props.item.Value) !== null && _this$props$item$Valu !== void 0 ? _this$props$item$Valu : 0
          }), jsx(Box, {
            className: "pannel-actions",
            sx: {
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: this.isShowHover(this.props.item) ? 'flex' : 'none',
              // justifyContent: 'end',
              alignItems: 'center'
            },
            children: this.getContentHover(this.props.item)
          })]
        }), jsx(Box, {
          onClick: this.onHoverClose,
          sx: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: this.state.isHover ? 'flex' : 'none',
            zIndex: 1002
          }
        })]
      });
    }
  }]);
}(Component);

export { ProgressItem as default };
//# sourceMappingURL=ProgressItem.js.map
