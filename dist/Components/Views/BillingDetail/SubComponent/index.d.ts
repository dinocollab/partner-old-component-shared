import { FC } from 'react';
import * as SubCommon from '../../../SubComponent';
import { IAssetReportView, IReport } from '../../../Models';
interface BillingDetailProps extends SubCommon.FormBase<IAssetReportView> {
    Actions?: JSX.Element;
    Report: IReport;
    fetchData: (value?: string, signal?: string) => Promise<any[]>;
}
export declare const BillingDetailInfo: FC<BillingDetailProps>;
export {};
