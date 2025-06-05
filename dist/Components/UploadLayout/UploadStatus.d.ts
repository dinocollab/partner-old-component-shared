import React, { Component } from 'react';
import { IUploadLayoutContext } from '.';
interface IUploadStatusProps {
    onUploadClose: React.MouseEventHandler<HTMLButtonElement>;
    ContentHeight: number;
}
interface IUploadStatusState {
    expand: boolean;
}
export default class UploadStatus extends Component<IUploadStatusProps, IUploadStatusState> {
    constructor(props: IUploadStatusProps);
    isUnmounted: boolean;
    componentWillUnmount(): void;
    UnCollapse: () => void;
    expanChange: () => void;
    gernerateItems: (context: IUploadLayoutContext) => JSX.Element[];
    componentDidMount(): void;
    getErrorTitle: (context: IUploadLayoutContext) => JSX.Element;
    render(): JSX.Element;
}
export {};
