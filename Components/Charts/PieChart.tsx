import React, { Component, FC, useEffect, useState } from 'react'
import { Chart, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { FormatterUSD } from 'partner-local-lib/helper'
import { IChartDataItem } from './type'

Chart.register(ArcElement, Tooltip, Legend)

const createPieChartData = (params: IChartDataItem[], labelName: string = '# of Votes') => {
  const initial: ChartData<'pie', number[], string> = {
    labels: [],
    datasets: [{ label: labelName, borderWidth: 1, data: [], backgroundColor: [] as string[], borderColor: [] as string[] }],
  }
  return params.reduce((acc, cur) => {
    acc.labels?.push(cur.label)
    acc.datasets[0].data.push(cur.data)
    if (Array.isArray(acc.datasets[0].backgroundColor)) acc.datasets[0].backgroundColor.push(cur.backgroundColor)
    if (Array.isArray(acc.datasets[0].borderColor)) acc.datasets[0].borderColor.push(cur.borderColor)
    return acc
  }, initial)
}

const defaultData: IChartDataItem[] = [
  { label: 'Red', data: 12, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)' },
  { label: 'Blue', data: 19, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)' },
  { label: 'Yellow', data: 3, backgroundColor: 'rgba(255, 206, 86, 0.2)', borderColor: 'rgba(255, 206, 86, 1)' },
  { label: 'Green', data: 5, backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)' },
  { label: 'Purple', data: 2, backgroundColor: 'rgba(153, 102, 255, 0.2)', borderColor: 'rgba(153, 102, 255, 1)' },
  { label: 'Orange', data: 3, backgroundColor: 'rgba(255, 159, 64, 0.2)', borderColor: 'rgba(255, 159, 64, 1)' },
]

interface PieChartProps {
  width?: number | string
  height?: number | string
  data: ChartData<'pie', number[], string>
  disableTooltip?: boolean
}
export const PieChartV2: FC<PieChartProps> = (props) => {
  const { data, disableTooltip, ...other } = props
  const [options, setOptions] = useState<ChartOptions<'pie'>>({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      tooltip: {
        enabled: disableTooltip !== true,
        callbacks: {
          label: function (context) {
            let label = context.label || context.dataset.label || ''
            if (label) label += ': '
            if (context.parsed !== null) label += FormatterUSD().format(context.parsed)
            return label
          },
        },
      },
    },
  })
  useEffect(() => {
    if (options.plugins && options.plugins.tooltip) {
      options.plugins.tooltip.enabled = props.disableTooltip !== true
      setOptions((op) => ({ ...op }))
    }
  }, [options.plugins, options.plugins?.tooltip?.enabled, props.disableTooltip])
  return <Pie options={options} data={data} {...other} />
}

interface IProps {
  data?: IChartDataItem[]
}
export class PieChart extends Component<IProps> {
  static defaultProps = { data: defaultData }
  render() {
    return <Pie data={createPieChartData(this.props.data ?? [])} />
  }
}
