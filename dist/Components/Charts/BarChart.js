import { objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { FormatterUSD } from 'partner-local-lib/helper';

var _excluded = ["data"];
Chart.register(CategoryScale, LinearScale, BarElement,
// Title,
Tooltip, Legend);
var options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    // title: {
    //     display: true,
    //     text: 'Chart.js Bar Chart',
    // },
    tooltip: {
      callbacks: {
        label: function label(context) {
          var label = context.dataset.label || context.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += FormatterUSD().format(context.parsed.y);
          }
          return label;
        }
      }
    }
  },
  scales: {
    yAxes: {
      ticks: {
        callback: function callback(value, index, values) {
          return FormatterUSD().format(value);
        }
      }
    }
  }
};
var monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var data = {
  labels: monthLabels,
  datasets: [{
    label: 'Dataset 1',
    data: monthLabels.map(function () {
      return faker.datatype.number({
        min: 0,
        max: 1000
      });
    }),
    backgroundColor: 'rgba(255, 99, 132, 0.5)'
  }, {
    label: 'Dataset 2',
    data: monthLabels.map(function () {
      return faker.datatype.number({
        min: 0,
        max: 1000
      });
    }),
    backgroundColor: 'rgba(53, 162, 235, 0.5)'
  }]
};
var BarChart = function BarChart(props) {
  var data = props.data,
    other = _objectWithoutProperties(props, _excluded);
  return jsx(Bar, _objectSpread2({
    options: options,
    data: data
  }, other));
};

export { BarChart, data, monthLabels, options };
//# sourceMappingURL=BarChart.js.map
