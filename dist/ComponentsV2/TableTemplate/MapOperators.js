import { getGridNumericOperators, getGridStringOperators } from '@mui/x-data-grid';
import { EOperator } from './type.js';

var StringMap = {
  contains: EOperator.Contains,
  equals: EOperator.Equal
};
var NumericMap = {
  '=': EOperator.Equal,
  '!=': EOperator.NotEqual,
  '>': EOperator.GreaterThan,
  '>=': EOperator.GreaterThanOrEqual,
  '<': EOperator.LessThan,
  '<=': EOperator.LessThanOrEqual
};
var getCustomGridNumericOperators = function getCustomGridNumericOperators() {
  var keys = new Set(Object.keys(NumericMap));
  var options = getGridNumericOperators().filter(function (x) {
    return keys.has(x.value);
  }).map(function (x) {
    x.label = x.value;
    x.value = NumericMap[x.value] + '';
    return x;
  });
  return options;
};
var getCustomGridStringOperators = function getCustomGridStringOperators() {
  var keys = new Set(Object.keys(StringMap));
  var options = getGridStringOperators().filter(function (x) {
    return keys.has(x.value);
  });
  return options.map(function (x) {
    x.label = x.value;
    x.value = StringMap[x.value] + '';
    return x;
  });
};
var MapOperators = function MapOperators(option) {
  switch (option.type) {
    // case 'number':
    //   return getCustomGridNumericOperators()
    case 'string':
    default:
      return getCustomGridStringOperators();
  }
};

export { MapOperators, MapOperators as default, getCustomGridNumericOperators, getCustomGridStringOperators };
//# sourceMappingURL=MapOperators.js.map
