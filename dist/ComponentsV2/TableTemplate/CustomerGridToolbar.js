import { objectSpread2 as _objectSpread2, toConsumableArray as _toConsumableArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { useGridApiContext, GridToolbar } from '@mui/x-data-grid';

var CustomerGridToolbar = function CustomerGridToolbar(props) {
  var apiRef = useGridApiContext();
  var upsertFilterItem = React__default.useCallback(function (item) {
    var _Object$keys$find;
    var gridState = apiRef.current.state;
    if (item.id) {
      var index = gridState.filter.filterModel.items.findIndex(function (x) {
        return x.id === item.id;
      });
      if (index >= 0) {
        gridState.filter.filterModel.items[index] = Object.assign({}, gridState.filter.filterModel.items[index], item);
      }
    } else {
      var field = item.columnField ? item.columnField : gridState.columns.all[0];
      var column = gridState.columns.lookup[field];
      var Temp = {
        id: Math.round(1e5 * Math.random()),
        columnField: field,
        operatorValue: column.filterOperators ? column.filterOperators[0].value : ''
      };
      gridState.filter.filterModel.items.push(Object.assign({}, Temp, item));
    }
    apiRef.current.setFilterModel(_objectSpread2(_objectSpread2({}, gridState.filter.filterModel), {}, {
      items: _toConsumableArray(gridState.filter.filterModel.items)
    }));
    var apiObject = apiRef.current;
    var key_fun = (_Object$keys$find = Object.keys(apiObject).find(function (x) {
      return /(_applyFilters)/.test(x);
    })) !== null && _Object$keys$find !== void 0 ? _Object$keys$find : '';
    apiObject[key_fun]();
  }, [apiRef]);
  //componentdidmount
  React__default.useEffect(function () {
    apiRef.current.upsertFilterItem = upsertFilterItem;
  }, [apiRef, upsertFilterItem]);
  return jsx(GridToolbar, _objectSpread2({}, props));
};

export { CustomerGridToolbar };
//# sourceMappingURL=CustomerGridToolbar.js.map
