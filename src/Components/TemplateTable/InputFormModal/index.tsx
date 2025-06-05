import { Box, IconButton, Modal, Slide } from '@mui/material'
import React, { Component, ComponentType, FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { TransitionProps } from '@mui/material/transitions'
export type InputFormType = 'EDIT' | 'CREATE' | 'DELETE' | 'DETAIL' | 'MODAL'

interface InputFormModalProps {
  MapForm: { [key in InputFormType]?: ComponentType<any> }
}
interface InputFormModalState {
  open: boolean
  Type: InputFormType
  Model?: any
  IsFull: boolean
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
const FullScreen: FC<{ handleClose: () => void }> = (props) => (
  <Box
    onMouseDown={props.handleClose}
    sx={{
      position: 'absolute',
      display: 'flex',
      flex: 1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'space-around',
    }}
  >
    {props.children}
  </Box>
)
const CenterScreen: FC<{ handleClose: () => void }> = (props) => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>{props.children}</div>
)
export default class InputFormModal extends Component<InputFormModalProps, InputFormModalState> {
  constructor(props: InputFormModalProps) {
    super(props)
    this.state = {
      open: false,
      Type: 'CREATE',
      IsFull: false,
    }
  }
  shouldComponentUpdate(nextProps: Readonly<InputFormModalProps>, nextState: Readonly<InputFormModalState>, nextContext: any) {
    return nextState.open !== this.state.open
  }
  renderContent = () => {
    const Form = this.props.MapForm[this.state.Type]
    const Wrap = this.state.IsFull ? FullScreen : CenterScreen
    if (Form) {
      return <Wrap handleClose={this.handleClose}>{Form ? <Form data={this.state.Model} /> : ''}</Wrap>
    }
  }
  open(Type: InputFormType, Model?: any, IsFull: boolean = false) {
    this.setState({ Type, open: true, Model, IsFull })
  }
  handleClose = () => {
    this.setState({ open: false, Model: undefined })
  }
  render() {
    return (
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        // maxWidth="sm"
        sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <>{this.renderContent()}</>
        {/* <Box sx={{
                        position: 'absolute',
                        right: "5px",
                        top: 0,
                        borderRadius: "50%",
                        background: 'rgb(0 0 0 / 40%)',
                        margin: "5px"
                    }}>
                        <IconButton onClick={this.handleClose}>
                            <CloseIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Box> */}
      </Modal>
    )
  }
}
