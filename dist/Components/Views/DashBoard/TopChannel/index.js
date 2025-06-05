import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { RowTitle } from '../Common/index.js';
import { SkeletonLazyWrap } from '../../../SkeletonLazyView/index.js';
import TopViewTable from '../TopViewTable/index.js';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';

var TopChannel = /*#__PURE__*/function (_Component) {
  function TopChannel() {
    _classCallCheck(this, TopChannel);
    return _callSuper(this, TopChannel, arguments);
  }
  _inherits(TopChannel, _Component);
  return _createClass(TopChannel, [{
    key: "render",
    value: function render() {
      var _this$props$data, _this$props$data2;
      return jsxs(Stack, {
        sx: {
          flex: 1,
          border: '1px solid rgba(0,0,0,0.12)',
          borderRadius: '4px',
          padding: '12px',
          gap: '6px'
        },
        children: [jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          },
          children: [jsx(AnalyticsOutlinedIcon, {
            color: "primary"
          }), jsx(Typography, {
            variant: "subtitle1",
            color: "primary",
            sx: {
              fontWeight: 700,
              flex: 1
            },
            children: this.props.Title
          })]
        }), jsxs(Typography, {
          variant: "body2",
          sx: {
            color: '#979797'
          },
          children: ["Year ", this.props.Year]
        }), jsx(Box, {
          mx: "-16px",
          children: jsx(SkeletonLazyWrap, {
            IsLoading: this.props.IsLoading !== false,
            component: Box,
            sx: {
              minHeight: '300px'
            },
            children: this.props.IsLoading === false && !((_this$props$data = this.props.data) !== null && _this$props$data !== void 0 && _this$props$data.length) ? jsx(Box, {
              sx: {
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              },
              children: "None"
            }) : jsx(TopViewTable, {
              data: (_this$props$data2 = this.props.data) !== null && _this$props$data2 !== void 0 ? _this$props$data2 : [],
              Prefix: this.props.Prefix,
              Subfix: this.props.Subfix,
              renderName: function renderName(data) {
                return jsx(RowTitle, {
                  Thumb: data.Thumb,
                  type: 'Channel',
                  Id: data.Id,
                  children: data.Name
                });
              }
            })
          })
        })]
      });
    }
  }]);
}(Component);

export { TopChannel as default };
//# sourceMappingURL=index.js.map
