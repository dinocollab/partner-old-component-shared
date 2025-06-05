import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Spinner } from 'reactstrap';

var LazySpinner = /*#__PURE__*/function (_Component) {
  function LazySpinner() {
    _classCallCheck(this, LazySpinner);
    return _callSuper(this, LazySpinner, arguments);
  }
  _inherits(LazySpinner, _Component);
  return _createClass(LazySpinner, [{
    key: "render",
    value: function render() {
      return jsxs("div", {
        className: "container-spinner",
        children: [jsx(Spinner, {
          type: "grow",
          color: "primary"
        }), jsx(Spinner, {
          type: "grow",
          color: "primary"
        }), jsx(Spinner, {
          type: "grow",
          color: "primary"
        })]
      });
    }
  }]);
}(Component);

export { LazySpinner as default };
//# sourceMappingURL=LazySpinner.js.map
