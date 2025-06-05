import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, Fragment } from 'react/jsx-runtime';
import { Modal, Box } from '@mui/material';
import { Component } from 'react';

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
var InputFormModal = /*#__PURE__*/function (_Component) {
  function InputFormModal(props) {
    var _this;
    _classCallCheck(this, InputFormModal);
    _this = _callSuper(this, InputFormModal, [props]);
    _defineProperty(_this, "renderContent", function () {
      var Form = _this.props.MapForm[_this.state.Type];
      var Wrap = _this.state.IsFull ? FullScreen : CenterScreen;
      if (Form) {
        return jsx(Wrap, {
          handleClose: _this.handleClose,
          children: Form ? jsx(Form, {
            data: _this.state.Model
          }) : ''
        });
      }
    });
    _defineProperty(_this, "handleClose", function () {
      _this.setState({
        open: false,
        Model: undefined
      });
    });
    _this.state = {
      open: false,
      Type: 'CREATE',
      IsFull: false
    };
    return _this;
  }
  _inherits(InputFormModal, _Component);
  return _createClass(InputFormModal, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return nextState.open !== this.state.open;
    }
  }, {
    key: "open",
    value: function open(Type, Model) {
      var IsFull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.setState({
        Type: Type,
        open: true,
        Model: Model,
        IsFull: IsFull
      });
    }
  }, {
    key: "render",
    value: function render() {
      return jsx(Modal, {
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "parent-modal-title",
        "aria-describedby": "parent-modal-description",
        // maxWidth="sm"
        sx: {
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        children: jsx(Fragment, {
          children: this.renderContent()
        })
      });
    }
  }]);
}(Component);

export { InputFormModal as default };
//# sourceMappingURL=index.js.map
