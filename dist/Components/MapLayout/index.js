import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Box } from '@mui/material';
import React__default, { Component } from 'react';

var MapLayoutContext = /*#__PURE__*/React__default.createContext({});
var MapLayout = /*#__PURE__*/function (_Component) {
  function MapLayout(props) {
    var _this;
    _classCallCheck(this, MapLayout);
    _this = _callSuper(this, MapLayout, [props]);
    _defineProperty(_this, "mapState", function () {
      var _this$refContainer$cl, _this$refContainer, _this$refContainer$cl2, _this$refContainer2, _this$refContainer$sc, _this$refContainer3, _this$refContainer$sc2, _this$refContainer4;
      _this.setState({
        layout: {
          height: (_this$refContainer$cl = (_this$refContainer = _this.refContainer) === null || _this$refContainer === void 0 ? void 0 : _this$refContainer.clientHeight) !== null && _this$refContainer$cl !== void 0 ? _this$refContainer$cl : 0,
          width: (_this$refContainer$cl2 = (_this$refContainer2 = _this.refContainer) === null || _this$refContainer2 === void 0 ? void 0 : _this$refContainer2.clientWidth) !== null && _this$refContainer$cl2 !== void 0 ? _this$refContainer$cl2 : 0,
          heightScroll: (_this$refContainer$sc = (_this$refContainer3 = _this.refContainer) === null || _this$refContainer3 === void 0 ? void 0 : _this$refContainer3.scrollHeight) !== null && _this$refContainer$sc !== void 0 ? _this$refContainer$sc : 0,
          widthScroll: (_this$refContainer$sc2 = (_this$refContainer4 = _this.refContainer) === null || _this$refContainer4 === void 0 ? void 0 : _this$refContainer4.scrollWidth) !== null && _this$refContainer$sc2 !== void 0 ? _this$refContainer$sc2 : 0
        },
        window: {
          height: window.innerHeight,
          width: window.innerWidth
        }
      });
    });
    _defineProperty(_this, "getConfig", function () {
      return {
        layout: _this.state.layout,
        window: _this.state.window
      };
    });
    _defineProperty(_this, "refContainer", null);
    _this.state = {
      layout: {
        height: 0,
        width: 0,
        heightScroll: 0,
        widthScroll: 0
      },
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    };
    return _this;
  }
  _inherits(MapLayout, _Component);
  return _createClass(MapLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mapState();
      window.addEventListener("resize", this.mapState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.mapState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return jsx(Box, {
        component: "div",
        ref: function ref(_ref) {
          return _this2.refContainer = _ref;
        },
        sx: this.props.sx,
        children: jsx(MapLayoutContext.Provider, {
          value: this.getConfig(),
          children: this.props.children
        })
      });
    }
  }]);
}(Component);

export { MapLayoutContext, MapLayout as default };
//# sourceMappingURL=index.js.map
