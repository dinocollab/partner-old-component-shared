import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);
var createChartData = function createChartData(params) {
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
var DoughnutChart = /*#__PURE__*/function (_Component) {
  function DoughnutChart() {
    _classCallCheck(this, DoughnutChart);
    return _callSuper(this, DoughnutChart, arguments);
  }
  _inherits(DoughnutChart, _Component);
  return _createClass(DoughnutChart, [{
    key: "render",
    value: function render() {
      var _this$props$data;
      return jsx(Doughnut, {
        data: createChartData((_this$props$data = this.props.data) !== null && _this$props$data !== void 0 ? _this$props$data : [])
      });
    }
  }]);
}(Component);
_defineProperty(DoughnutChart, "defaultProps", {
  data: defaultData
});

export { DoughnutChart };
//# sourceMappingURL=DoughnutChart.js.map
