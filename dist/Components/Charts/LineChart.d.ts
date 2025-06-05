import { FC } from 'react';
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';
export declare const options: ChartOptions<'line'>;
export declare const monthLabels: string[];
export declare const data: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
};
interface LineChartProps {
    width?: number | string;
    height?: number | string;
    data: ChartData<'line', number[], string>;
    options?: ChartOptions<'line'>;
}
export declare const LineChart: FC<LineChartProps>;
export {};
