import { Component, ReactNode } from 'react';
import './index.css';
interface IItemRowMenuProps {
    onEdit?: () => void;
    onDelete?: () => void;
}
export type TItemRowMenuRender<T> = {
    data: T;
    children: ReactNode;
};
export declare class ItemRowMenu extends Component<IItemRowMenuProps> {
    render(): JSX.Element;
}
export default ItemRowMenu;
