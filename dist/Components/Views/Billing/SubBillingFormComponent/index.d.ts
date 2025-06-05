import { FC } from 'react';
import * as SubCommon from '../../../SubComponent';
import { IReport, IReportPayment } from '../../../Models';
interface BillingInfoProps extends SubCommon.FormBase<IReport> {
    Actions?: JSX.Element;
    IsEdit: boolean;
    fetchData: (value?: string, signal?: AbortSignal) => Promise<any[]>;
}
export declare const BillingInfo: FC<BillingInfoProps>;
interface PaymentInfoProps extends SubCommon.FormBase<Partial<IReportPayment>> {
    Actions?: JSX.Element;
}
export declare const PaymentInfo: FC<PaymentInfoProps>;
export {};
