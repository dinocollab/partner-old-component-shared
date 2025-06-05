import { Component } from 'react';
import { TopViewData } from '../type';
interface ITopViewTableProps {
    renderName?: (data: TopViewData) => JSX.Element;
    data: TopViewData[];
    Prefix?: string;
    Subfix?: string;
}
export default class TopViewTable extends Component<ITopViewTableProps> {
    render(): JSX.Element;
}
export {};
