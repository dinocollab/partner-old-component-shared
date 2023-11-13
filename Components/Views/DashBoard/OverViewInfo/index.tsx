import React, { Component, FC } from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { CreateUseMediaQuery, FormatterUSD } from 'local-lib/helper'
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined'
import { BarChart } from '../../../Charts/BarChart'
import { ChartData, ChartDataset } from 'chart.js'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined'
import { SkeletonLazyWrap } from '../../../SkeletonLazyView'
import { HtmlTooltip } from 'component-shared/Components/HtmlTooltip'

export type CardKey = string | 'Revenue' | 'LastMonth' | 'Balance'
export type ItemKey = string | 'Asset' | 'Claimed' | 'Content'
export interface IChartData {
  Year: number
  Datasets: { [key: ItemKey]: number[] }
  Labels: string[]
  CardData: ICardData
}
export interface ICardData {
  [key: CardKey]: {
    Value: number
    Data: { [key: ItemKey]: number }
  }
}
export interface IOverViewInfoProps {
  Year: number
  data?: IChartData
  IsLoading?: boolean
}
const formatUSD = FormatterUSD().format

// const colors = ["#95d469", "#5db4f9", "#ee955b"]
const colors = ['#92e2e3', '#5db4f9', '#5774f4']

export class OverViewInfo extends Component<IOverViewInfoProps> {
  generateBarChart = (): ChartData<'bar', number[], string> => {
    return {
      labels: this.props.data?.Labels,
      datasets: Object.keys(this.props.data?.Datasets ?? {}).reduce<ChartDataset<'bar', number[]>[]>((result, key, index) => {
        const data = this.props.data?.Datasets[key] ?? []
        result.push({ label: key, data: data, backgroundColor: colors[index % colors.length] })
        return result
      }, []),
    }
  }
  render() {
    let { CardData } = this.props.data ?? {}
    CardData = CardData ?? {}
    return (
      <Stack sx={{ flex: 1, padding: '12px', gap: '6px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '4px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AnalyticsOutlinedIcon color="primary" />
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }}>
            Earnings
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#979797' }}>
          Year {this.props.Year}
        </Typography>
        <Box />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <InfoItem
            Title="All revenue"
            Value={formatUSD(CardData?.Revenue?.Value)}
            Description={`All revenue in the year ${this.props.Year}.`}
            TitleColor={'#1976d2'}
            data={CardData?.Revenue?.Data}
            IsLoading={this.props.IsLoading !== false}
            Icon={(isMobile) => <DonutSmallOutlinedIcon sx={{ fontSize: isMobile ? '3rem' : '6rem', color: '#1976d2' }} />}
          />
          <InfoItem
            Title="Last month"
            Value={formatUSD(CardData?.LastMonth?.Value)}
            Description={`The most recent month has been paid in the year ${this.props.Year}.`}
            data={CardData?.LastMonth?.Data}
            IsLoading={this.props.IsLoading !== false}
            Icon={(isMobile) => <DataUsageOutlinedIcon sx={{ fontSize: isMobile ? '3rem' : '6rem', color: '#1976d2' }} />}
            TitleColor={'#1976d2'}
          />
          <InfoItem
            Title="Balances"
            Value={formatUSD(CardData?.Balance?.Value)}
            Description="All revenue has not been paid."
            data={CardData?.Balance?.Data}
            IsLoading={this.props.IsLoading !== false}
            Icon={(isMobile) => <PaidOutlinedIcon sx={{ fontSize: isMobile ? '3rem' : '6rem', color: '#ffc107' }} />}
            TitleColor={'#ffc107'}
          />
        </Box>
        <Box height="12px" />
        <SkeletonLazyWrap IsLoading={this.props.IsLoading !== false} component={Box} sx={{ flex: 1, minHeight: '400px' }}>
          <BarChart data={this.generateBarChart()} />
        </SkeletonLazyWrap>
      </Stack>
    )
  }
}

interface InfoItemProps {
  isFirst?: boolean
  Title: string
  Value: string
  TitleColor: string
  Description: string
  data?: { [key: ItemKey]: number }
  Icon: (isMobile: boolean) => JSX.Element
  IsLoading: boolean
}
const InfoItem: FC<InfoItemProps> = React.forwardRef((props, ref) => {
  const isMobile = CreateUseMediaQuery()
  return (
    <HtmlTooltip placement="top" title={<TooltipItem data={props.data ?? {}} Description={props.Description} />} arrow>
      <SkeletonLazyWrap
        IsLoading={props.IsLoading}
        component={Box}
        ref={ref}
        sx={{ flex: 1, minWidth: '250px', minHeight: '100px', display: 'flex', border: '1px solid white', background: '#e0e0e0' }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '12px 8px' }}>
          {props.Icon(isMobile)}
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 'bold', color: props.TitleColor }}>{props.Title}</Typography>
          <Typography variant="h6">{props.Value}</Typography>
        </Box>
      </SkeletonLazyWrap>
    </HtmlTooltip>
  )
})

interface ITooltipItem {
  Description: string
  data: { [key: ItemKey]: number }
}
const GenerateItem = (data: { [key: ItemKey]: number }) => {
  return Object.keys(data).map((key) => {
    return (
      <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: '600', minWidth: '100px' }}>{key}</Typography>
        <Typography fontWeight={'500'}>{formatUSD(data[key] ?? 0)}</Typography>
      </Box>
    )
  })
}
const TooltipItem: FC<ITooltipItem> = (props) => {
  return (
    <Box sx={{ maxWidth: '300px', minWidth: '200px' }}>
      {GenerateItem(props.data)}
      <Divider />
      <Typography variant="caption">
        {props.Description}
        {/* All revenue has been paid in the year 2023. */}
        {/* The most recent month has been paid in the year 2023. */}
        {/* All revenue has not been paid */}
      </Typography>
    </Box>
  )
}
