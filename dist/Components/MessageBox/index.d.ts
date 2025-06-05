import React, { Component } from 'react';
interface MessageBoxProps {
}
export interface IOptionDefault {
    Title: string;
    Content: JSX.Element | string;
    data: any;
    onSubmit?: (data: any) => void;
    Footer?: JSX.Element;
}
type IContent = () => JSX.Element;
type IOption = IOptionDefault | IContent;
interface MessageBoxState {
    option?: IOption;
}
export interface IMessageBoxContext {
    Close: () => void;
    open: (option: IOption) => void;
}
export declare const MessageBoxContext: React.Context<IMessageBoxContext>;
export default class MessageBox extends Component<MessageBoxProps, MessageBoxState> implements IMessageBoxContext {
    constructor(props: MessageBoxProps);
    Close: () => void;
    open: (option: IOption) => void;
    renderContent: () => JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
