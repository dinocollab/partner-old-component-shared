import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Box, Modal } from '@mui/material';
import React__default, { Component } from 'react';

var CenterScreen = function CenterScreen(props) {
  return jsx("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    children: props.children
  });
};
var FullScreen = function FullScreen(props) {
  return jsx(Box, {
    onMouseDown: props.handleClose,
    sx: {
      position: 'absolute',
      display: 'flex',
      flex: 1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'space-around'
    },
    children: props.children
  });
};
var TemplateModalContext = /*#__PURE__*/React__default.createContext({});
var TemplateModal = /*#__PURE__*/function (_Component) {
  function TemplateModal(props) {
    var _this;
    _classCallCheck(this, TemplateModal);
    _this = _callSuper(this, TemplateModal, [props]);
    _defineProperty(_this, "Close", function () {
      _this.props.onClose && _this.props.onClose();
      _this.setState({
        open: false
      });
    });
    _defineProperty(_this, "open", function () {
      _this.setState({
        open: true
      });
    });
    _defineProperty(_this, "renderContent", function () {
      return jsx(TemplateModalContext.Provider, {
        value: _this,
        children: _this.props.children
      });
    });
    _defineProperty(_this, "onClose", function () {
      _this.Close();
    });
    _this.state = {
      open: props.open || false
    };
    return _this;
  }
  _inherits(TemplateModal, _Component);
  return _createClass(TemplateModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (typeof this.props.open === 'boolean' && this.props.open !== this.state.open) {
        this.setState({
          open: this.props.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return jsx(Modal, {
        open: this.state.open,
        onClose: this.onClose,
        "aria-labelledby": "parent-modal-title",
        "aria-describedby": "parent-modal-description",
        sx: {
          padding: "10px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        children: this.renderContent()
      });
    }
  }]);
}(Component);

export { CenterScreen, FullScreen, TemplateModalContext, TemplateModal as default };
//# sourceMappingURL=index.js.map
