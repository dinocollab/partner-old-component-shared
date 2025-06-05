import React, { ComponentType } from 'react';
import { SxProps, Theme } from '@mui/material';
import { GridSortModel, GridColDef, GridValidRowModel, DataGridProps, GridRowModel } from '@mui/x-data-grid';
import { GridCallbackDetails, GridFilterModel, GridPaginationInitialState } from '@mui/x-data-grid';
import { IFetchModel, ITableMode, ITableOption, ITableTemplatePropBases } from './type';
import { ITableTemplateState } from './TableTemplateContext';
type ITableTemplateProps<T extends GridValidRowModel, Key extends keyof ITableMode<T>> = ITableTemplatePropBases<T> & ITableMode<T>[Key] & {
    sxWrapper?: SxProps<Theme>;
    ItemRowMenu?: ComponentType<React.PropsWithChildren<any>>;
};
export declare const CreateTableTemplate: <TModel extends GridValidRowModel>(mode: keyof ITableMode<TModel>, option: ITableOption<TModel>) => {
    new (props: ITableTemplateProps<TModel, keyof ITableMode<TModel>>): {
        AbortController?: AbortController | undefined;
        generateColumns: () => GridColDef<any, any, any>[];
        columns: GridColDef<any, any, any>[];
        initial(): GridColDef<any, any, any>[];
        getPageInfo: () => import("./type").IFetchPagination<TModel>;
        getPagination: () => {
            page: number | undefined;
            pageSize: number | undefined;
        };
        GetDataGridProp: () => Omit<DataGridProps<any>, "columns">;
        onRowSelectionModelChange: (rowSelectionModel: GridRowModel, details: GridCallbackDetails) => void;
        onServerFilterChange: (model: GridFilterModel, details: GridCallbackDetails<'filter'>) => void;
        onPageChange: (page: number, details: GridCallbackDetails<any>) => void;
        onPageSizeChange: (pageSize: number, details: GridCallbackDetails<any>) => void;
        timer: number;
        PageInfoCache: GridPaginationInitialState;
        PageNavidateFetch: (details: GridCallbackDetails<any>) => void;
        onSortModelChange: (model: GridSortModel, details: GridCallbackDetails) => void;
        FetchData: (model: Partial<IFetchModel>) => Promise<void>;
        isServerSide: () => boolean;
        componentDidMount(): Promise<void>;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof ITableTemplateState<TModel>>(state: ITableTemplateState<TModel> | ((prevState: Readonly<ITableTemplateState<TModel>>, props: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>) => ITableTemplateState<TModel> | Pick<ITableTemplateState<TModel>, K> | null) | Pick<ITableTemplateState<TModel>, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<ITableTemplateState<TModel>>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>, nextState: Readonly<ITableTemplateState<TModel>>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>, prevState: Readonly<ITableTemplateState<TModel>>): any;
        componentDidUpdate?(prevProps: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>, prevState: Readonly<ITableTemplateState<TModel>>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>, nextState: Readonly<ITableTemplateState<TModel>>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ITableTemplateProps<TModel, keyof ITableMode<TModel>>>, nextState: Readonly<ITableTemplateState<TModel>>, nextContext: any): void;
    };
    defaultState: ITableTemplateState<TModel>;
    contextType?: React.Context<any> | undefined;
};
export {};
