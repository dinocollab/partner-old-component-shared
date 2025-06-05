import React, { Component, ComponentType } from 'react';
import { ConfigTable, GridColDefCustom, GridInputComponentProps, ModelBase } from 'partner-local-lib/GridTable';
import { IPanelActionProps } from './PanelAction';
import { IItemRowMenuProps } from './ItemRowMenu';
import { InputFormType } from './InputFormModal';
export interface Dictionary<T> {
    [id: string]: T | undefined;
}
interface TableTemplateOption<TModel> {
    ConfigTable: ConfigTable<TModel>;
    MenuField?: keyof Extract<TModel, ModelBase>;
}
interface TemplateTableProps<TModel> {
    data: TModel[];
    PanelAction?: ComponentType<IPanelActionProps>;
    ItemRowMenu?: ComponentType<IItemRowMenuProps>;
    CreateForm?: ComponentType;
    EditForm?: ComponentType<{
        data?: any;
    }>;
    ConfirmDelete?: ComponentType<{
        data?: any;
    }>;
    DetailPage?: ComponentType<{
        data?: any;
    }>;
    ModelView?: ComponentType<{
        data?: any;
    }>;
    InnerProps?: Partial<GridInputComponentProps>;
    TableName?: JSX.Element | string;
}
interface ITemplateTable {
    CloseModal: () => void;
    OpenDetailModal: (Model?: any) => void;
    OpenModal: (Type: InputFormType, Model?: any, IsFull?: boolean) => void;
    onCreate: () => void;
}
interface ITableTemplateContext extends ITemplateTable {
}
export declare const TableTemplateContext: React.Context<ITableTemplateContext>;
export type TRefTableTemplate = ITemplateTable;
interface TemplateTableSate {
}
export declare class TemplateTableBase<TModel> extends Component<TemplateTableProps<TModel>, TemplateTableSate> {
}
export declare type TypeTemplateTableRef<TModel> = React.JSXElementConstructor<TemplateTableProps<TModel> & React.RefAttributes<ITemplateTable>>;
export declare const CreateTemplateTable: <TModel>(optionTables: TableTemplateOption<TModel>, OptionExtends?: GridColDefCustom<TModel> | undefined) => TypeTemplateTableRef<TModel>;
export {};
