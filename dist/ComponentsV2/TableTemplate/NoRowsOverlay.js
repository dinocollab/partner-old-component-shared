import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Box } from '@mui/material';

var NoRowsOverlay = /*#__PURE__*/function (_Component) {
  function NoRowsOverlay() {
    _classCallCheck(this, NoRowsOverlay);
    return _callSuper(this, NoRowsOverlay, arguments);
  }
  _inherits(NoRowsOverlay, _Component);
  return _createClass(NoRowsOverlay, [{
    key: "render",
    value: function render() {
      return jsx(Box, {
        sx: {
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          alignItems: 'center'
        },
        children: jsx(Box, {
          component: "img",
          sx: {
            maxWidth: '180px',
            opacity: '35%'
          },
          src: "assets/images/nodata.png",
          alt: "nodata"
        })
      });
    }
  }]);
}(Component);

export { NoRowsOverlay as default };
//# sourceMappingURL=NoRowsOverlay.js.map
