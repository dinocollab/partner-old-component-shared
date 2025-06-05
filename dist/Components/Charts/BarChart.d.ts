import { FC } from 'react';
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';
export declare const options: ChartOptions<'bar'>;
export declare const monthLabels: string[];
export declare const data: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
};
interface BarChartProps {
    width?: number | string;
    height?: number | string;
    data: ChartData<'bar', number[], string>;
}
export declare const BarChart: FC<BarChartProps>;
export {};
