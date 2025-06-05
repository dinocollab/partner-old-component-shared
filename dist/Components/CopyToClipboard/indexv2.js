import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Tooltip } from '@mui/material';
import copy from 'clipboard-copy';
import * as React from 'react';

var EText;
(function (EText) {
  EText["Copy"] = "Copy";
  EText["Copied"] = "Copied to clipboard!";
})(EText || (EText = {}));
/**
 * Render prop component that wraps element in a Tooltip that shows "Copied to clipboard!" when the
 * copy function is invoked
 */
var CopyToClipboard = /*#__PURE__*/function (_React$Component) {
  function CopyToClipboard(props) {
    var _this;
    _classCallCheck(this, CopyToClipboard);
    _this = _callSuper(this, CopyToClipboard, [props]);
    _defineProperty(_this, "timer", void 0);
    _defineProperty(_this, "leaveDelay", 5000);
    _defineProperty(_this, "onCopy", function (content) {
      copy(content);
      _this.setState({
        text: EText.Copied
      });
      _this.timer = setTimeout(_this.handleOnTooltipClose, _this.leaveDelay);
    });
    _defineProperty(_this, "handleOnTooltipClose", function () {
      _this.setState({
        text: EText.Copy
      });
    });
    _this.state = {
      text: EText.Copy
    };
    return _this;
  }
  _inherits(CopyToClipboard, _React$Component);
  return _createClass(CopyToClipboard, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return jsx(Tooltip, _objectSpread2(_objectSpread2({
        placement: "bottom",
        title: this.state.text,
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
//# sourceMappingURL=indexv2.js.map
