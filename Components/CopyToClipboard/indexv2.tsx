import { Tooltip, TooltipProps } from '@mui/material'
import copy from 'clipboard-copy'
import * as React from 'react'

interface ChildProps {
  copy: (content: any) => void
}
interface Props {
  TooltipProps?: Partial<TooltipProps>
  children: (props: ChildProps) => React.ReactElement<any>
}

enum EText {
  Copy = 'Copy',
  Copied = 'Copied to clipboard!',
}
interface IState {
  text: EText
}

/**
 * Render prop component that wraps element in a Tooltip that shows "Copied to clipboard!" when the
 * copy function is invoked
 */
export default class CopyToClipboard extends React.Component<Props, IState> {
  timer: any
  leaveDelay = 5000
  constructor(props: Props) {
    super(props)
    this.state = { text: EText.Copy }
  }
  componentWillUnmount(): void {
    if (this.timer) clearTimeout(this.timer)
  }
  render() {
    return (
      <Tooltip placement="bottom" title={this.state.text} onClose={this.handleOnTooltipClose} {...(this.props.TooltipProps || {})}>
        {this.props.children({ copy: this.onCopy }) as React.ReactElement<any>}
      </Tooltip>
    )
  }
  onCopy = (content: any) => {
    copy(content)
    this.setState({ text: EText.Copied })
    this.timer = setTimeout(this.handleOnTooltipClose, this.leaveDelay)
  }
  handleOnTooltipClose = () => {
    this.setState({ text: EText.Copy })
  }
}
