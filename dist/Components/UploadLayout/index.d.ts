import React, { PureComponent } from 'react';
import UploadStatus from './UploadStatus';
import { IProcessItem } from './types';
import { UploadMonitor } from './UploadMonitor';
export * from './types';
interface IUploadLayoutProps {
    Horizontal: 'end' | 'start';
    Vertical: 'end' | 'start';
    ContentHeight: number;
    ContentWidth: number;
    open: boolean;
    UploadExecutor: (item: IProcessItem, progress: (value: number) => void) => Promise<void>;
    onClose?: (isCompleted: boolean) => void;
    inline?: boolean;
}
interface IUploadLayoutState {
    open: boolean;
    showComfirm: boolean;
}
export interface IUploadLayoutContext {
    state: IUploadLayoutState;
    getErrors: () => IProcessItem[];
    getComplete: () => IProcessItem[];
    onItemClose: (item: IProcessItem) => void;
    onItemRetry: (item: IProcessItem) => void;
    onRetryAll: () => void;
    addItems: (items: Omit<IProcessItem, 'Value' | 'Signal'>[]) => void;
    Show: () => void;
    Close: () => void;
    items: IProcessItem[];
    renderUploadContent: () => JSX.Element;
}
export declare const Sleep: (sec: number) => Promise<unknown>;
export declare const UploadLayoutContext: React.Context<IUploadLayoutContext>;
export default class UploadLayout extends PureComponent<React.PropsWithChildren<IUploadLayoutProps>, IUploadLayoutState> implements IUploadLayoutContext {
    constructor(props: IUploadLayoutProps);
    static defaultProps: {
        Horizontal: string;
        Vertical: string;
        ContentHeight: number;
        ContentWidth: number;
        open: boolean;
    };
    isUnmounted: boolean;
    _monitor: UploadMonitor<IProcessItem>;
    items: IProcessItem[];
    componentWillUnmount(): void;
    addItems: (items: Omit<IProcessItem, 'Value' | 'Signal'>[]) => void;
    getItem: () => IProcessItem;
    executor: (item: IProcessItem) => Promise<void>;
    uploadComplete: (item: IProcessItem) => void;
    uploadError: any;
    onItemClose: (item: IProcessItem) => void;
    onItemRetry: (item: IProcessItem) => void;
    onRetryAll: () => void;
    _timer: Date;
    updateItems: () => void;
    getErrors: () => IProcessItem[];
    getComplete: () => IProcessItem[];
    isCompleted: () => boolean;
    Close: () => void;
    CheckClose: React.MouseEventHandler<HTMLButtonElement>;
    Show: () => void;
    closeComfirm: () => void;
    componentDidMount(): void;
    renderUploadContent: () => JSX.Element;
    refUploadStatus: React.RefObject<UploadStatus>;
    render(): JSX.Element;
}
