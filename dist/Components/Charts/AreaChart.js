import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
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
var defaultData = [{
  fill: true,
  label: 'Audios',
  data: [0, 200, 300, 500, 250, 300, 400, 600, 550],
  borderColor: 'rgb(255, 99, 132)',
  backgroundColor: 'rgba(255, 99, 132, 0.5)'
}, {
  fill: true,
  label: 'Albums',
  data: [0, 100, 150, 400, 480, 400, 420, 500, 400],
  borderColor: 'rgb(53, 162, 235)',
  backgroundColor: 'rgba(53, 162, 235, 0.5)'
}];
var AreaChart = /*#__PURE__*/function (_Component) {
  function AreaChart() {
    _classCallCheck(this, AreaChart);
    return _callSuper(this, AreaChart, arguments);
  }
  _inherits(AreaChart, _Component);
  return _createClass(AreaChart, [{
    key: "render",
    value: function render() {
      if (!this.props.data) return;
      return jsx(Line, {
        options: options,
        data: {
          labels: labels,
          datasets: this.props.data
        }
      });
    }
  }]);
}(Component);
_defineProperty(AreaChart, "defaultProps", {
  data: defaultData
});

export { AreaChart };
//# sourceMappingURL=AreaChart.js.map
