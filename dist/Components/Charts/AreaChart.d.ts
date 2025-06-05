import { Component } from 'react';
import { ScatterDataPoint, ChartDataset } from 'chart.js';
interface IProps {
    data?: ChartDataset<'line', (number | ScatterDataPoint | null)[]>[];
    IsLoading?: boolean;
}
export declare class AreaChart extends Component<IProps> {
    static defaultProps: {
        data: {
            fill: boolean;
            label: string;
            data: number[];
            borderColor: string;
            backgroundColor: string;
        }[];
    };
    render(): JSX.Element | undefined;
}
export {};
