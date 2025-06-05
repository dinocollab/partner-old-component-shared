import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Box, IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Component } from 'react';
import Avatar from 'react-avatar-edit';
import { Edit } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

var EditAvatar = /*#__PURE__*/function (_Component) {
  function EditAvatar(props) {
    var _this;
    _classCallCheck(this, EditAvatar);
    _this = _callSuper(this, EditAvatar, [props]);
    _defineProperty(_this, "renderEditAvatar", function () {
      return jsx(Avatar, {
        width: 390,
        height: 295,
        minCropRadius: 100,
        onCrop: _this.onCrop,
        onClose: _this.onClose,
        borderStyle: {
          display: 'none'
        },
        src: _this.state.src,
        labelStyle: _this.state.labelStyle
      });
    });
    _defineProperty(_this, "onEditClick", function () {
      var _this$refInput;
      (_this$refInput = _this.refInput) === null || _this$refInput === void 0 || _this$refInput.click();
    });
    _defineProperty(_this, "onChange", function () {
      if (!_this.refInput || !_this.refInput.files) return;
      var file = _this.refInput.files[0];
      _this.setState({
        src: URL.createObjectURL(file)
      });
    });
    _defineProperty(_this, "refInput", null);
    _defineProperty(_this, "onSave", function () {
      _this.onClose();
      _this.state.preview && _this.props.onSave && _this.props.onSave(_this.state.preview);
    });
    _this.state = {
      labelStyle: {
        color: 'red',
        fontSize: '24px'
      }
    };
    _this.onCrop = _this.onCrop.bind(_this);
    _this.onClose = _this.onClose.bind(_this);
    return _this;
  }
  _inherits(EditAvatar, _Component);
  return _createClass(EditAvatar, [{
    key: "onClose",
    value: function onClose() {
      if (this.refInput) {
        this.refInput.value = '';
      }
      this.setState({
        preview: undefined,
        src: undefined
      });
    }
  }, {
    key: "onCrop",
    value: function onCrop(preview) {
      this.setState({
        preview: preview
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$sx,
        _this2 = this;
      return jsxs(Fragment, {
        children: [jsxs(Box, {
          className: 'container-edit',
          sx: _objectSpread2({
            position: 'relative',
            minWidth: '100px',
            minHeight: '100px'
          }, (_this$props$sx = this.props.sx) !== null && _this$props$sx !== void 0 ? _this$props$sx : {}),
          children: [this.props.children, jsx("a", {
            onClick: this.onEditClick,
            className: 'overlay-edit',
            children: jsx(Edit, {})
          }), jsx("input", {
            onChange: this.onChange,
            accept: 'image/*',
            type: 'file',
            ref: function ref(_ref) {
              return _this2.refInput = _ref;
            },
            hidden: true
          })]
        }), jsx(Modal, {
          open: !!this.state.src,
          "aria-labelledby": 'edit-avatar-title',
          "aria-describedby": 'edit-avatar-description',
          sx: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          children: jsxs(Box, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#e0e0e0',
              position: 'relative'
            },
            children: [this.renderEditAvatar(), jsx(IconButton, {
              onClick: this.onSave,
              sx: {
                color: 'white',
                position: 'absolute',
                right: 0,
                top: 0,
                p: '7px'
              },
              children: jsx(CheckCircleOutlineIcon, {})
            })]
          })
        })]
      });
    }
  }]);
}(Component);

export { EditAvatar as default };
//# sourceMappingURL=index.js.map
