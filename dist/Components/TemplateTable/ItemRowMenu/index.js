import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

var ItemRowMenu = /*#__PURE__*/function (_Component) {
  function ItemRowMenu() {
    _classCallCheck(this, ItemRowMenu);
    return _callSuper(this, ItemRowMenu, arguments);
  }
  _inherits(ItemRowMenu, _Component);
  return _createClass(ItemRowMenu, [{
    key: "render",
    value: function render() {
      return jsxs("div", {
        className: "wrap-title-video",
        children: [jsx("span", {
          className: "title",
          children: this.props.children
        }), jsxs("div", {
          className: "container-action",
          children: [this.props.HideEdit !== true ? jsx(Tooltip, {
            title: "Edit",
            children: jsx(IconButton, {
              onClick: this.props.onEdit,
              children: jsx(Edit, {
                color: 'info',
                fontSize: "small"
              })
            })
          }) : '', this.props.HideDelete !== true ? jsx(Tooltip, {
            title: "Delete",
            children: jsx(IconButton, {
              onClick: this.props.onDelete,
              children: jsx(Delete, {
                color: 'error',
                fontSize: "small"
              })
            })
          }) : '']
        })]
      });
    }
  }]);
}(Component);

export { ItemRowMenu as default };
//# sourceMappingURL=index.js.map
