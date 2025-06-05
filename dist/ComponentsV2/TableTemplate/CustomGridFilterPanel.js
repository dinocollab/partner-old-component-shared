import { jsxs, jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { Button } from '@mui/material';
import { useGridApiContext, GridPanelWrapper, GridPanelContent, GridFilterForm, GridPanelFooter, GridAddIcon } from '@mui/x-data-grid';

var CustomGridFilterPanel = function CustomGridFilterPanel(props) {
  var apiRef = useGridApiContext();
  var gridState = apiRef.current.state;
  var hasMultipleFilters = React__default.useMemo(function () {
    return gridState.filter.filterModel.items.length > 1;
  }, [gridState.filter.filterModel.items.length]);
  var applyFilter = React__default.useCallback(function (item) {
    apiRef.current.upsertFilterItem(item);
  }, [apiRef]);
  var applyFilterLinkOperator = React__default.useCallback(function (operator) {
    apiRef.current.setFilterLinkOperator(operator);
  }, [apiRef]);
  var addNewFilter = React__default.useCallback(function () {
    var columns = gridState.columns.all.map(function (key) {
      return gridState.columns.lookup[key];
    }).filter(function (x) {
      return x.filterable;
    });
    if (columns.length < 1) {
      return;
    }
    var col = apiRef.current.getColumn(columns[0].field);
    if (!col.filterOperators) {
      return;
    }
    var newItem = {
      columnField: columns[0].field,
      operatorValue: col.filterOperators[0].value
    };
    apiRef.current.upsertFilterItem(newItem);
  }, [apiRef, gridState.columns.all, gridState.columns.lookup]);
  var deleteFilter = React__default.useCallback(function (item) {
    apiRef.current.deleteFilterItem(item);
  }, [apiRef]);
  React__default.useEffect(function () {
    if (gridState.filter.filterModel.items.length === 0) {
      addNewFilter();
    }
  }, [addNewFilter, gridState.filter.filterModel.items.length]);
  return jsxs(GridPanelWrapper, {
    children: [jsx(GridPanelContent, {
      children: gridState.filter.filterModel.items.map(function (item, index) {
        return jsx(GridFilterForm, {
          item: item,
          applyFilterChanges: applyFilter,
          deleteFilter: deleteFilter,
          hasMultipleFilters: hasMultipleFilters,
          showMultiFilterOperators: index > 0,
          multiFilterOperator: gridState.filter.filterModel.linkOperator,
          disableMultiFilterOperator: index !== 1,
          applyMultiFilterOperatorChanges: applyFilterLinkOperator
        }, item.id);
      })
    }), jsx(GridPanelFooter, {
      children: jsx(Button, {
        onClick: addNewFilter,
        startIcon: jsx(GridAddIcon, {}),
        color: "primary",
        children: apiRef.current.getLocaleText('filterPanelAddFilter')
      })
    })]
  });
};

export { CustomGridFilterPanel };
//# sourceMappingURL=CustomGridFilterPanel.js.map
