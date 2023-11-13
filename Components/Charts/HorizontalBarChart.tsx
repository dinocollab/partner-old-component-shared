import React, { Component } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

interface IProps {
  data?: ChartData<'bar', number[], string>
  options?: ChartOptions<'bar'>
  title?: string
}
export class HorizontalBarChart extends Component<IProps> {
  getOptions = (title?: string) => ({
    indexAxis: 'y' as const,
    elements: { bar: { borderWidth: 2 } },
    responsive: true,
    plugins: {
      legend: { position: 'right' as const },
      title: { display: true, text: title || 'Horizontal Bar Chart' },
    },
  })

  getData = (unitName: string = 'Unit') => {
    const data = labels.map((e) => ({ label: e, value: faker.datatype.number({ min: 0, max: 1000 }) }))
    const sortData = data.sort((a, b) => b.value - a.value)
    return {
      labels: sortData.map((e) => e.label),
      datasets: [
        {
          label: unitName,
          data: sortData.map((e) => e.value),
          borderColor: 'rgb(255, 99, 133, 0.6)',
          backgroundColor: 'rgba(255, 99, 133, 0.3)',
        },
      ],
    }
  }

  render() {
    const data = this.props.data || this.getData()
    const options: ChartOptions<'bar'> = this.props.options || this.getOptions(this.props.title)
    return <Bar options={options} data={data} />
  }
}
export default HorizontalBarChart
