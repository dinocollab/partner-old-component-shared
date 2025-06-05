import { Component, ComponentType } from 'react';
export type InputFormType = 'EDIT' | 'CREATE' | 'DELETE' | 'DETAIL' | 'MODAL';
interface InputFormModalProps {
    MapForm: {
        [key in InputFormType]?: ComponentType<any>;
    };
}
interface InputFormModalState {
    open: boolean;
    Type: InputFormType;
    Model?: any;
    IsFull: boolean;
}
export default class InputFormModal extends Component<InputFormModalProps, InputFormModalState> {
    constructor(props: InputFormModalProps);
    shouldComponentUpdate(nextProps: Readonly<InputFormModalProps>, nextState: Readonly<InputFormModalState>, nextContext: any): boolean;
    renderContent: () => JSX.Element | undefined;
    open(Type: InputFormType, Model?: any, IsFull?: boolean): void;
    handleClose: () => void;
    render(): JSX.Element;
}
export {};
