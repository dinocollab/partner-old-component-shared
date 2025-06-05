import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Stack, Box, Typography } from '@mui/material';
import { Component } from 'react';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import { SkeletonLazyWrap } from '../../../SkeletonLazyView/index.js';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
var defaultData = [{
  label: 'Audios',
  data: [0, 200, 300, 500, 250, 300, 400, 600, 550],
  borderColor: 'rgb(255, 99, 132)',
  backgroundColor: 'rgba(255, 99, 132, 0.5)'
}, {
  label: 'Albums',
  data: [0, 100, 150, 400, 480, 400, 420, 500, 400],
  borderColor: 'rgb(53, 162, 235)',
  backgroundColor: 'rgba(53, 162, 235, 0.5)'
}];
var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
};
var DeliveryInfo = /*#__PURE__*/function (_Component) {
  function DeliveryInfo() {
    _classCallCheck(this, DeliveryInfo);
    return _callSuper(this, DeliveryInfo, arguments);
  }
  _inherits(DeliveryInfo, _Component);
  return _createClass(DeliveryInfo, [{
    key: "render",
    value: function render() {
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
            color: "primary"
          }), jsx(Typography, {
            variant: "subtitle1",
            color: "primary",
            sx: {
              fontWeight: 700
            },
            children: "Audios"
          })]
        }), jsx(SkeletonLazyWrap, {
          IsLoading: this.props.IsLoading !== false,
          component: Box,
          sx: {
            flex: 1,
            minHeight: '400px'
          },
          children: this.props.data && jsx(Line, {
            options: options,
            data: {
              labels: labels,
              datasets: this.props.data
            }
          })
        })]
      });
    }
  }]);
}(Component);
_defineProperty(DeliveryInfo, "defaultProps", {
  data: defaultData
});

export { DeliveryInfo as default };
//# sourceMappingURL=index.js.map
