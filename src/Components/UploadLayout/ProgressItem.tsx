import { ArrowCircleUp, Close, Done, Info, Pending } from '@mui/icons-material'
import { Box, Button, LinearProgress, Typography, IconButton } from '@mui/material'
import { Component } from 'react'
import { IProcessItem } from './types'

interface IProgressItemProps {
  item: IProcessItem
  onRetry: () => void
  onClose: () => void
  [key: string]: any
  disableDelete?: boolean
}
interface IProgressItemState {
  isHover: boolean
}
export default class ProgressItem extends Component<IProgressItemProps, IProgressItemState> {
  constructor(props: IProgressItemProps) {
    super(props)
    this.state = {
      isHover: false,
    }
  }
  shouldComponentUpdate(
    nextProps: Readonly<IProgressItemProps>,
    nextState: Readonly<IProgressItemState>,
    nextContext: any
  ): boolean {
    return (
      Object.keys(nextProps).some((key) => (nextProps as any)[key] !== (this.props as any)[key]) ||
      nextState.isHover !== this.state.isHover
    )
  }

  onRetry = () => {
    this.props.onRetry()
  }
  getIcons = () => {
    switch (this.props.item.Status) {
      case 'Completed':
        return <Done color="success" fontSize="small" />
      case 'Error':
        return <Info color="error" fontSize="small" />
      case 'Processing':
        return <ArrowCircleUp color="info" fontSize="small" />
      default:
        return <Pending color="info" fontSize="small" />
    }
  }

  getButton = (item: IProcessItem) => {
    return item.Status === 'Completed' || this.props.disableDelete === true ? (
      <></>
    ) : (
      <IconButton sx={{ padding: 0 }} onClick={this.onClose}>
        <Close fontSize="small" />
      </IconButton>
    )
  }
  onClose = () => {
    this.setState({ isHover: true })
  }
  isShowHover = (item: IProcessItem) => {
    return item.Status === 'Error' || this.state.isHover
  }

  onConfirm = () => {
    this.setState({ isHover: false })
    if (this.props.item.Status === 'Completed') return
    this.props.onClose()
  }
  componentDidUpdate(prevProps: Readonly<IProgressItemProps>, prevState: Readonly<IProgressItemState>, snapshot?: any): void {
    if (this.state.isHover && this.props.item.Status === 'Completed') {
      this.setState({ isHover: false })
    }
  }
  getContentHover = (item: IProcessItem) => {
    return this.state.isHover ? (
      <Box
        sx={{
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1003,
          marginRight: '30px',
          padding: '0 10px',
          borderRadius: '15px',
        }}
      >
        <IconButton onClick={this.onConfirm} sx={{ background: '#e0e0e0', marginRight: '5px' }}>
          <Done color="action" fontSize="small" />
        </IconButton>
        <Typography color={'red'}>Are you sure delete!</Typography>
      </Box>
    ) : item.Status === 'Error' ? (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          flex: 1,
        }}
      >
        <Box sx={{ background: 'white' }}>
          <Button onClick={this.onRetry}>Retry</Button>
        </Box>
      </Box>
    ) : (
      <></>
    )
  }
  onHoverClose = () => {
    this.setState({ isHover: false })
  }
  render() {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            margin: '12px 0',
            padding: '12px 8px',
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            gap: '5px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {this.getIcons()}
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
              <Typography sx={{ textAlign: 'start' }} noWrap>
                {this.props.item.Name}
              </Typography>
            </Box>
            {this.getButton(this.props.item)}
          </Box>
          <LinearProgress
            sx={{ display: this.props.item.Status === 'Processing' ? 'flex' : 'none' }}
            variant="determinate"
            value={this.props.item.Value ?? 0}
          />
          <Box
            className="pannel-actions"
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: this.isShowHover(this.props.item) ? 'flex' : 'none',
              // justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            {this.getContentHover(this.props.item)}
          </Box>
        </Box>
        <Box
          onClick={this.onHoverClose}
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: this.state.isHover ? 'flex' : 'none',
            zIndex: 1002,
          }}
        ></Box>
      </>
    )
  }
}
