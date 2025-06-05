import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var HorizontalBarChart = /*#__PURE__*/function (_Component) {
  function HorizontalBarChart() {
    var _this;
    _classCallCheck(this, HorizontalBarChart);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, HorizontalBarChart, [].concat(args));
    _defineProperty(_this, "getOptions", function (title) {
      return {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          },
          title: {
            display: true,
            text: title || 'Horizontal Bar Chart'
          }
        }
      };
    });
    _defineProperty(_this, "getData", function () {
      var unitName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unit';
      var data = labels.map(function (e) {
        return {
          label: e,
          value: faker.datatype.number({
            min: 0,
            max: 1000
          })
        };
      });
      var sortData = data.sort(function (a, b) {
        return b.value - a.value;
      });
      return {
        labels: sortData.map(function (e) {
          return e.label;
        }),
        datasets: [{
          label: unitName,
          data: sortData.map(function (e) {
            return e.value;
          }),
          borderColor: 'rgb(255, 99, 133, 0.6)',
          backgroundColor: 'rgba(255, 99, 133, 0.3)'
        }]
      };
    });
    return _this;
  }
  _inherits(HorizontalBarChart, _Component);
  return _createClass(HorizontalBarChart, [{
    key: "render",
    value: function render() {
      var data = this.props.data || this.getData();
      var options = this.props.options || this.getOptions(this.props.title);
      return jsx(Bar, {
        options: options,
        data: data
      });
    }
  }]);
}(Component);

export { HorizontalBarChart, HorizontalBarChart as default };
//# sourceMappingURL=HorizontalBarChart.js.map
