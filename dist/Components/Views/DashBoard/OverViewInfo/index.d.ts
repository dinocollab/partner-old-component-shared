import { Component } from 'react';
import { ChartData } from 'chart.js';
export type CardKey = string | 'Revenue' | 'LastMonth' | 'Balance';
export type ItemKey = string | 'Asset' | 'Claimed' | 'Content';
export interface IChartData {
    Year: number;
    Datasets: {
        [key: ItemKey]: number[];
    };
    Labels: string[];
    CardData: ICardData;
}
export interface ICardData {
    [key: CardKey]: {
        Value: number;
        Data: {
            [key: ItemKey]: number;
        };
    };
}
export interface IOverViewInfoProps {
    Year: number;
    data?: IChartData;
    IsLoading?: boolean;
}
export declare class OverViewInfo extends Component<IOverViewInfoProps> {
    generateBarChart: () => ChartData<'bar', number[], string>;
    render(): JSX.Element;
}
