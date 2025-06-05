import { Box, Button, Typography } from '@mui/material'
import React, { PureComponent } from 'react'
import UploadStatus from './UploadStatus'
import { IProcessItem } from './types'
import { UploadMonitor } from './UploadMonitor'

export * from './types'

interface IUploadLayoutProps {
  Horizontal: 'end' | 'start'
  Vertical: 'end' | 'start'
  ContentHeight: number
  ContentWidth: number
  open: boolean
  UploadExecutor: (item: IProcessItem, progress: (value: number) => void) => Promise<void>
  onClose?: (isCompleted: boolean) => void
  inline?: boolean
}
interface IUploadLayoutState {
  open: boolean
  showComfirm: boolean
}
export interface IUploadLayoutContext {
  state: IUploadLayoutState
  getErrors: () => IProcessItem[]
  getComplete: () => IProcessItem[]
  onItemClose: (item: IProcessItem) => void
  onItemRetry: (item: IProcessItem) => void
  onRetryAll: () => void
  addItems: (items: Omit<IProcessItem, 'Value' | 'Signal'>[]) => void
  Show: () => void
  Close: () => void
  items: IProcessItem[]
  renderUploadContent: () => JSX.Element
}
export const Sleep = (sec: number) => new Promise((res) => setTimeout(res, sec))
export const UploadLayoutContext = React.createContext<IUploadLayoutContext>({} as any)

export default class UploadLayout
  extends PureComponent<React.PropsWithChildren<IUploadLayoutProps>, IUploadLayoutState>
  implements IUploadLayoutContext
{
  constructor(props: IUploadLayoutProps) {
    super(props)
    this.state = {
      open: props.open,
      showComfirm: false,
    }
    this._monitor = new UploadMonitor(3, this.executor, this.getItem)
    this._monitor.addEventListen('Error', this.uploadError)
    this._monitor.addEventListen('Completed', this.uploadComplete)
  }
  static defaultProps = {
    Horizontal: 'end',
    Vertical: 'end',
    ContentHeight: 400,
    ContentWidth: 400,
    open: false,
  }
  isUnmounted = false
  _monitor: UploadMonitor<IProcessItem>
  items: IProcessItem[] = []
  componentWillUnmount(): void {
    this.isUnmounted = true
    this._monitor.events.removeAllListeners()
    this.items.forEach((x) => x.Signal?.abort())
  }
  addItems = (items: Omit<IProcessItem, 'Value' | 'Signal'>[]) => {
    this.items.push(...items)
    this._monitor.start()
  }
  getItem = () => {
    const item = this.items.filter((x) => x.Status === 'Pending')[0]
    if (item) {
      item.Status = 'Processing'
    }
    return item
  }
  executor = async (item: IProcessItem) => {
    await this.props.UploadExecutor(item, (value) => {
      item.Value = value
      this.updateItems()
    })
    item.Status = 'Completed'
    this.updateItems()
  }
  uploadComplete = (item: IProcessItem) => {
    item.Status = 'Completed'
    this.updateItems()
  }
  uploadError: any = (data: [IProcessItem, Error]) => {
    data[0].Status = 'Error'
    this.updateItems()
  }
  onItemClose = (item: IProcessItem) => {
    item.Signal?.abort()
    const index = this.items.findIndex((x) => x === item)
    this.items.splice(index, 1)
    this.updateItems()
    this._monitor.start()
  }
  onItemRetry = (item: IProcessItem) => {
    item.Status = 'Pending'
    this.updateItems()
    this._monitor.start()
  }
  onRetryAll = () => {
    this.items.filter((x) => x.Status === 'Error').forEach((x) => (x.Status = 'Pending'))
    this.updateItems()
    this._monitor.start()
  }
  _timer = new Date()
  updateItems = () => {
    // const tmp = new Date()
    // var diff = (tmp.getTime() - this._timer.getTime()) as number;
    // this._timer = tmp
    // if (diff < 500) return
    this.forceUpdate()
  }
  getErrors = () => this.items.filter((x) => x.Status === 'Error')
  getComplete = () => this.items.filter((x) => x.Status === 'Completed')

  // setState = <K extends keyof IUploadLayoutState>(state: Pick<IUploadLayoutState, K> | IUploadLayoutState, callback?: () => void) => {
  //     if (this.isUnmounted) return
  //     super.setState(state, callback)
  // }

  isCompleted = () => {
    return !this.items.some((x) => x.Status === 'Pending' || x.Status === 'Processing')
  }
  Close = () => {
    this.items.forEach((x) => x.Signal?.abort())
    this.items = []
    this.setState({ open: false, showComfirm: false })
  }
  CheckClose: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (!this.isCompleted()) {
      this.refUploadStatus.current?.UnCollapse()
      this.setState({ showComfirm: true })
      return
    }
    this.props.onClose && this.props.onClose(true)
    this.Close()
  }
  Show = () => {
    this.setState({ open: true })
  }
  closeComfirm = () => {
    this.setState({ showComfirm: false })
  }
  componentDidMount(): void {}
  renderUploadContent = () => {
    return (
      <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
        <UploadStatus ref={this.refUploadStatus} ContentHeight={this.props.ContentHeight} onUploadClose={this.CheckClose} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: '#00000045',
            borderRadius: '5px',
            display: this.state.showComfirm ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              background: 'white',
              borderRadius: '10px',
              padding: '10px',
              flexDirection: 'column',
            }}
          >
            <Typography>There are files that have not been uploaded and they will not be uploaded!</Typography>
            <Box>
              <Button
                sx={{ marginRight: '10px' }}
                variant="contained"
                onClick={() => {
                  this.Close()
                  this.props.onClose && this.props.onClose(false)
                }}
              >
                Yes
              </Button>
              <Button variant="outlined" onClick={this.closeComfirm}>
                No
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  refUploadStatus = React.createRef<UploadStatus>()
  render() {
    return (
      <UploadLayoutContext.Provider value={this}>
        {this.props.children}
        {this.props.inline !== true ? (
          <Box
            sx={{
              display: this.state.open ? 'flex' : 'none',
              justifyContent: this.props.Horizontal,
              alignItems: this.props.Vertical,
              position: 'fixed',
              zIndex: 1000,
              width: this.props.ContentWidth,
              top: this.props.Vertical === 'start' ? 0 : undefined,
              bottom: this.props.Vertical === 'end' ? 0 : undefined,
              left: this.props.Horizontal === 'start' ? 0 : undefined,
              right: this.props.Horizontal === 'end' ? 0 : undefined,
            }}
          >
            {this.state.open ? this.renderUploadContent() : <></>}
          </Box>
        ) : (
          <></>
        )}
      </UploadLayoutContext.Provider>
    )
  }
}
