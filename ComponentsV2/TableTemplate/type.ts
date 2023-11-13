import React from 'react'
import { GridRowIdGetter, GridValidRowModel, GridRowModel, GridFilterModel, GridFilterOperator } from '@mui/x-data-grid'
import { GridSortModel, DataGridProps, GridColDef, GridCallbackDetails, GridPaginationInitialState } from '@mui/x-data-grid'

export interface ITableTemplatePropBases<T extends GridValidRowModel> {
  InnerProps?: Omit<DataGridProps<T> & React.RefAttributes<HTMLDivElement>, 'rows' | 'columns' | 'getRowId'>
  CRUDPannel?: React.JSXElementConstructor<any>
}

interface IClientTableTemplateProps<T extends GridValidRowModel> {
  data: T[]
}

interface IServerTableTemplateProps<T extends GridValidRowModel> {
  ServerOption: TableServerSide<T>
  PageInfo?: IFetchPagination<T>
  IsInnerState?: boolean
}

export interface ITableMode<T extends GridValidRowModel> {
  Server: IServerTableTemplateProps<T>
  Client: IClientTableTemplateProps<T>
}

export interface IFetchPagination<T> extends GridPaginationInitialState {
  rowTotal?: number
  data: T[]
}

export type GridColDefCconfig<T extends GridValidRowModel> = {
  [key in keyof (T & { [key: string]: any })]?: Omit<GridColDef, 'field'>
}
export interface ITableOption<T extends GridValidRowModel> {
  getRowId: GridRowIdGetter<T>
  config: GridColDefCconfig<T>
  filterOperators?: (config: GridColDef) => GridFilterOperator[]
  MenuField?: keyof Extract<T, {}> | ((option: ITableOption<T>) => string)
}

export interface IFetchModel {
  FilterModel: GridFilterModel
  PaginationModel: GridPaginationInitialState
  GridSortModel: GridSortModel
  details: GridCallbackDetails<'filter'>
  abort: AbortSignal
}

export interface TableServerSide<T> {
  FetchFilterData: (model: Partial<IFetchModel>) => Promise<IFetchPagination<T> | void>
  FetchInitialData: () => Promise<IFetchPagination<T> | void>
}

// Operator
export enum EOperator {
  GreaterThan,
  LessThan,
  GreaterThanOrEqual,
  LessThanOrEqual,
  NotEqual,
  Equal,
  Contains,
}

export interface IConverterConfig {
  pagination?: GridPaginationInitialState
  searchOptions: string[]
}
