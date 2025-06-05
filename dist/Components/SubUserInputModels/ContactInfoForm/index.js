import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Component } from 'react';
import { Close } from '@mui/icons-material';
import { Box, IconButton, FormControl, Button } from '@mui/material';
import { WrapFrom } from '../../SubComponent/index.js';
import * as SubLocal from 'partner-local-lib/SubComponents';
import { getErrorMessage } from '../../Helper/index.js';

var ContactInfoForm = /*#__PURE__*/function (_Component) {
  function ContactInfoForm() {
    var _this;
    _classCallCheck(this, ContactInfoForm);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ContactInfoForm, [].concat(args));
    _defineProperty(_this, "renderEdit", function () {
      return _this.props.Model ? jsx(Fragment, {
        children: jsx("input", {
          name: 'Id',
          hidden: true,
          defaultValue: _this.props.Model.Id
        })
      }) : jsx(Fragment, {});
    });
    return _this;
  }
  _inherits(ContactInfoForm, _Component);
  return _createClass(ContactInfoForm, [{
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$props$Model,
        _this$props$Model2;
      return jsxs(Box, {
        sx: {
          height: '100%',
          background: 'white'
        },
        children: [jsx(Box, {
          sx: {
            display: 'flex',
            justifyContent: 'flex-end'
          },
          children: jsx(IconButton, {
            onClick: this.props.onClose,
            children: jsx(Close, {})
          })
        }), jsx(WrapFrom, {
          Id: this.props.IdForm,
          IsForm: this.props.IsForm,
          onSubmit: this.props.onSubmit,
          children: jsx(Box, {
            sx: {
              display: 'flex',
              justifyContent: 'center'
            },
            children: jsxs(Box, {
              sx: {
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: '500px'
              },
              children: [this.renderEdit(), jsx(FormControl, {
                fullWidth: true,
                sx: {
                  m: 1
                },
                variant: 'outlined',
                children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
                  MaxLength: 250,
                  Title: 'Name',
                  maxRows: 1,
                  minRows: 1,
                  onBlur: function onBlur() {
                    return _this2.props.onBlur && _this2.props.onBlur('Name');
                  }
                }, getErrorMessage(this.props.MessageError, 'Name')), {}, {
                  inputProps: {
                    multiline: false,
                    name: 'Name'
                  },
                  defaultValue: (_this$props$Model = this.props.Model) === null || _this$props$Model === void 0 ? void 0 : _this$props$Model.Name
                }))
              }), jsx(FormControl, {
                fullWidth: true,
                sx: {
                  m: 1
                },
                variant: 'outlined',
                children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
                  MaxLength: 250,
                  Title: 'Link',
                  maxRows: 1,
                  minRows: 1,
                  onBlur: function onBlur() {
                    return _this2.props.onBlur && _this2.props.onBlur('Link');
                  }
                }, getErrorMessage(this.props.MessageError, 'Link')), {}, {
                  inputProps: {
                    multiline: false,
                    name: 'Link'
                  },
                  defaultValue: (_this$props$Model2 = this.props.Model) === null || _this$props$Model2 === void 0 ? void 0 : _this$props$Model2.Link
                }))
              }), jsx(Box, {
                sx: {
                  m: 1,
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end'
                },
                children: jsx(Button, {
                  variant: 'contained',
                  type: 'submit',
                  color: this.props.Model ? 'info' : 'success',
                  children: this.props.Model ? 'Update' : 'Create'
                })
              })]
            })
          })
        })]
      });
    }
  }]);
}(Component);

export { ContactInfoForm as default };
//# sourceMappingURL=index.js.map
