import React, { Component, FC } from 'react'
import { Modal, SxProps, ModalProps, Box, Fade, Backdrop } from '@mui/material'

export interface OptionModal {
  sx?: SxProps
  modalProps?: ModalProps
  ContenModal?: () => JSX.Element
}
interface GlobalModalState {
  isOpen: boolean
  sx?: SxProps
  modalProps?: ModalProps
  ContentModal?: React.JSXElementConstructor<any>
}
interface GlobalModalProps {}

export interface IGlobalModalContext {
  ShowModal: (option: OptionModal) => void
  CloseModal: () => void
}
export const GlobalModalContext = React.createContext<IGlobalModalContext>({} as any)

export enum ContentPosition {
  Center,
}
export interface IMapGlobalModal {
  context: IGlobalModalContext
}
export const MapGlobalModalContext = (ElementSub: React.ComponentType<IMapGlobalModal>) => {
  return (
    <>
      <GlobalModalContext.Consumer>
        {(context) => {
          return <ElementSub context={context} />
        }}
      </GlobalModalContext.Consumer>
    </>
  )
}

type TGMProps = React.PropsWithChildren<GlobalModalProps>
export class GlobalModal extends Component<TGMProps, GlobalModalState> implements IGlobalModalContext {
  constructor(props: any) {
    super(props)
    this.state = { isOpen: false }
  }
  ShowModal = (option: OptionModal) => {
    this.setState({ ContentModal: option.ContenModal, sx: option.sx, modalProps: option.modalProps, isOpen: true })
  }
  clearContentModal = () => {
    this.setState({ ContentModal: undefined })
  }
  CloseModal = () => {
    this.setState({ isOpen: false }, () => {
      setTimeout(this.clearContentModal, 500)
    })
  }
  GenerateContent = (): JSX.Element => {
    const Content = this.state.ContentModal ?? (() => <></>)
    const Temp = React.forwardRef(() => <Content />)
    return <Temp />
  }
  render() {
    return (
      <GlobalModalContext.Provider value={this}>
        {this.props.children}
        <Modal
          open={this.state.isOpen}
          sx={this.state.sx}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{ backdrop: { timeout: 400 } }}
          {...this.state.modalProps}
        >
          <Fade in={this.state.isOpen}>
            <Box sx={{ position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              {this.GenerateContent()}
            </Box>
          </Fade>
        </Modal>
      </GlobalModalContext.Provider>
    )
  }
}
export default GlobalModal
