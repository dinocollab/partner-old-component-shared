import { objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { styled, Tooltip, tooltipClasses } from '@mui/material';

var _excluded = ["className"];
var HtmlTooltip = styled(function (_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return jsx(Tooltip, _objectSpread2(_objectSpread2({}, props), {}, {
    classes: {
      popper: className
    }
  }));
})(function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty(_defineProperty({}, "& .".concat(tooltipClasses.tooltip), {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }), "& .".concat(tooltipClasses.arrow, ":before"), {
    color: '#f5f5f9',
    border: '1px solid #dadde9'
  });
});

export { HtmlTooltip };
//# sourceMappingURL=index.js.map
