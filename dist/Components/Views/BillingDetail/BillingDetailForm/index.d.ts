import { Component } from 'react';
import { IAssetReportView, IReport, IReportView } from '../../../Models';
import { PartialError } from 'partner-local-lib/helper';
interface BillingDetailFormProps {
    data?: IAssetReportView;
    MessageError?: PartialError<IReportView> | any;
    onBlur: (key: string) => void;
    Name?: string;
    Actions?: JSX.Element;
    Report: IReport;
    fetchData: (value?: string, signal?: string) => Promise<any[]>;
}
export default class BillingDetailForm extends Component<BillingDetailFormProps> {
    render(): JSX.Element;
}
export {};
