import { FormValidator, PartialError } from 'partner-local-lib/helper';
import React, { Component } from 'react';
interface InputFormBaseProps<TModel> {
    FormValidate: FormValidator<Partial<TModel>>;
    onSubmit: (user: Partial<TModel>) => Promise<void>;
}
interface InputFormBaseState<TModel> {
    MessageError: PartialError<TModel>;
    modelState?: Partial<TModel>;
    onBlur: (keyName: string) => void;
}
export declare const InputFormContext: React.Context<InputFormBaseState<any>>;
export default class InputFormBase<TModel = any> extends Component<InputFormBaseProps<TModel>, InputFormBaseState<TModel>> {
    constructor(props: InputFormBaseProps<TModel>);
    _formValidate: FormValidator<Partial<TModel>>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onBlur: (keyName: string) => void;
    cleanErrorMessage: () => void;
    cleanErrorMessageByKey: (params: string) => void;
    _form: React.RefObject<HTMLFormElement>;
    render(): JSX.Element;
}
export {};
