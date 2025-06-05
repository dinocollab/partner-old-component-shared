import { objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Box, Skeleton } from '@mui/material';
import React__default from 'react';

var _excluded = ["IsLoading"];
var SkeletonLazyWrap = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var _props$variant;
  var IsLoading = props.IsLoading,
    other = _objectWithoutProperties(props, _excluded);
  return jsxs(Box, _objectSpread2(_objectSpread2({
    ref: ref
  }, other), {}, {
    sx: IsLoading ? _objectSpread2({
      position: 'relative'
    }, props.sx || {}) : props.sx,
    children: [props.children, IsLoading ? jsx(Box, {
      sx: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        background: 'white',
        top: 0,
        left: 0
      },
      children: jsx(Skeleton, {
        variant: (_props$variant = props.variant) !== null && _props$variant !== void 0 ? _props$variant : "rectangular",
        animation: "wave",
        height: "100%",
        width: "100%"
      })
    }) : '']
  }));
});

export { SkeletonLazyWrap };
//# sourceMappingURL=index.js.map
