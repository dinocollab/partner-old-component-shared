import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, regenerator as _regenerator } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Component } from 'react';
import { Box, Button } from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { GlobalModalContext } from '../GlobalModal/index.js';
import { TableTemplateContext } from './TableTemplateContext.js';

var CRUDPannel = /*#__PURE__*/function (_Component) {
  function CRUDPannel(props) {
    var _this;
    _classCallCheck(this, CRUDPannel);
    _this = _callSuper(this, CRUDPannel, [props]);
    _defineProperty(_this, "IsMultiple", function (state) {
      var _state$selectionIds$l, _state$selectionIds;
      return ((_state$selectionIds$l = (_state$selectionIds = state.selectionIds) === null || _state$selectionIds === void 0 ? void 0 : _state$selectionIds.length) !== null && _state$selectionIds$l !== void 0 ? _state$selectionIds$l : 0) > 1;
    });
    _defineProperty(_this, "IsDisplayAction", function (state) {
      var _state$selectionIds2;
      return !!((_state$selectionIds2 = state.selectionIds) !== null && _state$selectionIds2 !== void 0 && _state$selectionIds2.length);
    });
    _defineProperty(_this, "getButtons", /*#__PURE__*/_regenerator().m(function _callee(that, state) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!that.props.Edit) {
              _context.n = 1;
              break;
            }
            _context.n = 1;
            return jsx(Button, {
              onClick: that.onEdit,
              sx: {
                width: 100,
                height: 30
              },
              color: "info",
              disabled: that.IsMultiple(state),
              startIcon: jsx(Edit, {}),
              children: "Edit"
            }, 'Edit');
          case 1:
            if (!that.props.Delete) {
              _context.n = 2;
              break;
            }
            _context.n = 2;
            return jsx(Button, {
              onClick: that.onDelete,
              sx: {
                width: 100,
                height: 30
              },
              color: "error",
              startIcon: jsx(Delete, {}),
              children: "Delete"
            }, 'Delete');
          case 2:
            if (!that.props.Details) {
              _context.n = 3;
              break;
            }
            _context.n = 3;
            return jsx(Button, {
              onClick: that.onDetails,
              sx: {
                width: 100,
                height: 30
              },
              color: "inherit",
              disabled: that.IsMultiple(state),
              startIcon: jsx(AppRegistrationIcon, {}),
              children: "Details"
            }, 'Details');
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    _defineProperty(_this, "onCreate", function () {
      var _this$ModalContext;
      (_this$ModalContext = _this.ModalContext) === null || _this$ModalContext === void 0 || _this$ModalContext.ShowModal({
        ContenModal: function ContenModal() {
          return _this.props.Create || jsx(EmptyDiv, {});
        },
        sx: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
    });
    _defineProperty(_this, "onEdit", function () {
      var _this$ModalContext2;
      (_this$ModalContext2 = _this.ModalContext) === null || _this$ModalContext2 === void 0 || _this$ModalContext2.ShowModal({
        ContenModal: function ContenModal() {
          return _this.props.Edit || jsx(EmptyDiv, {});
        },
        sx: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
    });
    _defineProperty(_this, "onDelete", function () {
      var _this$ModalContext3;
      (_this$ModalContext3 = _this.ModalContext) === null || _this$ModalContext3 === void 0 || _this$ModalContext3.ShowModal({
        ContenModal: function ContenModal() {
          return _this.props.Delete || jsx(EmptyDiv, {});
        },
        sx: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
    });
    _defineProperty(_this, "onDetails", function () {
      var _this$ModalContext4;
      (_this$ModalContext4 = _this.ModalContext) === null || _this$ModalContext4 === void 0 || _this$ModalContext4.ShowModal({
        ContenModal: function ContenModal() {
          return _this.props.Details || jsx(EmptyDiv, {});
        },
        sx: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
    });
    _defineProperty(_this, "ModalContext", void 0);
    return _this;
  }
  _inherits(CRUDPannel, _Component);
  return _createClass(CRUDPannel, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return jsx(GlobalModalContext.Consumer, {
        children: function children(context) {
          _this2.ModalContext = context;
          return jsx(TableTemplateContext.Consumer, {
            children: function children(_ref) {
              var state = _ref.state;
              return jsxs(Box, {
                sx: {
                  height: 50,
                  justifyContent: 'space-between',
                  display: 'flex',
                  padding: '10px',
                  position: 'relative'
                },
                children: [jsxs(Box, {
                  sx: {
                    justifyContent: 'space-between',
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center'
                  },
                  children: [jsx(Box, {}), _this2.props.Create && jsx(Button, {
                    onClick: _this2.onCreate,
                    sx: {
                      height: 30
                    },
                    variant: "contained",
                    startIcon: jsx(Add, {}),
                    children: "Create"
                  }, 'Create')]
                }), jsx(Box, {
                  sx: {
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    display: _this2.IsDisplayAction(state) ? 'flex' : 'none',
                    flex: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: '#e0e0e0'
                  },
                  children: Array.from(_this2.getButtons(_this2, state))
                })]
              });
            }
          });
        }
      });
    }
  }]);
}(Component);
var EmptyDiv = function EmptyDiv() {
  return jsx(Fragment, {});
};

export { CRUDPannel, CRUDPannel as default };
//# sourceMappingURL=CRUDPannel.js.map
