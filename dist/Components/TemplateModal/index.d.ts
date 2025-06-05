import React, { Component, FC } from 'react';
export interface ITemplateModalProps {
    open?: boolean;
    onClose?: () => void;
}
export declare const CenterScreen: FC<{
    handleClose: () => void;
}>;
export declare const FullScreen: FC<{
    handleClose: React.MouseEventHandler<HTMLDivElement>;
}>;
interface ITemplateModalState {
    open: boolean;
}
export interface ITemplateContext {
    Close: () => void;
    open: () => void;
}
export declare const TemplateModalContext: React.Context<ITemplateContext>;
export default class TemplateModal extends Component<ITemplateModalProps, ITemplateModalState> {
    constructor(props: ITemplateModalProps);
    Close: () => void;
    open: () => void;
    renderContent: () => JSX.Element;
    componentDidUpdate(): void;
    onClose: () => void;
    render(): JSX.Element;
}
export {};
