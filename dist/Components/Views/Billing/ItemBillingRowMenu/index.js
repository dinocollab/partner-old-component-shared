import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Tooltip, IconButton, MenuItem, ListItemIcon } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import GridOnIcon from '@mui/icons-material/GridOn';
import PaidIcon from '@mui/icons-material/Paid';
import { ReportStatus } from '../../../Models/index.js';
import MenuMore from '../MenuMore/index.js';

var ItemBillingRowMenu = /*#__PURE__*/function (_Component) {
  function ItemBillingRowMenu() {
    var _this;
    _classCallCheck(this, ItemBillingRowMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ItemBillingRowMenu, [].concat(args));
    _defineProperty(_this, "onDetail", function () {
      _this.props.onDetail(_this.props.data);
    });
    _defineProperty(_this, "onPay", function () {
      _this.props.onPay && _this.props.onPay(_this.props.data);
    });
    _defineProperty(_this, "IsDisablePay", function () {
      var _data$Payout;
      var data = _this.props.data;
      return (data === null || data === void 0 ? void 0 : data.Status) === ReportStatus.Paid || !((_data$Payout = data === null || data === void 0 ? void 0 : data.Payout) !== null && _data$Payout !== void 0 ? _data$Payout : 0);
    });
    _defineProperty(_this, "IsPaid", function () {
      var _this$props$data;
      return ((_this$props$data = _this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data.Status) === ReportStatus.Paid;
    });
    _defineProperty(_this, "IsNoDetails", function () {
      var _this$props$data$NoDe, _this$props$data2;
      return (_this$props$data$NoDe = (_this$props$data2 = _this.props.data) === null || _this$props$data2 === void 0 ? void 0 : _this$props$data2.NoDetails) !== null && _this$props$data$NoDe !== void 0 ? _this$props$data$NoDe : false;
    });
    //menu folder
    _defineProperty(_this, "renderMenuMore", function () {
      return jsx(MenuMore, {
        renderItems: _this.renderMenuItems
      });
    });
    _defineProperty(_this, "renderMenuItems", function () {
      return [jsxs(MenuItem, {
        onClick: _this.props.onEdit,
        children: [jsx(ListItemIcon, {
          children: jsx(Edit, {
            color: 'info'
          })
        }), "Edit"]
      }, "edit"), jsxs(MenuItem, {
        onClick: _this.props.onDelete,
        disabled: _this.IsPaid(),
        children: [jsx(ListItemIcon, {
          children: jsx(Delete, {
            color: 'error'
          })
        }), "Delete"]
      }, "Delete")];
    });
    return _this;
  }
  _inherits(ItemBillingRowMenu, _Component);
  return _createClass(ItemBillingRowMenu, [{
    key: "render",
    value: function render() {
      return jsxs("div", {
        className: "wrap-title-video",
        children: [jsx("span", {
          className: "title",
          children: this.props.children
        }), jsxs("div", {
          className: "container-action",
          children: [jsx(Tooltip, {
            title: "Pay",
            children: jsx("span", {
              children: jsx(IconButton, {
                disabled: this.IsDisablePay(),
                onClick: this.onPay,
                children: jsx(PaidIcon, {
                  sx: {
                    color: this.IsDisablePay() ? '' : "#b28900"
                  },
                  fontSize: "small"
                })
              })
            })
          }), jsx(Tooltip, {
            title: "Detail",
            children: jsx("span", {
              children: jsx(IconButton, {
                onClick: this.onDetail,
                disabled: this.IsNoDetails(),
                children: jsx(GridOnIcon, {
                  color: this.IsNoDetails() ? 'disabled' : 'primary',
                  fontSize: "small"
                })
              })
            })
          }), this.renderMenuMore()]
        })]
      });
    }
  }]);
}(Component);
var ItemManageRowMenu = /*#__PURE__*/function (_Component2) {
  function ItemManageRowMenu() {
    var _this2;
    _classCallCheck(this, ItemManageRowMenu);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _callSuper(this, ItemManageRowMenu, [].concat(args));
    _defineProperty(_this2, "onDetail", function () {
      _this2.props.onDetail(_this2.props.data);
    });
    _defineProperty(_this2, "IsNoDetails", function () {
      var _this2$props$data$NoD, _this2$props$data;
      return (_this2$props$data$NoD = (_this2$props$data = _this2.props.data) === null || _this2$props$data === void 0 ? void 0 : _this2$props$data.NoDetails) !== null && _this2$props$data$NoD !== void 0 ? _this2$props$data$NoD : false;
    });
    return _this2;
  }
  _inherits(ItemManageRowMenu, _Component2);
  return _createClass(ItemManageRowMenu, [{
    key: "render",
    value: function render() {
      return jsxs("div", {
        className: "wrap-title-video",
        children: [jsx("span", {
          className: "title",
          children: this.props.children
        }), jsx("div", {
          className: "container-action",
          children: jsx(Tooltip, {
            title: "Detail",
            children: jsx(IconButton, {
              onClick: this.onDetail,
              disabled: this.IsNoDetails(),
              children: jsx(GridOnIcon, {
                color: this.IsNoDetails() ? 'disabled' : 'primary',
                fontSize: "small"
              })
            })
          })
        })]
      });
    }
  }]);
}(Component);

export { ItemManageRowMenu, ItemBillingRowMenu as default };
//# sourceMappingURL=index.js.map
