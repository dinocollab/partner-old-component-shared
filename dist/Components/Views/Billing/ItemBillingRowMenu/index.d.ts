import { Component } from 'react';
import { IItemRowMenuProps } from '../../../TemplateTable/ItemRowMenu';
import { IReport } from '../../../Models';
interface IItemBillingRowMenuProps extends IItemRowMenuProps {
    onDetail: (data: IReport) => void;
    onPay?: (data: IReport) => void;
}
export default class ItemBillingRowMenu extends Component<IItemBillingRowMenuProps> {
    onDetail: () => void;
    onPay: () => void;
    IsDisablePay: () => boolean;
    IsPaid: () => boolean;
    IsNoDetails: () => any;
    renderMenuMore: () => JSX.Element;
    renderMenuItems: () => JSX.Element[];
    render(): JSX.Element;
}
export declare class ItemManageRowMenu extends Component<IItemBillingRowMenuProps> {
    onDetail: () => void;
    IsNoDetails: () => any;
    render(): JSX.Element;
}
export {};
