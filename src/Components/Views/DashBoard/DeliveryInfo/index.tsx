import { Box, Stack, Typography } from '@mui/material'
import React, { Component } from 'react'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { SkeletonLazyWrap } from '../../../SkeletonLazyView'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataset,
  ScatterDataPoint
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const defaultData = [
  {
    label: 'Audios',
    data: [0, 200, 300, 500, 250, 300, 400, 600, 550],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)'
  },
  {
    label: 'Albums',
    data: [0, 100, 150, 400, 480, 400, 420, 500, 400],
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)'
  }
]
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Chart.js Line Chart' }
  }
}

export interface IDeliveryInfoProps {
  data?: ChartDataset<'line', (number | ScatterDataPoint | null)[]>[]
  IsLoading?: boolean
}
export default class DeliveryInfo extends Component<IDeliveryInfoProps> {
  static defaultProps = { data: defaultData }

  render() {
    return (
      <Stack sx={{ flex: 1, padding: '12px', gap: '6px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '4px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AnalyticsOutlinedIcon color='primary' />
          <Typography variant='subtitle1' color='primary' sx={{ fontWeight: 700 }}>
            Audios
          </Typography>
        </Box>
        <SkeletonLazyWrap IsLoading={this.props.IsLoading !== false} component={Box} sx={{ flex: 1, minHeight: '400px' }}>
          {this.props.data && <Line options={options} data={{ labels, datasets: this.props.data }} />}
        </SkeletonLazyWrap>
      </Stack>
    )
  }
}
