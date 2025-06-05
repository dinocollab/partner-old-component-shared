import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component, useState, useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { FormatterUSD } from 'partner-local-lib/helper';

var _excluded = ["data", "disableTooltip"];
Chart.register(ArcElement, Tooltip, Legend);
var createPieChartData = function createPieChartData(params) {
  var labelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '# of Votes';
  var initial = {
    labels: [],
    datasets: [{
      label: labelName,
      borderWidth: 1,
      data: [],
      backgroundColor: [],
      borderColor: []
    }]
  };
  return params.reduce(function (acc, cur) {
    var _acc$labels;
    (_acc$labels = acc.labels) === null || _acc$labels === void 0 || _acc$labels.push(cur.label);
    acc.datasets[0].data.push(cur.data);
    if (Array.isArray(acc.datasets[0].backgroundColor)) acc.datasets[0].backgroundColor.push(cur.backgroundColor);
    if (Array.isArray(acc.datasets[0].borderColor)) acc.datasets[0].borderColor.push(cur.borderColor);
    return acc;
  }, initial);
};
var defaultData = [{
  label: 'Red',
  data: 12,
  backgroundColor: 'rgba(255, 99, 132, 0.2)',
  borderColor: 'rgba(255, 99, 132, 1)'
}, {
  label: 'Blue',
  data: 19,
  backgroundColor: 'rgba(54, 162, 235, 0.2)',
  borderColor: 'rgba(54, 162, 235, 1)'
}, {
  label: 'Yellow',
  data: 3,
  backgroundColor: 'rgba(255, 206, 86, 0.2)',
  borderColor: 'rgba(255, 206, 86, 1)'
}, {
  label: 'Green',
  data: 5,
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderColor: 'rgba(75, 192, 192, 1)'
}, {
  label: 'Purple',
  data: 2,
  backgroundColor: 'rgba(153, 102, 255, 0.2)',
  borderColor: 'rgba(153, 102, 255, 1)'
}, {
  label: 'Orange',
  data: 3,
  backgroundColor: 'rgba(255, 159, 64, 0.2)',
  borderColor: 'rgba(255, 159, 64, 1)'
}];
var PieChartV2 = function PieChartV2(props) {
  var _options$plugins;
  var data = props.data,
    disableTooltip = props.disableTooltip,
    other = _objectWithoutProperties(props, _excluded);
  var _useState = useState({
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          enabled: disableTooltip !== true,
          callbacks: {
            label: function label(context) {
              var label = context.label || context.dataset.label || '';
              if (label) label += ': ';
              if (context.parsed !== null) label += FormatterUSD().format(context.parsed);
              return label;
            }
          }
        }
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  useEffect(function () {
    if (options.plugins && options.plugins.tooltip) {
      options.plugins.tooltip.enabled = props.disableTooltip !== true;
      setOptions(function (op) {
        return _objectSpread2({}, op);
      });
    }
  }, [options.plugins, (_options$plugins = options.plugins) === null || _options$plugins === void 0 || (_options$plugins = _options$plugins.tooltip) === null || _options$plugins === void 0 ? void 0 : _options$plugins.enabled, props.disableTooltip]);
  return jsx(Pie, _objectSpread2({
    options: options,
    data: data
  }, other));
};
var PieChart = /*#__PURE__*/function (_Component) {
  function PieChart() {
    _classCallCheck(this, PieChart);
    return _callSuper(this, PieChart, arguments);
  }
  _inherits(PieChart, _Component);
  return _createClass(PieChart, [{
    key: "render",
    value: function render() {
      var _this$props$data;
      return jsx(Pie, {
        data: createPieChartData((_this$props$data = this.props.data) !== null && _this$props$data !== void 0 ? _this$props$data : [])
      });
    }
  }]);
}(Component);
_defineProperty(PieChart, "defaultProps", {
  data: defaultData
});

export { PieChart, PieChartV2 };
//# sourceMappingURL=PieChart.js.map
