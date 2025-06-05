import { Component, FC } from 'react';
import { ChartData } from 'chart.js';
import { IChartDataItem } from './type';
interface PieChartProps {
    width?: number | string;
    height?: number | string;
    data: ChartData<'pie', number[], string>;
    disableTooltip?: boolean;
}
export declare const PieChartV2: FC<PieChartProps>;
interface IProps {
    data?: IChartDataItem[];
}
export declare class PieChart extends Component<IProps> {
    static defaultProps: {
        data: IChartDataItem[];
    };
    render(): JSX.Element;
}
export {};
