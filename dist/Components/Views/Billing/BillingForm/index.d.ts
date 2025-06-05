import { Component } from 'react';
import { IReport } from '../../../Models';
import { PartialError } from 'partner-local-lib/helper';
interface BillingFormProps {
    data?: IReport;
    MessageError?: PartialError<IReport> | any;
    onBlur: (key: string) => void;
    Name?: string;
    Actions?: JSX.Element;
    IsEdit: boolean;
    fetchData: (value?: string, signal?: AbortSignal) => Promise<any[]>;
}
export default class BillingForm extends Component<BillingFormProps> {
    render(): JSX.Element;
}
export {};
