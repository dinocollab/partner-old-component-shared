import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { Component } from 'react';
import { authService } from 'partner-oidc-auth';

var _excluded = ["MapComponent"];
var SwitchComponent = /*#__PURE__*/function (_Component) {
  function SwitchComponent(props) {
    var _this;
    _classCallCheck(this, SwitchComponent);
    _this = _callSuper(this, SwitchComponent, [props]);
    _defineProperty(_this, "_isMounted", true);
    _defineProperty(_this, "getComponent", function () {
      var _Object$keys$find;
      var MapComponent = _this.props.MapComponent;
      var roles = _this.state.roles;
      var role = (_Object$keys$find = Object.keys(MapComponent).find(function (x) {
        return roles === null || roles === void 0 ? void 0 : roles.some(function (y) {
          return y === x;
        });
      })) !== null && _Object$keys$find !== void 0 ? _Object$keys$find : '';
      return MapComponent[role];
    });
    _defineProperty(_this, "render", function () {
      var _this$getComponent;
      var _this$props = _this.props;
        _this$props.MapComponent;
        var other = _objectWithoutProperties(_this$props, _excluded);
      var ComponentSub = (_this$getComponent = _this.getComponent()) !== null && _this$getComponent !== void 0 ? _this$getComponent : Div;
      // return <Component {...other} />
      if (/*#__PURE__*/React__default.isValidElement(ComponentSub)) {
        // component is a JSX element
        return ComponentSub;
      } else {
        // component is a ComponentType
        return jsx(ComponentSub, _objectSpread2({}, other));
      }
    });
    _this.state = {
      roles: []
    };
    return _this;
  }
  _inherits(SwitchComponent, _Component);
  return _createClass(SwitchComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      authService.getRoles().then(function (roles) {
        if (_this2._isMounted) {
          _this2.setState({
            roles: roles !== null && roles !== void 0 ? roles : []
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }]);
}(Component);
var Div = function Div(props) {
  return jsx("div", {
    children: props.children
  });
};

export { SwitchComponent as default };
//# sourceMappingURL=index.js.map
