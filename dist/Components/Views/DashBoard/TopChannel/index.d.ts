import { Component } from 'react';
import { TopViewData } from '../type';
export interface ITopChannelProps {
    data?: TopViewData[];
    Title: string;
    Year: number;
    IsLoading?: boolean;
    Prefix?: string;
    Subfix?: string;
}
export default class TopChannel extends Component<ITopChannelProps> {
    render(): JSX.Element;
}
