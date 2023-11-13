import { ChartData } from 'chart.js'
import React, { Component } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { IChartDataItem } from './type'

ChartJS.register(ArcElement, Tooltip, Legend)

const createChartData = (params: IChartDataItem[], labelName: string = '# of Votes') => {
  const initial: ChartData<'doughnut', number[], string> = {
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

interface IProps {
  data?: IChartDataItem[]
}
export class DoughnutChart extends Component<IProps> {
  static defaultProps = { data: defaultData }
  render() {
    return <Doughnut data={createChartData(this.props.data ?? [])} />
  }
}
