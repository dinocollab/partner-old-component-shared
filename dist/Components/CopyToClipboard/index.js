import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Tooltip } from '@mui/material';
import copy from 'clipboard-copy';
import * as React from 'react';

/**
 * Render prop component that wraps element in a Tooltip that shows "Copied to clipboard!" when the
 * copy function is invoked
 */
var CopyToClipboard = /*#__PURE__*/function (_React$Component) {
  function CopyToClipboard() {
    var _this;
    _classCallCheck(this, CopyToClipboard);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CopyToClipboard, [].concat(args));
    _defineProperty(_this, "state", {
      showTooltip: false
    });
    _defineProperty(_this, "onCopy", function (content) {
      copy(content);
      _this.setState({
        showTooltip: true
      });
    });
    _defineProperty(_this, "handleOnTooltipClose", function () {
      _this.setState({
        showTooltip: false
      });
    });
    return _this;
  }
  _inherits(CopyToClipboard, _React$Component);
  return _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      return jsx(Tooltip, _objectSpread2(_objectSpread2({
        open: this.state.showTooltip,
        title: "Copied to clipboard!",
        leaveDelay: 1500,
        onClose: this.handleOnTooltipClose
      }, this.props.TooltipProps || {}), {}, {
        children: this.props.children({
          copy: this.onCopy
        })
      }));
    }
  }]);
}(React.Component);

export { CopyToClipboard as default };
//# sourceMappingURL=index.js.map
