import { createClass as _createClass, objectSpread2 as _objectSpread2, objectWithoutProperties as _objectWithoutProperties, defineProperty as _defineProperty, classCallCheck as _classCallCheck, toConsumableArray as _toConsumableArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { styled, Typography, Tooltip, tooltipClasses, Chip, Stack } from '@mui/material';

var _excluded = ["className"];
var TableFormatterBase = /*#__PURE__*/_createClass(function TableFormatterBase() {
  var _this = this;
  _classCallCheck(this, TableFormatterBase);
  _defineProperty(this, "_parseArray", function (args) {
    try {
      var arr = JSON.parse(args !== null && args !== void 0 ? args : 'error');
      if (Array.isArray(arr)) return arr;else return [];
    } catch (error) {
      return [];
    }
  });
  _defineProperty(this, "date", function (params) {
    return params ? new Date(params).toLocaleString() : '';
  });
  _defineProperty(this, "tooltip", function (args) {
    if (!args) return jsx(Fragment, {});
    return jsx(Tooltip, {
      title: args,
      placement: "top",
      children: jsx(Typography, {
        noWrap: true,
        children: args
      })
    });
  });
  _defineProperty(this, "arrayChip", function (args, name) {
    var arr = _this._parseArray(args);
    var temps = arr.reduce(function (a, b) {
      a.push.apply(a, _toConsumableArray(b.split(/\W+/)));
      return a;
    }, []);
    return _this.chips(temps, name);
  });
  _defineProperty(this, "chips", function (args, name) {
    var chipElements = args.map(function (e, i) {
      return jsx(CustomChip, {
        label: e,
        size: "small",
        variant: "outlined"
      }, i);
    });
    return jsx(HtmlTooltip, {
      placement: "left",
      title: jsxs(Stack, {
        sx: {
          gap: '4px',
          py: '6px',
          minWidth: '200px',
          maxWidth: '400px '
        },
        children: [jsx(TooltipHeaderText, {
          children: name
        }), jsx(Stack, {
          direction: "row",
          spacing: 1,
          sx: {
            gap: '4px',
            flexWrap: 'wrap'
          },
          children: chipElements
        })]
      }),
      children: jsx(Stack, {
        direction: "row",
        sx: {
          gap: '4px',
          flex: 1,
          alignItems: 'center',
          height: '100%',
          width: '100%',
          overflow: 'hidden'
        },
        children: chipElements
      })
    });
  });
});
var TableFormatter = new TableFormatterBase();
var TooltipHeaderText = styled(function (props) {
  return jsx(Typography, _objectSpread2({
    variant: "subtitle1"
  }, props));
})({
  color: '#0095ff',
  fontWeight: 700
});
var HtmlTooltip = styled(function (_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return jsx(Tooltip, _objectSpread2(_objectSpread2({}, props), {}, {
    arrow: true,
    classes: {
      popper: className
    }
  }));
})(function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty({}, "& .".concat(tooltipClasses.tooltip), {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 500,
    minHeight: 120,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  });
});
var CustomChip = styled(Chip)({
  '&.MuiChip-root': {
    margin: '0!important'
  },
  '& .MuiChip-label': {
    mt: '2px'
  }
});

export { TableFormatter, TableFormatter as default };
//# sourceMappingURL=TableFormatter.js.map
