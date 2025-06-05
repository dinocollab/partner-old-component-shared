import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Box, Button } from '@mui/material';
import { Component } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

var PanelAction = /*#__PURE__*/function (_Component) {
  function PanelAction() {
    _classCallCheck(this, PanelAction);
    return _callSuper(this, PanelAction, arguments);
  }
  _inherits(PanelAction, _Component);
  return _createClass(PanelAction, [{
    key: "render",
    value: function render() {
      return jsxs(Box, {
        sx: {
          display: 'flex'
        },
        children: [jsx(Box, {
          sx: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: "10px"
          }
        }), jsx(Box, {
          sx: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: "10px"
          },
          children: jsx(Button, {
            onClick: this.props.onCreate,
            variant: "contained",
            endIcon: jsx(AddCircleIcon, {}),
            children: this.props.ButtonText
          })
        })]
      });
    }
  }]);
}(Component);
_defineProperty(PanelAction, "defaultProps", {
  ButtonText: 'Create'
});

export { PanelAction as default };
//# sourceMappingURL=index.js.map
