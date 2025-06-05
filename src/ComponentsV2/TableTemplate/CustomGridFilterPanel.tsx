import React from 'react'
import { Button } from '@mui/material'
import { GridPanelWrapper, GridFilterForm, useGridApiContext } from '@mui/x-data-grid'
import { GridFilterItem, GridLinkOperator, GridAddIcon, GridPanelContent, GridPanelFooter } from '@mui/x-data-grid'

interface CustomGridFilterPanelProps {
  disableMultipleColumnsFiltering?: boolean
}

export const CustomGridFilterPanel: React.FC<CustomGridFilterPanelProps> = (props) => {
  const apiRef = useGridApiContext()
  const gridState = apiRef.current.state

  const hasMultipleFilters = React.useMemo(
    () => gridState.filter.filterModel.items.length > 1,
    [gridState.filter.filterModel.items.length]
  )

  const applyFilter = React.useCallback(
    (item: GridFilterItem) => {
      apiRef!.current.upsertFilterItem(item)
    },
    [apiRef]
  )

  const applyFilterLinkOperator = React.useCallback(
    (operator: GridLinkOperator) => {
      apiRef!.current.setFilterLinkOperator(operator)
    },
    [apiRef]
  )

  const addNewFilter = React.useCallback(() => {
    const columns = gridState.columns.all.map((key) => gridState.columns.lookup[key]).filter((x) => x.filterable)
    if (columns.length < 1) {
      return
    }
    const col = apiRef!.current.getColumn(columns[0].field)
    if (!col.filterOperators) {
      return
    }
    const newItem = {
      columnField: columns[0].field,
      operatorValue: col.filterOperators[0].value,
    }
    apiRef!.current.upsertFilterItem(newItem)
  }, [apiRef, gridState.columns.all, gridState.columns.lookup])

  const deleteFilter = React.useCallback(
    (item: GridFilterItem) => {
      apiRef!.current.deleteFilterItem(item)
    },
    [apiRef]
  )

  React.useEffect(() => {
    if (gridState.filter.filterModel.items.length === 0) {
      addNewFilter()
    }
  }, [addNewFilter, gridState.filter.filterModel.items.length])

  return (
    <GridPanelWrapper>
      <GridPanelContent>
        {gridState.filter.filterModel.items.map((item, index) => (
          <GridFilterForm
            key={item.id}
            item={item}
            applyFilterChanges={applyFilter}
            deleteFilter={deleteFilter}
            hasMultipleFilters={hasMultipleFilters}
            showMultiFilterOperators={index > 0}
            multiFilterOperator={gridState.filter.filterModel.linkOperator}
            disableMultiFilterOperator={index !== 1}
            applyMultiFilterOperatorChanges={applyFilterLinkOperator}
          />
        ))}
      </GridPanelContent>
      <GridPanelFooter>
        <Button onClick={addNewFilter} startIcon={<GridAddIcon />} color="primary">
          {apiRef!.current.getLocaleText('filterPanelAddFilter')}
        </Button>
      </GridPanelFooter>
    </GridPanelWrapper>
  )
}
