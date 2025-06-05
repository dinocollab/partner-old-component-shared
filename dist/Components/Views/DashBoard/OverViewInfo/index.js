import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { Component } from 'react';
import { Stack, Box, Typography, Divider } from '@mui/material';
import { FormatterUSD, CreateUseMediaQuery } from 'partner-local-lib/helper';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import { BarChart } from '../../../Charts/BarChart.js';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import { SkeletonLazyWrap } from '../../../SkeletonLazyView/index.js';
import { HtmlTooltip } from '../../../HtmlTooltip/index.js';

var formatUSD = FormatterUSD().format;
// const colors = ["#95d469", "#5db4f9", "#ee955b"]
var colors = ['#92e2e3', '#5db4f9', '#5774f4'];
var OverViewInfo = /*#__PURE__*/function (_Component) {
  function OverViewInfo() {
    var _this;
    _classCallCheck(this, OverViewInfo);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, OverViewInfo, [].concat(args));
    _defineProperty(_this, "generateBarChart", function () {
      var _this$props$data, _this$props$data$Data, _this$props$data2;
      return {
        labels: (_this$props$data = _this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data.Labels,
        datasets: Object.keys((_this$props$data$Data = (_this$props$data2 = _this.props.data) === null || _this$props$data2 === void 0 ? void 0 : _this$props$data2.Datasets) !== null && _this$props$data$Data !== void 0 ? _this$props$data$Data : {}).reduce(function (result, key, index) {
          var _this$props$data$Data2, _this$props$data3;
          var data = (_this$props$data$Data2 = (_this$props$data3 = _this.props.data) === null || _this$props$data3 === void 0 ? void 0 : _this$props$data3.Datasets[key]) !== null && _this$props$data$Data2 !== void 0 ? _this$props$data$Data2 : [];
          result.push({
            label: key,
            data: data,
            backgroundColor: colors[index % colors.length]
          });
          return result;
        }, [])
      };
    });
    return _this;
  }
  _inherits(OverViewInfo, _Component);
  return _createClass(OverViewInfo, [{
    key: "render",
    value: function render() {
      var _this$props$data4, _CardData, _CardData2, _CardData3, _CardData4, _CardData5, _CardData6;
      var _ref = (_this$props$data4 = this.props.data) !== null && _this$props$data4 !== void 0 ? _this$props$data4 : {},
        CardData = _ref.CardData;
      CardData = CardData !== null && CardData !== void 0 ? CardData : {};
      return jsxs(Stack, {
        sx: {
          flex: 1,
          padding: '12px',
          gap: '6px',
          border: '1px solid rgba(0,0,0,0.12)',
          borderRadius: '4px'
        },
        children: [jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          },
          children: [jsx(AnalyticsOutlinedIcon, {
            color: 'primary'
          }), jsx(Typography, {
            variant: 'subtitle1',
            color: 'primary',
            sx: {
              fontWeight: 700
            },
            children: "Earnings"
          })]
        }), jsxs(Typography, {
          variant: 'body2',
          sx: {
            color: '#979797'
          },
          children: ["Year ", this.props.Year]
        }), jsx(Box, {}), jsxs(Box, {
          sx: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          },
          children: [jsx(InfoItem, {
            Title: 'All revenue',
            Value: formatUSD((_CardData = CardData) === null || _CardData === void 0 || (_CardData = _CardData.Revenue) === null || _CardData === void 0 ? void 0 : _CardData.Value),
            Description: "All revenue in the year ".concat(this.props.Year, "."),
            TitleColor: '#1976d2',
            data: (_CardData2 = CardData) === null || _CardData2 === void 0 || (_CardData2 = _CardData2.Revenue) === null || _CardData2 === void 0 ? void 0 : _CardData2.Data,
            IsLoading: this.props.IsLoading !== false,
            Icon: function Icon(isMobile) {
              return jsx(DonutSmallOutlinedIcon, {
                sx: {
                  fontSize: isMobile ? '3rem' : '6rem',
                  color: '#1976d2'
                }
              });
            }
          }), jsx(InfoItem, {
            Title: 'Last month',
            Value: formatUSD((_CardData3 = CardData) === null || _CardData3 === void 0 || (_CardData3 = _CardData3.LastMonth) === null || _CardData3 === void 0 ? void 0 : _CardData3.Value),
            Description: "The most recent month has been paid in the year ".concat(this.props.Year, "."),
            data: (_CardData4 = CardData) === null || _CardData4 === void 0 || (_CardData4 = _CardData4.LastMonth) === null || _CardData4 === void 0 ? void 0 : _CardData4.Data,
            IsLoading: this.props.IsLoading !== false,
            Icon: function Icon(isMobile) {
              return jsx(DataUsageOutlinedIcon, {
                sx: {
                  fontSize: isMobile ? '3rem' : '6rem',
                  color: '#1976d2'
                }
              });
            },
            TitleColor: '#1976d2'
          }), jsx(InfoItem, {
            Title: 'Balances',
            Value: formatUSD((_CardData5 = CardData) === null || _CardData5 === void 0 || (_CardData5 = _CardData5.Balance) === null || _CardData5 === void 0 ? void 0 : _CardData5.Value),
            Description: 'All revenue has not been paid.',
            data: (_CardData6 = CardData) === null || _CardData6 === void 0 || (_CardData6 = _CardData6.Balance) === null || _CardData6 === void 0 ? void 0 : _CardData6.Data,
            IsLoading: this.props.IsLoading !== false,
            Icon: function Icon(isMobile) {
              return jsx(PaidOutlinedIcon, {
                sx: {
                  fontSize: isMobile ? '3rem' : '6rem',
                  color: '#ffc107'
                }
              });
            },
            TitleColor: '#ffc107'
          })]
        }), jsx(Box, {
          height: '12px'
        }), jsx(SkeletonLazyWrap, {
          IsLoading: this.props.IsLoading !== false,
          component: Box,
          sx: {
            flex: 1,
            minHeight: '400px'
          },
          children: jsx(BarChart, {
            data: this.generateBarChart()
          })
        })]
      });
    }
  }]);
}(Component);
var InfoItem = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var _props$data;
  var isMobile = CreateUseMediaQuery();
  return jsx(HtmlTooltip, {
    placement: 'top',
    title: jsx(TooltipItem, {
      data: (_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : {},
      Description: props.Description
    }),
    arrow: true,
    children: jsxs(SkeletonLazyWrap, {
      IsLoading: props.IsLoading,
      component: Box,
      ref: ref,
      sx: {
        flex: 1,
        minWidth: '250px',
        minHeight: '100px',
        display: 'flex',
        border: '1px solid white',
        background: '#e0e0e0'
      },
      children: [jsx(Box, {
        sx: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '12px 8px'
        },
        children: props.Icon(isMobile)
      }), jsxs(Box, {
        sx: {
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        },
        children: [jsx(Typography, {
          sx: {
            fontWeight: 'bold',
            color: props.TitleColor
          },
          children: props.Title
        }), jsx(Typography, {
          variant: 'h6',
          children: props.Value
        })]
      })]
    })
  });
});
var GenerateItem = function GenerateItem(data) {
  return Object.keys(data).map(function (key) {
    var _data$key;
    return jsxs(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: [jsx(Typography, {
        sx: {
          fontWeight: '600',
          minWidth: '100px'
        },
        children: key
      }), jsx(Typography, {
        fontWeight: '500',
        children: formatUSD((_data$key = data[key]) !== null && _data$key !== void 0 ? _data$key : 0)
      })]
    }, key);
  });
};
var TooltipItem = function TooltipItem(props) {
  return jsxs(Box, {
    sx: {
      maxWidth: '300px',
      minWidth: '200px'
    },
    children: [GenerateItem(props.data), jsx(Divider, {}), jsx(Typography, {
      variant: 'caption',
      children: props.Description
    })]
  });
};

export { OverViewInfo };
//# sourceMappingURL=index.js.map
