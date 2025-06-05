import { Component } from 'react';
import { ChartData, ChartOptions } from 'chart.js';
interface IProps {
    data?: ChartData<'bar', number[], string>;
    options?: ChartOptions<'bar'>;
    title?: string;
}
export declare class HorizontalBarChart extends Component<IProps> {
    getOptions: (title?: string) => {
        indexAxis: "y";
        elements: {
            bar: {
                borderWidth: number;
            };
        };
        responsive: boolean;
        plugins: {
            legend: {
                position: "right";
            };
            title: {
                display: boolean;
                text: string;
            };
        };
    };
    getData: (unitName?: string) => {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            borderColor: string;
            backgroundColor: string;
        }[];
    };
    render(): JSX.Element;
}
export default HorizontalBarChart;
