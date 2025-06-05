import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React__default, { Component } from 'react';
import { Modal, Fade, Box, Backdrop } from '@mui/material';

var GlobalModalContext = /*#__PURE__*/React__default.createContext({});
var ContentPosition;
(function (ContentPosition) {
  ContentPosition[ContentPosition["Center"] = 0] = "Center";
})(ContentPosition || (ContentPosition = {}));
var MapGlobalModalContext = function MapGlobalModalContext(ElementSub) {
  return jsx(Fragment, {
    children: jsx(GlobalModalContext.Consumer, {
      children: function children(context) {
        return jsx(ElementSub, {
          context: context
        });
      }
    })
  });
};
var GlobalModal = /*#__PURE__*/function (_Component) {
  function GlobalModal(props) {
    var _this;
    _classCallCheck(this, GlobalModal);
    _this = _callSuper(this, GlobalModal, [props]);
    _defineProperty(_this, "ShowModal", function (option) {
      _this.setState({
        ContentModal: option.ContenModal,
        sx: option.sx,
        modalProps: option.modalProps,
        isOpen: true
      });
    });
    _defineProperty(_this, "clearContentModal", function () {
      _this.setState({
        ContentModal: undefined
      });
    });
    _defineProperty(_this, "CloseModal", function () {
      _this.setState({
        isOpen: false
      }, function () {
        setTimeout(_this.clearContentModal, 500);
      });
    });
    _defineProperty(_this, "GenerateContent", function () {
      var _this$state$ContentMo;
      var Content = (_this$state$ContentMo = _this.state.ContentModal) !== null && _this$state$ContentMo !== void 0 ? _this$state$ContentMo : function () {
        return jsx(Fragment, {});
      };
      var Temp = /*#__PURE__*/React__default.forwardRef(function () {
        return jsx(Content, {});
      });
      return jsx(Temp, {});
    });
    _this.state = {
      isOpen: false
    };
    return _this;
  }
  _inherits(GlobalModal, _Component);
  return _createClass(GlobalModal, [{
    key: "render",
    value: function render() {
      return jsxs(GlobalModalContext.Provider, {
        value: this,
        children: [this.props.children, jsx(Modal, _objectSpread2(_objectSpread2({
          open: this.state.isOpen,
          sx: this.state.sx,
          closeAfterTransition: true,
          slots: {
            backdrop: Backdrop
          },
          slotProps: {
            backdrop: {
              timeout: 400
            }
          }
        }, this.state.modalProps), {}, {
          children: jsx(Fade, {
            "in": this.state.isOpen,
            children: jsx(Box, {
              sx: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              },
              children: this.GenerateContent()
            })
          })
        }))]
      });
    }
  }]);
}(Component);

export { ContentPosition, GlobalModal, GlobalModalContext, MapGlobalModalContext, GlobalModal as default };
//# sourceMappingURL=index.js.map
