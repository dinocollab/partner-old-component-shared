import { Component } from 'react';
import { IChartDataItem } from './type';
interface IProps {
    data?: IChartDataItem[];
}
export declare class DoughnutChart extends Component<IProps> {
    static defaultProps: {
        data: IChartDataItem[];
    };
    render(): JSX.Element;
}
export {};
