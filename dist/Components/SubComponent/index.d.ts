import React, { ComponentType, FC } from 'react';
import { SxProps, Theme } from '@mui/material';
import * as SubLocal from 'partner-local-lib/SubComponents';
import { Variant } from '@mui/material/styles/createTypography';
import { PartialError } from 'partner-local-lib/helper';
export interface FormBase<TModel> {
    MessageError?: PartialError<TModel>;
    onBlur?: (keyName: string) => void;
    Model?: TModel;
    IsForm?: boolean;
    IdForm?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
interface ErrorAllProps {
    MessageError?: PartialError<any>;
}
export declare const ErrorAll: FC<ErrorAllProps>;
interface BoxInfoProps {
    title: string;
    mb?: boolean;
    icon?: JSX.Element;
    MessageError?: PartialError<any> | any;
    TitleExtends?: JSX.Element;
    sx?: SxProps<Theme>;
    sxTitle?: SxProps<Theme>;
    variant?: Variant;
    IsBorder?: boolean;
}
export declare const BoxInfo: FC<BoxInfoProps>;
export declare const BoxGroup: FC<BoxInfoProps>;
export declare const WrapFrom: FC<{
    IsForm?: boolean;
    Id?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}>;
export interface Select2Props<TModel> extends SubLocal.ErrorProps {
    fetchData: (value?: string, signal?: AbortSignal) => Promise<TModel[]>;
    SelectValue: (model: TModel) => any;
    GenerateLabel: (model: TModel) => any;
    Onchange?: (data: TModel | null) => void;
    onBlur?: () => void;
    title?: string;
    defaultValue: any;
    onReady?: (option?: TModel) => void;
    isOptionEqualToValue?: (option: TModel, value: TModel) => boolean;
    searchInitial?: (model: TModel) => boolean;
    selectedItem: TModel;
    name?: string;
    PopperStyle?: React.CSSProperties;
    disabled?: boolean;
    size?: 'small' | 'medium';
    fullWidth?: boolean;
}
export type TypeSelect2<TModel> = React.ComponentType<Select2Props<TModel>>;
export declare const CreateSelect2: <TModel>() => React.FC<Select2Props<TModel>>;
export interface MultipleSelect<TModel> extends SubLocal.ErrorProps {
    fetchData: (value?: string, CancelToken?: AbortSignal) => Promise<TModel[]>;
    SelectValue: (model: TModel) => any;
    GenerateLabel: (model: TModel) => any;
    Onchange?: (data: TModel[]) => void;
    onBlur?: () => void;
    title?: string;
    defaultValue: any[];
    onReady?: (option?: TModel[]) => void;
    isOptionEqualToValue?: (option: TModel, value: TModel) => boolean;
    searchInitial?: (model: TModel) => boolean;
    selectedItem: TModel[];
    name?: string;
    PopperStyle?: React.CSSProperties;
    limitTags?: number;
}
export type TypeMultipleSelect<TModel> = React.ComponentType<MultipleSelect<TModel>>;
export declare const CreateMultipleSelect: <TModel>() => React.FC<MultipleSelect<TModel>>;
export interface MultipleTags extends SubLocal.ErrorProps {
    Onchange?: (data: any[]) => void;
    onBlur?: () => void;
    title?: string;
    defaultValue?: any[];
    data?: string[];
    name?: string;
    PopperStyle?: React.CSSProperties;
}
export type TypeMultipleTags = React.ComponentType<MultipleTags>;
interface ChipProps {
    data?: string[];
}
export declare const Chips: FC<ChipProps>;
export declare const CreateMultipleTags: () => React.FC<MultipleTags>;
interface DatePickersProps extends SubLocal.ErrorProps {
    name?: string;
    Title?: string;
    inputFormat?: string;
    defaultValue?: Date;
    Onchange?: (data: Date | null) => void;
    onBlur?: () => void;
    disable?: boolean;
}
export declare const DatePickers: FC<DatePickersProps>;
interface LazyViewProps {
    sx?: SxProps<Theme>;
    IsLazy?: boolean;
    showProgress?: boolean;
}
export declare const LazyView: FC<LazyViewProps>;
interface OverlayViewProps {
    open?: boolean;
}
export declare const OverlayView: FC<OverlayViewProps>;
interface IInputSearchProps {
    onSearch?: (text: string, signal: AbortController) => void;
    placeholder?: string;
    onStart?: () => void;
    onEnd?: () => void;
    PaperSx?: SxProps<Theme>;
}
export declare const InputSearch: FC<IInputSearchProps>;
interface PageRouteProps {
    title?: string;
    prefix?: string;
}
export declare const PageRoute: FC<PageRouteProps>;
interface OptionPage {
    title?: string;
    prefix?: string;
}
export declare const WrapPageRoute: (WrapComponent: ComponentType<any>, option?: OptionPage) => (props: any) => JSX.Element;
interface PageContentProps {
    PanelAction: JSX.Element;
    Title: string;
}
export declare const PageContent: FC<PageContentProps>;
export interface IOptionSelect {
    name: string;
    value: any;
}
interface SmallSelectProps {
    id: string;
    title: string;
    data: IOptionSelect[] | (() => Promise<IOptionSelect[]>);
    sx?: SxProps;
    defaultValue?: any;
    onChange?: (value: any) => void;
    value?: any;
    disabled?: boolean;
}
export declare const SmallSelect: FC<SmallSelectProps>;
interface ICenterBoxProps {
    sx?: SxProps;
}
export declare const CenterBox: FC<ICenterBoxProps>;
export {};
