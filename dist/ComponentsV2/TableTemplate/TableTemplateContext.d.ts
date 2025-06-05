/// <reference types="react" />
import { GridCallbackDetails, GridFilterModel, GridPaginationInitialState, GridRowModel, GridSortModel } from '@mui/x-data-grid';
import { IFetchPagination } from './type';
export interface ITableTemplateState<T = any> {
    selectionIds?: GridRowModel;
    details?: GridCallbackDetails;
    PageInfo: IFetchPagination<T>;
    isLoading: boolean;
    PaginationModel?: GridPaginationInitialState;
    FilterModel?: GridFilterModel;
    GridSortModel?: GridSortModel;
}
export interface ITableTemplateContext {
    state: ITableTemplateState<any>;
}
export declare const TableTemplateContext: import("react").Context<ITableTemplateContext>;
