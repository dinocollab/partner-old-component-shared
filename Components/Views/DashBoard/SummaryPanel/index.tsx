import { Component } from 'react'
import { Box, Stack, SvgIcon, Typography, Grid, Grow } from '@mui/material'
import Folder from '@mui/icons-material/Folder'
import ImageIcon from '@mui/icons-material/Image'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FileIcon from '@mui/icons-material/InsertDriveFile'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import { IItemSummary } from 'component-shared/Components/Models'
import { AutoAwesomeMotion, Bookmark } from '@mui/icons-material'
import { SkeletonLazyWrap } from 'component-shared/Components/SkeletonLazyView'

interface IDashItem {
  Suffixes: string
  Icon: typeof SvgIcon
  Amount?: number
  Rate?: number
}

type TDataItem = { [key in keyof IItemSummary]: IDashItem }

const dataItems: TDataItem = {
  Folder: { Icon: Folder, Suffixes: 'folder(s)' },
  File: { Icon: FileIcon, Suffixes: 'file(s)' },
  Image: { Icon: ImageIcon, Suffixes: 'image(s)' },
  Video: { Icon: SmartDisplayIcon, Suffixes: 'video(s)' },
  Audio: { Icon: AudiotrackIcon, Suffixes: 'audio(s)' },
  Asset: { Icon: AutoAwesomeMotion, Suffixes: 'asset(s)' },
  AssetLabel: { Icon: Bookmark, Suffixes: 'label(s)' },
  ChannelContent: { Icon: YouTubeIcon, Suffixes: 'channel(s)' },
}
interface SummaryPanelProps {
  GetSummary: (signal?: AbortSignal | undefined) => Promise<IItemSummary | null>
}
interface SummaryPanelState {
  ItemSummary: IItemSummary | null
}
export default class SummaryPanel extends Component<SummaryPanelProps, SummaryPanelState> {
  /**
   *
   */
  constructor(props: SummaryPanelProps) {
    super(props)
    this.state = {
      ItemSummary: null,
    }
  }
  _isMounted = true
  GenerateItems = () => {
    return Object.keys(dataItems).map((key, i) => {
      if (this.state.ItemSummary) {
        dataItems[key as keyof IItemSummary].Amount = this.state.ItemSummary[key as keyof IItemSummary]
      }
      return <ItemInfoV2 IsLoading={!this.state.ItemSummary} key={`key${i}`} data={dataItems[key as keyof IItemSummary]} />
    })
  }
  componentWillUnmount(): void {
    this._isMounted = false
  }
  async componentDidMount() {
    const data = await this.props.GetSummary()
    if (!this._isMounted) return
    this.setState({ ItemSummary: data })
  }
  render() {
    return (
      <Grow in timeout={{ enter: 800 }} style={{ transitionDelay: '100ms' }}>
        <Box sx={{ display: 'flex', padding: '24px 30px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '4px' }}>
          <Grid container spacing={3}>
            {this.GenerateItems()}
          </Grid>
        </Box>
      </Grow>
    )
  }
}
interface IItemInfoProps {
  data: IDashItem
  IsLoading: boolean
}
// const ItemInfo: FC<IItemInfoProps> = (props) => {
//   const { Icon } = props.data
//   return (
//     <SkeletonLazyWrap
//       IsLoading={props.IsLoading}
//       component={Box}
//       sx={{
//         flexDirection: 'column',
//         display: 'flex',
//         padding: 5,
//         margin: '2px',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         // border: "1px solid #e0e0e0",
//         minWidth: '150px',
//       }}
//     >
//       <Icon fontSize="large" color="primary" />
//       <Typography variant="h6">{props.data.Amount ?? 0}</Typography>
//       <Typography>{props.data.Suffixes}</Typography>
//     </SkeletonLazyWrap>
//   )
// }

class ItemInfoV2 extends Component<IItemInfoProps> {
  get rateData(): { icon: typeof SvgIcon; color: string } {
    const rate = this.props.data.Rate
    if (!rate) return { icon: TrendingUpIcon, color: '#00a152' }
    if (rate < 0) return { icon: TrendingDownIcon, color: '#ff1744' }
    else return { icon: TrendingUpIcon, color: '#00a152' }
  }
  render() {
    const { data, IsLoading } = this.props
    const RateIcon = this.rateData.icon
    return (
      <Grid item xs={6} sm={4} md={3}>
        <SkeletonLazyWrap IsLoading={IsLoading} component={Stack} sx={{ gap: '12px', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6f6f6f' }}>
            <data.Icon fontSize="small" />
            <Typography variant="body2">{data.Suffixes}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
            <Typography variant="h4" color="#3c3c3c">
              {data.Amount ?? 0}
            </Typography>
            {data.Rate && data.Rate !== 0 && (
              <Box sx={{ display: 'flex', alignItems: 'center', color: this.rateData.color, gap: '6px', marginBottom: '6px' }}>
                <RateIcon fontSize="small" />
                <Typography variant="caption" fontWeight={700}>
                  {Math.abs(data.Rate).toFixed(2)}%
                </Typography>
              </Box>
            )}
          </Box>
        </SkeletonLazyWrap>
      </Grid>
    )
  }
}
