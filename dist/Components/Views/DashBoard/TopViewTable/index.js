import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, toConsumableArray as _toConsumableArray, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { humannumber } from '../../../Helper/index.js';

var BorderLinearProgress = styled(LinearProgress)(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty(_defineProperty({
    height: 8,
    borderRadius: 5
  }, "&.".concat(linearProgressClasses.colorPrimary), {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  }), "& .".concat(linearProgressClasses.bar), {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
  });
});
var TopViewTable = /*#__PURE__*/function (_Component) {
  function TopViewTable() {
    _classCallCheck(this, TopViewTable);
    return _callSuper(this, TopViewTable, arguments);
  }
  _inherits(TopViewTable, _Component);
  return _createClass(TopViewTable, [{
    key: "render",
    value: function render() {
      var _this = this;
      var maxView = Math.max.apply(Math, _toConsumableArray(this.props.data.map(function (x) {
        return x.Value;
      })));
      return jsx(Table, {
        "aria-label": "simple table",
        children: jsx(TableBody, {
          children: this.props.data.map(function (row, index) {
            var progressValue = row.Value * 100 / maxView;
            progressValue = progressValue > 2 ? progressValue : 2;
            return jsxs(TableRow, {
              sx: {
                '&:last-child td, &:last-child th': {
                  border: 0
                }
              },
              children: [jsx(TableCell, {
                sx: {
                  flex: 9
                },
                children: _this.props.renderName ? _this.props.renderName(row) : row.Name
              }), jsx(TableCell, {
                sx: {
                  width: "150px"
                },
                align: "right",
                children: jsx(BorderLinearProgress, {
                  variant: "determinate",
                  value: progressValue
                })
              }), jsxs(TableCell, {
                sx: {
                  flex: 1
                },
                align: "right",
                children: [_this.props.Prefix, humannumber(row.Value), _this.props.Subfix]
              })]
            }, row.Id);
          })
        })
      });
    }
  }]);
}(Component);

export { TopViewTable as default };
//# sourceMappingURL=index.js.map
