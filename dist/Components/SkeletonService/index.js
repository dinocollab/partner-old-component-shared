import { extends as _extends, objectDestructuringEmpty as _objectDestructuringEmpty, slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { AuthorizeRouteContext } from 'partner-oidc-auth-ui';

var SkeletonServiceCreate = function SkeletonServiceCreate(option) {
  return function (WrappedComponent) {
    var hocComponent = function hocComponent(_ref) {
      var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
      var _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];
      var isMounted = useRef(false);
      var tokenSource = useRef(new AbortController());
      useEffect(function () {
        var _props$param;
        isMounted.current = true;
        setData(undefined);
        option.action(_objectSpread2({}, (_props$param = props.param) !== null && _props$param !== void 0 ? _props$param : {}), tokenSource.current.signal).then(function (data) {
          if (isMounted.current) {
            setData(data);
          }
          props.onResult && props.onResult(data);
        });
        return function () {
          isMounted.current = false;
          tokenSource.current.abort();
        };
      }, [props.extract]);
      useEffect(function () {}, [props.param]);
      return jsx(WrappedComponent, _objectSpread2(_objectSpread2({}, props), {}, {
        data: data,
        IsLoading: !data
      }));
    };
    return hocComponent;
  };
};
var RoleView = function RoleView(props) {
  var mapRole = new Set(props.Role);
  var IsShow = function IsShow(roles) {
    return roles.some(function (x) {
      return mapRole.has(x);
    });
  };
  return jsx(AuthorizeRouteContext.Consumer, {
    children: function children(_ref2) {
      var _state$roles;
      var state = _ref2.state;
      return IsShow((_state$roles = state.roles) !== null && _state$roles !== void 0 ? _state$roles : []) ? props.children : jsx(Fragment, {});
    }
  });
};

export { RoleView, SkeletonServiceCreate };
//# sourceMappingURL=index.js.map
