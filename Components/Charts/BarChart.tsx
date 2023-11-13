import React, { FC } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import { Bar, ChartProps, Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js'
import { faker } from '@faker-js/faker';
import { FormatterUSD } from 'local-lib/helper';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    // Title,
    Tooltip,
    Legend
);

export const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Bar Chart',
        // },
        tooltip: {
            callbacks: {
                label: function (context) {
                    let label = context.dataset.label || context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += FormatterUSD().format(context.parsed.y);
                    }
                    return label;
                }
            }
        },
    },
    scales: {
        "yAxes": {
            ticks: {
                callback: function (value, index, values) {
                    return FormatterUSD().format(value as number)
                }
            }
        },
    }
};

export const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
    labels: monthLabels,
    datasets: [
        {
            label: 'Dataset 1',
            data: monthLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: monthLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],

};

interface BarChartProps {
    width?: number | string,
    height?: number | string
    data: ChartData<"bar", number[], string>
}
export const BarChart: FC<BarChartProps> = (props) => {
    const { data, ...other } = props
    return <Bar options={options} data={data} {...other} />;
}