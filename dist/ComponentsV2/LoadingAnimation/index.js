import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import LoadingSquare from './LoadingSquare.js';

var LoadingAnimation = /*#__PURE__*/function (_Component) {
  function LoadingAnimation() {
    _classCallCheck(this, LoadingAnimation);
    return _callSuper(this, LoadingAnimation, arguments);
  }
  _inherits(LoadingAnimation, _Component);
  return _createClass(LoadingAnimation, [{
    key: "render",
    value: function render() {
      switch (this.props.variant) {
        case 'square':
        default:
          return jsx(LoadingSquare, {});
      }
    }
  }]);
}(Component);

export { LoadingAnimation, LoadingAnimation as default };
//# sourceMappingURL=index.js.map
