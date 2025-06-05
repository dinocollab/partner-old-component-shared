import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { mergeDeep } from '../Helper/index.js';

var _excluded = ["data", "options"];
Chart.register(CategoryScale, LinearScale, PointElement, LineElement,
// Title,
Tooltip, Filler, Legend, {
  id: 'uniqueid5',
  afterDraw: function afterDraw(chart, easing) {
    var _chart$tooltip$getAct, _chart$tooltip;
    var activePoints = (_chart$tooltip$getAct = (_chart$tooltip = chart.tooltip) === null || _chart$tooltip === void 0 ? void 0 : _chart$tooltip.getActiveElements()) !== null && _chart$tooltip$getAct !== void 0 ? _chart$tooltip$getAct : [];
    if (activePoints.length) {
      var _chart$scales$y, _chart$scales$y2;
      var activePoint = activePoints[0];
      var ctx = chart.ctx;
      var x = activePoint.element.x;
      var topY = (_chart$scales$y = chart.scales.y) === null || _chart$scales$y === void 0 ? void 0 : _chart$scales$y.top;
      var bottomY = (_chart$scales$y2 = chart.scales.y) === null || _chart$scales$y2 === void 0 ? void 0 : _chart$scales$y2.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#a5b4c3';
      ctx.stroke();
      ctx.restore();
    }
  }
});
var options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  // elements: {
  //     line: {
  //         tension: 0.1  // smooth lines,
  //     },
  // },
  hover: {
    intersect: false
  },
  plugins: {
    legend: {
      position: 'top'
    }
    // title: {
    //     display: true,
    //     text: 'Chart.js Bar Chart',
    // },
    // tooltip: {
    //     callbacks: {
    //         label: function (context) {
    //             let label = context.label || context.dataset.label || '';
    //             if (label) {
    //                 label += ': ';
    //             }
    //             if (context.parsed.y !== null) {
    //                 label += FormatterUSD().format(context.parsed.y);
    //             }
    //             return label;
    //         }
    //     }
    // },
  },
  scales: {
    // "yAxes": {
    //     ticks: {
    //         callback: function (value, index, values) {
    //             return FormatterUSD().format(value as number)
    //         }
    //     }
    // }
    x: {
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function callback(val, index, ticks) {
          var amount = Math.floor(ticks.length / 6);
          // Hide every amount  tick label
          return index % amount === 0 ? typeof val === 'string' ? val : this.getLabelForValue(val) : null;
        },
        maxRotation: 0,
        align: 'inner'
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
var LineChart = function LineChart(props) {
  var data = props.data,
    optionProps = props.options,
    other = _objectWithoutProperties(props, _excluded);
  var _useState = useState(mergeDeep({}, options, optionProps !== null && optionProps !== void 0 ? optionProps : {})),
    _useState2 = _slicedToArray(_useState, 2),
    opt = _useState2[0];
    _useState2[1];
  return jsx(Line, _objectSpread2({
    options: opt,
    data: data
  }, other));
};

export { LineChart, data, monthLabels, options };
//# sourceMappingURL=LineChart.js.map
