import { Component } from 'react';
import './index.css';
export interface IItemRowMenuProps {
    data: any;
    onEdit: () => void;
    onDelete: () => void;
    onDetailModal?: () => void;
    HideEdit?: boolean;
    HideDelete?: boolean;
}
export default class ItemRowMenu extends Component<IItemRowMenuProps> {
    render(): JSX.Element;
}
