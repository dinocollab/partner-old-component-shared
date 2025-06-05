import { Component } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { RowTitle } from '../Common'
import { TopViewData } from '../type'
import { SkeletonLazyWrap } from '../../../SkeletonLazyView'
import TopViewTable from '../TopViewTable'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'

export interface ITopChannelProps {
  data?: TopViewData[]
  Title: string
  Year: number
  IsLoading?: boolean
  Prefix?: string
  Subfix?: string
}

export default class TopChannel extends Component<ITopChannelProps> {
  render() {
    return (
      <Stack sx={{ flex: 1, border: '1px solid rgba(0,0,0,0.12)', borderRadius: '4px', padding: '12px', gap: '6px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AnalyticsOutlinedIcon color="primary" />
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700, flex: 1 }}>
            {this.props.Title}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#979797' }}>
          Year {this.props.Year}
        </Typography>
        <Box mx="-16px">
          <SkeletonLazyWrap IsLoading={this.props.IsLoading !== false} component={Box} sx={{ minHeight: '300px' }}>
            {this.props.IsLoading === false && !this.props.data?.length ? (
              <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>None</Box>
            ) : (
              <TopViewTable
                data={this.props.data ?? []}
                Prefix={this.props.Prefix}
                Subfix={this.props.Subfix}
                renderName={(data) => (
                  <RowTitle Thumb={data.Thumb} type={'Channel'} Id={data.Id}>
                    {data.Name}
                  </RowTitle>
                )}
              />
            )}
          </SkeletonLazyWrap>
        </Box>
      </Stack>
    )
  }
}
