import { Box, Typography } from '@mui/material'
import React, { Component, ComponentClass, ComponentType, createContext } from 'react'
import { ConfigTable, CreateTable, DataTableProps, GridColDefCustom, GridInputComponentProps, TypeTableRef } from 'local-lib/GridTable';
import { GridApi, GridCallbackDetails, GridRenderCellParams, GridSelectionModel, GridState } from '@mui/x-data-grid';
import PanelAction, { IPanelActionProps, } from './PanelAction';
import { ModelBase } from 'local-lib/src/helper';
import ItemRowMenu, { IItemRowMenuProps } from './ItemRowMenu';
import InputFormModal, { InputFormType } from './InputFormModal';
import FormTest from './FormTest';
import { DeepClone } from '../Helper';

export interface Dictionary<T> {
    [id: string]: T | undefined;
}

interface TableTemplateOption<TModel> {
    ConfigTable: ConfigTable<TModel>
    MenuField?: keyof Extract<TModel, ModelBase>,
}
interface TemplateTableProps<TModel> {
    data: TModel[]
    PanelAction?: ComponentType<IPanelActionProps>
    ItemRowMenu?: ComponentType<IItemRowMenuProps>
    CreateForm?: ComponentType
    EditForm?: ComponentType<{ data?: any }>
    ConfirmDelete?: ComponentType<{ data?: any }>
    DetailPage?: ComponentType<{ data?: any }>
    ModelView?: ComponentType<{ data?: any }>
    InnerProps?: Partial<GridInputComponentProps>;
    TableName?: JSX.Element | string
}

interface ITemplateTable {
    CloseModal: () => void
    OpenDetailModal: (Model?: any) => void
    OpenModal: (Type: InputFormType, Model?: any, IsFull?: boolean) => void
    onCreate: () => void
}
interface ITableTemplateContext extends ITemplateTable {

}
export const TableTemplateContext = createContext<ITableTemplateContext>({} as any)
export type TRefTableTemplate = ITemplateTable
interface TemplateTableSate {
}
export class TemplateTableBase<TModel> extends Component<TemplateTableProps<TModel>, TemplateTableSate>{
    // constructor(props: TemplateTableProps<TModel>) {
    //     super(props)
    // }
}
export declare type TypeTemplateTableRef<TModel> = React.JSXElementConstructor<
    TemplateTableProps<TModel> & React.RefAttributes<ITemplateTable>
>;
export const CreateTemplateTable = function <TModel>(optionTables: TableTemplateOption<TModel>
    , OptionExtends?: GridColDefCustom<TModel>): TypeTemplateTableRef<TModel> {

    //define table
    class TemplateTable extends Component<TemplateTableProps<TModel>, TemplateTableSate> implements ITemplateTable {
        constructor(props: TemplateTableProps<TModel>) {
            super(props)
            this.Table = this.InitialTable()
        }
        OpenModal = (Type: InputFormType, Model?: any, IsFull: boolean = false) => {
            this.refInputModel?.open(Type, Model, IsFull)
        }
        CloseModal = () => {
            this.refInputModel?.handleClose()
        };
        // static defaultProps: Partial<TemplateTableProps> = {
        //     PanelAction, ItemRowMenu,
        //     CreateForm: FormTest,
        //     EditForm: FormTest
        // }
        InitialTable = () => {
            const tempOptions = DeepClone(optionTables)
            if (OptionExtends) {
                Object.assign(tempOptions.ConfigTable.Options, OptionExtends)
            }
            if (tempOptions.MenuField) {
                const FieldConfig = tempOptions.ConfigTable.Options[tempOptions.MenuField]
                const { ItemRowMenu: ItemMenu } = this.props
                if (FieldConfig && ItemMenu) {
                    const renderCell = FieldConfig.renderCell
                    FieldConfig.renderCell = (params) => {
                        return <ItemMenu
                            data={params.row}
                            onDelete={() => this.onDelete(params.row)}
                            onEdit={() => this.onEdit(params.row)}
                            onDetailModal={() => this.OpenModal('DETAIL', params.row)}
                        >{renderCell ? renderCell(params) : params.value}</ItemMenu>
                    }
                }
            }
            return CreateTable<TModel>(tempOptions.ConfigTable);
        };
        Table: TypeTableRef<DataTableProps<any>>;
        GridState?: GridState
        refApiTable?: GridApi
        onStateChange = (GridState: GridState) => {
            this.GridState = GridState
        }
        getSelectedRows = (): TModel[] => {
            if (this.GridState) {
                return this.GridState.selection.map(id => this.GridState?.rows.idRowsLookup[id])
            }
            return []
        }
        onSelectionModelChange = (selectionModel: GridSelectionModel, details: GridCallbackDetails) => {
            // const selections = this.getSelectedRows()
            // this.props.UpsetUserSelected(this.getSelectedRows())
        }
        onCreate = () => {
            this.refInputModel?.open("CREATE")
        }
        onEdit = (data: TModel) => {
            this.refInputModel?.open("EDIT", data)
        }
        onDelete = (data: TModel) => {
            // this.props.onDelete && this.props.onDelete(data)
            this.refInputModel?.open("DELETE", data)
        }
        OpenDetailModal = (Model?: TModel) => {
            // this.props.onDelete && this.props.onDelete(data)
            this.refInputModel?.open("DETAIL", Model, true)
        }
        refInputModel: InputFormModal | null = null
        renderModal = () => {
            const { CreateForm, EditForm, ConfirmDelete, DetailPage, ModelView } = this.props
            if (CreateForm || EditForm || DetailPage || ConfirmDelete || ModelView) {
                return <InputFormModal
                    ref={ref => this.refInputModel = ref}
                    MapForm={{
                        CREATE: CreateForm,
                        EDIT: EditForm,
                        DELETE: ConfirmDelete,
                        DETAIL: DetailPage,
                        MODAL: ModelView
                    }}
                />
            }
            return ''
        }
        render() {
            const { Table } = this
            const { PanelAction: PanelActionItem, CreateForm, EditForm } = this.props
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <TableTemplateContext.Provider value={this}>
                        {this.props.TableName || PanelActionItem
                            ? <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '5px', flexWrap: 'wrap', pt: '6px' }}>
                                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                    {typeof this.props.TableName === 'string' ? <Typography variant='h5'>{this.props.TableName}</Typography> : this.props.TableName}
                                </Box>
                                {PanelActionItem ?
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1 }}>
                                        <PanelActionItem onCreate={this.onCreate} ButtonText={'Create'} />
                                    </Box> : ''}
                            </Box> : <></>
                        }
                        <Table
                            InnerProps={{
                                checkboxSelection: true,
                                disableSelectionOnClick: true,
                                onStateChange: this.onStateChange,
                                onSelectionModelChange: this.onSelectionModelChange,
                                sx: {
                                    border: 0,
                                    "& .MuiTablePagination-root .MuiToolbar-root > p": { margin: 0 },
                                    '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 700, color: '#3c3c3c' }
                                },
                                ...(this.props.InnerProps ?? {}),
                            }}
                            data={this.props.data}
                        />
                        {this.renderModal()}
                    </TableTemplateContext.Provider>
                </Box>
            )
        }
    }
    return TemplateTable as any
}
