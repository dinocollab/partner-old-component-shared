import { Component } from 'react';
import { IProcessItem } from './types';
interface IProgressItemProps {
    item: IProcessItem;
    onRetry: () => void;
    onClose: () => void;
    [key: string]: any;
    disableDelete?: boolean;
}
interface IProgressItemState {
    isHover: boolean;
}
export default class ProgressItem extends Component<IProgressItemProps, IProgressItemState> {
    constructor(props: IProgressItemProps);
    shouldComponentUpdate(nextProps: Readonly<IProgressItemProps>, nextState: Readonly<IProgressItemState>, nextContext: any): boolean;
    onRetry: () => void;
    getIcons: () => JSX.Element;
    getButton: (item: IProcessItem) => JSX.Element;
    onClose: () => void;
    isShowHover: (item: IProcessItem) => boolean;
    onConfirm: () => void;
    componentDidUpdate(prevProps: Readonly<IProgressItemProps>, prevState: Readonly<IProgressItemState>, snapshot?: any): void;
    getContentHover: (item: IProcessItem) => JSX.Element;
    onHoverClose: () => void;
    render(): JSX.Element;
}
export {};
