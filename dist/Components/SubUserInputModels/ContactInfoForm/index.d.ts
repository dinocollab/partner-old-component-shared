import { Component } from 'react';
import * as SubCommon from '../../SubComponent';
import { IContactInfo } from '../../Models';
interface ContactInfoFormProps extends SubCommon.FormBase<IContactInfo> {
    onClose: () => void;
}
export default class ContactInfoForm extends Component<ContactInfoFormProps> {
    renderEdit: () => JSX.Element;
    render(): JSX.Element;
}
export {};
