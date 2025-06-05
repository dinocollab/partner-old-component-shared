import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, typeof as _typeof, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React__default, { Component } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

var Transition = /*#__PURE__*/React__default.forwardRef(function Transition(props, ref) {
  return jsx(Slide, _objectSpread2({
    direction: "up",
    ref: ref
  }, props));
});
var MessageBoxContext = /*#__PURE__*/React__default.createContext({
  Close: function Close() {},
  open: function open() {}
});
var MessageBox = /*#__PURE__*/function (_Component) {
  function MessageBox(props) {
    var _this;
    _classCallCheck(this, MessageBox);
    _this = _callSuper(this, MessageBox, [props]);
    _defineProperty(_this, "Close", function () {
      _this.setState({
        option: undefined
      });
    });
    _defineProperty(_this, "open", function (option) {
      _this.setState({
        option: option
      });
    });
    _defineProperty(_this, "renderContent", function () {
      var option = _this.state.option;
      if (typeof option === 'function') {
        return option();
      } else if (_typeof(option) === 'object') {
        return jsxs(Fragment, {
          children: [jsx(DialogTitle, {
            children: option.Title
          }), jsx(DialogContent, {
            sx: {
              padding: "0 24px"
            },
            children: option.Content
          }), jsx(DialogActions, {
            children: option.Footer ? option.Footer : jsxs(Fragment, {
              children: [jsx(Button, {
                onClick: function onClick() {
                  _this.Close();
                  option.onSubmit && option.onSubmit(option.data);
                },
                children: "Yes"
              }), jsx(Button, {
                color: 'inherit',
                onClick: _this.Close,
                children: "No"
              })]
            })
          })]
        });
      }
    });
    _this.state = {};
    return _this;
  }
  _inherits(MessageBox, _Component);
  return _createClass(MessageBox, [{
    key: "render",
    value: function render() {
      return jsxs(MessageBoxContext.Provider, {
        value: this,
        children: [this.props.children, jsx(Dialog, {
          open: !!this.state.option,
          TransitionComponent: Transition,
          keepMounted: true,
          onClose: this.Close,
          "aria-describedby": "alert-dialog-global",
          sx: {
            zIndex: 5000
          },
          children: this.renderContent()
        })]
      });
    }
  }]);
}(Component);

export { MessageBoxContext, MessageBox as default };
//# sourceMappingURL=index.js.map
