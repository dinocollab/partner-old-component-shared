import React, { Component, ComponentType } from 'react'
import { Box, SxProps, Theme, styled } from '@mui/material'
import { DataGrid, GridSortModel, GridColDef, GridValidRowModel, DataGridProps, GridRowModel } from '@mui/x-data-grid'
import { GridCallbackDetails, GridFilterModel, GridPaginationInitialState, GridFeatureMode } from '@mui/x-data-grid'
import { CustomerGridToolbar } from './CustomerGridToolbar'
import { CustomGridFilterPanel } from './CustomGridFilterPanel'
import { GridColDefCconfig, IFetchModel, ITableMode, ITableOption, ITableTemplatePropBases } from './type'
import { ITableTemplateContext, ITableTemplateState, TableTemplateContext } from './TableTemplateContext'
import NoRowsOverlay from './NoRowsOverlay'

type ITableTemplateProps<T extends GridValidRowModel, Key extends keyof ITableMode<T>> = ITableTemplatePropBases<T> &
  ITableMode<T>[Key] & {
    sxWrapper?: SxProps<Theme>
    ItemRowMenu?: ComponentType<React.PropsWithChildren<any>>
  }

export const CreateTableTemplate = function <TModel extends GridValidRowModel>(
  mode: keyof ITableMode<TModel>,
  option: ITableOption<TModel>
) {
  return class TableTemplate
    extends Component<ITableTemplateProps<TModel, keyof ITableMode<TModel>>, ITableTemplateState<TModel>>
    implements ITableTemplateContext
  {
    static defaultState: ITableTemplateState<TModel> = {
      PageInfo: { data: [], rowTotal: 0, page: 0, pageSize: 0 },
      isLoading: true,
    }
    AbortController?: AbortController

    constructor(props: ITableTemplateProps<TModel, keyof ITableMode<TModel>>) {
      super(props)
      this.state = TableTemplate.defaultState
      this.columns = this.initial()
    }
    generateColumns = () => {
      return Object.keys(option.config).map((key) => {
        const opt = { ...option.config[key], field: key } as GridColDef
        if (mode === 'Server' && !opt.type && opt.filterable !== false)
          throw new Error(`When mode is Server you need set type for '${key}' column in 'GridColDef'`)
        if (option.filterOperators) {
          opt.filterOperators = option.filterOperators(opt)
        }
        return opt
      })
    }
    columns: GridColDef<any, any, any>[]
    initial() {
      if (option.MenuField) {
        const MenuField = typeof option.MenuField === 'function' ? option.MenuField(option) : option.MenuField

        const FieldConfig = option.config[MenuField as string]
        const { ItemRowMenu: ItemMenu } = this.props
        if (FieldConfig && ItemMenu) {
          const renderCell = FieldConfig.renderCell
          FieldConfig.renderCell = (params) => {
            return <ItemMenu data={params.row}>{renderCell ? renderCell(params) : params.value}</ItemMenu>
          }
        }
      }
      return this.generateColumns()
    }

    getPageInfo = () => {
      if ('PageInfo' in this.props && this.props.PageInfo) {
        return this.props.PageInfo
      }
      return this.state.PageInfo
    }

    getPagination = () => {
      const pageInfo = this.getPageInfo()
      return { page: pageInfo.page, pageSize: pageInfo.pageSize }
    }

    GetDataGridProp = () => {
      let _DataGridProp: Omit<DataGridProps, 'columns'>
      if (mode === 'Server') {
        const pageInfo = this.getPageInfo()
        _DataGridProp = {
          initialState: { pagination: this.getPagination() },
          rowCount: pageInfo.rowTotal ?? 0,
          rows: pageInfo.data,
          loading: this.state.isLoading,
          onPageChange: this.onPageChange,
          onPageSizeChange: this.onPageSizeChange,
          onFilterModelChange: this.onServerFilterChange,
          onSortModelChange: this.onSortModelChange,
          filterMode: 'server' as GridFeatureMode,
          paginationMode: 'server' as GridFeatureMode,
          sortingMode: 'server' as GridFeatureMode,
          filterModel: this.state.FilterModel,
          sortModel: this.state.GridSortModel,
        }
      } else if (mode === 'Client' && 'data' in this.props) {
        _DataGridProp = {
          rows: this.props.data,
          componentsProps: {
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          },
        }
      } else {
        _DataGridProp = { rows: [] }
      }
      return _DataGridProp
    }

    onRowSelectionModelChange = (rowSelectionModel: GridRowModel, details: GridCallbackDetails) => {
      this.setState({ details: details, selectionIds: rowSelectionModel })
    }

    onServerFilterChange = (model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
      this.setState({ FilterModel: model, isLoading: true }, () => this.FetchData({ FilterModel: model, details }))
    }

    onPageChange = (page: number, details: GridCallbackDetails<any>) => {
      this.PageInfoCache.page = page
      this.PageNavidateFetch(details)
    }

    onPageSizeChange = (pageSize: number, details: GridCallbackDetails<any>) => {
      this.PageInfoCache.pageSize = pageSize
      this.PageNavidateFetch(details)
    }

    timer = 0
    PageInfoCache: GridPaginationInitialState = {}
    PageNavidateFetch = (details: GridCallbackDetails<any>) => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.setState({ PaginationModel: this.PageInfoCache, isLoading: true })
        this.FetchData({ PaginationModel: this.PageInfoCache, details })
      }, 250) as any
    }

    onSortModelChange = (model: GridSortModel, details: GridCallbackDetails) => {
      this.setState({ GridSortModel: model, isLoading: true })
      this.FetchData({ GridSortModel: model, details })
    }

    FetchData = async (model: Partial<IFetchModel>) => {
      this.AbortController?.abort()
      if (mode === 'Server' && 'ServerOption' in this.props) {
        try {
          this.AbortController = new AbortController()
          const data = await this.props.ServerOption.FetchFilterData(
            Object.assign(
              {},
              {
                PaginationModel: this.state.PaginationModel,
                FilterModel: this.state.FilterModel,
                GridSortModel: this.state.GridSortModel,
                abort: this.AbortController.signal,
              },
              model
            )
          )
          if (this.props.IsInnerState === true) {
            this.setState({ isLoading: false, PageInfo: data ?? TableTemplate.defaultState.PageInfo })
          } else {
            this.setState({ isLoading: false })
          }
        } catch {
          this.setState({ isLoading: false })
        }
      }
    }

    isServerSide = () => mode === 'Server'

    async componentDidMount() {
      if (mode === 'Server' && 'ServerOption' in this.props) {
        this.AbortController?.abort()
        if (mode === 'Server' && 'ServerOption' in this.props) {
          try {
            this.AbortController = new AbortController()
            const data = await this.props.ServerOption.FetchInitialData()
            this.setState({ isLoading: false, PageInfo: data ?? TableTemplate.defaultState.PageInfo })
          } catch {
            this.setState({ isLoading: false })
          }
        }
      }
    }

    render() {
      const CRUDPannel = this.props.CRUDPannel || (() => <></>)
      return (
        <TableTemplateContext.Provider value={this}>
          <Wrapper sx={this.props.sxWrapper}>
            {<CRUDPannel />}
            <DataGrid
              // row
              pagination
              getRowId={option.getRowId}
              columns={this.columns}
              {...this.GetDataGridProp()}
              components={{
                Toolbar: CustomerGridToolbar,
                FilterPanel: (props: any) => <CustomGridFilterPanel {...props} />,
                NoRowsOverlay,
              }}
              componentsProps={{ toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } } }}
              style={{ border: 0 }}
              checkboxSelection={true}
              sx={{
                border: 0,
                '& .MuiTablePagination-root .MuiToolbar-root > p': { margin: 0 },
                '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 700, color: '#3c3c3c' },
              }}
              {...(this.props.InnerProps ?? {})}
            />
          </Wrapper>
        </TableTemplateContext.Provider>
      )
    }
  }
}

const Wrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
})
