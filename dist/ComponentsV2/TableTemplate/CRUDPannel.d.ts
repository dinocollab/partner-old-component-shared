import { Component } from 'react';
import { IGlobalModalContext } from '../GlobalModal';
import { ITableTemplateState } from './TableTemplateContext';
interface CRUDPannelProps {
    Create?: JSX.Element;
    Edit?: JSX.Element;
    Details?: JSX.Element;
    Delete?: JSX.Element;
}
export declare class CRUDPannel extends Component<CRUDPannelProps> {
    constructor(props: any);
    IsMultiple: (state: ITableTemplateState) => boolean;
    IsDisplayAction: (state: ITableTemplateState) => boolean;
    getButtons: (that: CRUDPannel, state: ITableTemplateState) => Generator<JSX.Element, void, unknown>;
    onCreate: () => void;
    onEdit: () => void;
    onDelete: () => void;
    onDetails: () => void;
    ModalContext?: IGlobalModalContext;
    render(): JSX.Element;
}
export default CRUDPannel;
