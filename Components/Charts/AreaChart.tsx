import React, { Component } from 'react'
import { Title, Tooltip, Legend, Filler, ScatterDataPoint, ChartDataset } from 'chart.js'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Chart.js Line Chart' }
  }
}
const defaultData = [
  {
    fill: true,
    label: 'Audios',
    data: [0, 200, 300, 500, 250, 300, 400, 600, 550],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)'
  },
  {
    fill: true,
    label: 'Albums',
    data: [0, 100, 150, 400, 480, 400, 420, 500, 400],
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)'
  }
]

interface IProps {
  data?: ChartDataset<'line', (number | ScatterDataPoint | null)[]>[]
  IsLoading?: boolean
}
export class AreaChart extends Component<IProps> {
  static defaultProps = { data: defaultData }
  render() {
    if (!this.props.data) return
    return <Line options={options} data={{ labels, datasets: this.props.data }} />
  }
}
