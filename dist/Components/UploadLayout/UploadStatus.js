import { objectSpread2 as _objectSpread2, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { ExpandMore, Close } from '@mui/icons-material';
import { styled, Card, Accordion, CardHeader, Typography, IconButton, Box, Button } from '@mui/material';
import { Component } from 'react';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ProgressItem from './ProgressItem.js';
import { UploadLayoutContext } from './index.js';

var UploadStatus = /*#__PURE__*/function (_Component) {
  function UploadStatus(props) {
    var _this;
    _classCallCheck(this, UploadStatus);
    _this = _callSuper(this, UploadStatus, [props]);
    _defineProperty(_this, "isUnmounted", false);
    _defineProperty(_this, "UnCollapse", function () {
      _this.setState({
        expand: true
      });
    });
    _defineProperty(_this, "expanChange", function () {
      _this.setState({
        expand: !_this.state.expand
      });
    });
    _defineProperty(_this, "gernerateItems", function (context) {
      return context.items.map(function (item) {
        return jsx(ProgressItem, _objectSpread2(_objectSpread2({
          disableDelete: true,
          item: item
        }, item), {}, {
          onClose: function onClose() {
            return context.onItemClose(item);
          },
          onRetry: function onRetry() {
            return context.onItemRetry(item);
          }
        }), 'key' + item.Id);
      });
    });
    _defineProperty(_this, "getErrorTitle", function (context) {
      var errors = context.getErrors().length;
      var onRetryAll = function onRetryAll(e) {
        e.preventDefault();
        e.stopPropagation();
        context.onRetryAll();
      };
      return errors ? jsxs(Box, {
        sx: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        children: [jsx(Button, {
          onClick: onRetryAll,
          children: "Retry all"
        }), jsxs(Typography, {
          variant: "subtitle2",
          children: [context.getErrors().length, " error(s)"]
        })]
      }) : jsx(Fragment, {});
    });
    _this.state = {
      expand: true
    };
    return _this;
  }
  _inherits(UploadStatus, _Component);
  return _createClass(UploadStatus, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounted = true;
    }
  }, {
    key: "componentDidMount",
    value:
    // setState = <K extends keyof IUploadStatusState>(state: Pick<IUploadStatusState, K> | IUploadStatusState, callback?: () => void) => {
    //     if (this.isUnmounted) return
    //     super.setState(state, callback)
    // }
    function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return jsx(UploadLayoutContext.Consumer, {
        children: function children(context) {
          return jsx(Card, {
            sx: {
              flex: 1,
              background: 'white',
              margin: '10px',
              border: '1px solid #e0e0e0'
            },
            children: jsxs(Accordion, {
              expanded: _this2.state.expand,
              onChange: _this2.expanChange,
              sx: {
                padding: 0
              },
              children: [jsx(AccordionSummary, {
                expandIcon: jsx(ExpandMore, {}),
                sx: {
                  display: 'flex'
                },
                children: jsx(CardHeader, {
                  action: jsx(IconButton, {
                    "aria-label": "settings",
                    onClick: _this2.props.onUploadClose,
                    sx: {
                      padding: 0
                    },
                    children: jsx(Close, {})
                  }),
                  title: jsxs(Typography, {
                    variant: "subtitle1",
                    sx: {
                      fontWeight: 'bold'
                    },
                    children: ["Upload list (", context.getComplete().length, "/", context.items.length, ")"]
                  }),
                  subheader: _this2.getErrorTitle(context),
                  sx: {
                    padding: '5px',
                    flex: 1,
                    '& .MuiCardHeader-action': {
                      margin: 0
                    }
                  }
                })
              }), jsx(AccordionDetails, {
                sx: {
                  height: _this2.props.ContentHeight,
                  padding: '8px 12px',
                  overflow: 'auto'
                },
                children: _this2.gernerateItems(context)
              })]
            })
          });
        }
      });
    }
  }]);
}(Component);
var AccordionSummary = styled(function (props) {
  return jsx(MuiAccordionSummary, _objectSpread2({
    expandIcon: jsx(ExpandMore, {
      sx: {
        fontSize: '0.9rem'
      }
    })
  }, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    padding: ' 0 5px',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      // transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      // transform: 'rotate(90deg)',
      margin: 0
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
      display: 'flex',
      marginLeft: theme.spacing(1)
    }
  };
});
var AccordionDetails = styled(MuiAccordionDetails)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
  };
});

export { UploadStatus as default };
//# sourceMappingURL=UploadStatus.js.map
