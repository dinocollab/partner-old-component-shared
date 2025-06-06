import React, { Component } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { TopViewData } from '../type'
import { humannumber } from '../../../Helper'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
  }
}))

interface ITopViewTableProps {
  renderName?: (data: TopViewData) => JSX.Element
  data: TopViewData[]
  Prefix?: string
  Subfix?: string
}
export default class TopViewTable extends Component<ITopViewTableProps> {
  render() {
    const maxView = Math.max(...this.props.data.map((x) => x.Value))
    return (
      <Table aria-label='simple table'>
        <TableBody>
          {this.props.data.map((row, index) => {
            let progressValue = (row.Value * 100) / maxView
            progressValue = progressValue > 2 ? progressValue : 2
            return (
              <TableRow key={row.Id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ flex: 9 }}>{this.props.renderName ? this.props.renderName(row) : row.Name}</TableCell>
                <TableCell sx={{ width: '150px' }} align='right'>
                  <BorderLinearProgress variant='determinate' value={progressValue} />
                </TableCell>
                <TableCell sx={{ flex: 1 }} align='right'>
                  {this.props.Prefix}
                  {humannumber(row.Value)}
                  {this.props.Subfix}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}
