import { Component } from 'react';
import { ChartDataset, ScatterDataPoint } from 'chart.js';
export interface IDeliveryInfoProps {
    data?: ChartDataset<'line', (number | ScatterDataPoint | null)[]>[];
    IsLoading?: boolean;
}
export default class DeliveryInfo extends Component<IDeliveryInfoProps> {
    static defaultProps: {
        data: {
            label: string;
            data: number[];
            borderColor: string;
            backgroundColor: string;
        }[];
    };
    render(): JSX.Element;
}
