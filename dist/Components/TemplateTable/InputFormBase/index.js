import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator, objectSpread2 as _objectSpread2 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { createContext, Component } from 'react';
import { GetErrorFromResponse, ConvertFormDataToJson, SingleValidate } from '../../Helper/index.js';

var InputFormContext = /*#__PURE__*/createContext({
  onBlur: function onBlur() {},
  MessageError: {}
});
var InputFormBase = /*#__PURE__*/function (_Component) {
  function InputFormBase(props) {
    var _this;
    _classCallCheck(this, InputFormBase);
    _this = _callSuper(this, InputFormBase, [props]);
    _defineProperty(_this, "_formValidate", void 0);
    _defineProperty(_this, "onSubmit", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
        var MessageError, formData, model, messageErrors;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              e.preventDefault();
              MessageError = _this.state.MessageError;
              formData = new FormData(e.target);
              model = ConvertFormDataToJson(formData);
              _this.setState({
                modelState: model
              });
              messageErrors = _this._formValidate.run(model);
              if (!messageErrors) {
                _context.n = 1;
                break;
              }
              _this.setState({
                MessageError: messageErrors
              });
              if (!(Object.keys(messageErrors).length > 0)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _context.n = 2;
              return _this.props.onSubmit(model)["catch"](function (error) {
                var messageError = GetErrorFromResponse(error, model);
                _this.setState({
                  MessageError: _objectSpread2(_objectSpread2({}, MessageError), messageError || {})
                });
              });
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "onBlur", function (keyName) {
      // console.log({ keyName })
      if (!_this._form.current) return;
      var MessageError = _this.state.MessageError;
      var formData = new FormData(_this._form.current);
      var model = ConvertFormDataToJson(formData);
      _this.setState({
        modelState: model
      });
      var error = SingleValidate(keyName, model, MessageError, _this._formValidate) || {};
      _this.setState({
        MessageError: error
      });
    });
    _defineProperty(_this, "cleanErrorMessage", function () {
      _this.setState({
        MessageError: {}
      });
    });
    _defineProperty(_this, "cleanErrorMessageByKey", function (params) {
      var obj = _objectSpread2({}, _this.state.MessageError);
      if (params in obj) delete obj[params];
      _this.setState({
        MessageError: obj
      });
    });
    _defineProperty(_this, "_form", void 0);
    _this._formValidate = props.FormValidate;
    _this.state = {
      onBlur: _this.onBlur,
      MessageError: {}
    };
    _this._form = /*#__PURE__*/React__default.createRef();
    return _this;
  }
  _inherits(InputFormBase, _Component);
  return _createClass(InputFormBase, [{
    key: "render",
    value: function render() {
      return jsx("form", {
        ref: this._form,
        onSubmit: this.onSubmit,
        children: jsx(InputFormContext.Provider, {
          value: this.state,
          children: this.props.children
        })
      });
    }
  }]);
}(Component);

export { InputFormContext, InputFormBase as default };
//# sourceMappingURL=index.js.map
