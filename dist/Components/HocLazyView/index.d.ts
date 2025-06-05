import React, { ComponentType } from 'react';
import { LazyStatus } from '../Redux/core/type';
interface IHocComponentState<TData = any> {
    status: LazyStatus;
    data: TData | null;
}
interface IHocComponentProps<TActionParam = any> {
    params?: TActionParam;
}
interface OptionsHocLazy<TActionParam = any, TData = any> {
    params?: TActionParam;
    FetchData: (params?: TActionParam, signal?: AbortSignal) => Promise<TData>;
}
export interface IHocLazyViewWrappedProps<TActionParam = any, TData = any> {
    data: any | null;
    FetchData: (params?: TActionParam, signal?: AbortController) => Promise<TData>;
    SetData: (data: TData) => void;
}
declare const HocLazyView: (options: OptionsHocLazy) => (WrappedComponent: ComponentType<IHocLazyViewWrappedProps>) => {
    new (props: IHocComponentProps): {
        SwitchView: (status: LazyStatus) => JSX.Element;
        SetData: (data: any) => void;
        componentDidMount: () => Promise<void>;
        FetchData: (params: any, controller?: AbortController) => Promise<void>;
        TokenSources?: AbortController | undefined;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof IHocComponentState<any>>(state: IHocComponentState<any> | ((prevState: Readonly<IHocComponentState<any>>, props: Readonly<IHocComponentProps<any>>) => IHocComponentState<any> | Pick<IHocComponentState<any>, K> | null) | Pick<IHocComponentState<any>, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<IHocComponentProps<any>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<IHocComponentState<any>>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<IHocComponentProps<any>>, nextState: Readonly<IHocComponentState<any>>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IHocComponentProps<any>>, prevState: Readonly<IHocComponentState<any>>): any;
        componentDidUpdate?(prevProps: Readonly<IHocComponentProps<any>>, prevState: Readonly<IHocComponentState<any>>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IHocComponentProps<any>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IHocComponentProps<any>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IHocComponentProps<any>>, nextState: Readonly<IHocComponentState<any>>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IHocComponentProps<any>>, nextState: Readonly<IHocComponentState<any>>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default HocLazyView;
