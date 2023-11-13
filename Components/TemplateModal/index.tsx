import { Box, IconButton, Modal } from '@mui/material'
import React, { Component, FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
export interface ITemplateModalProps {
    open?: boolean
    onClose?: () => void
}
export const CenterScreen: FC<{ handleClose: () => void }> = (props) =>
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {props.children}
    </div>
export const FullScreen: FC<{ handleClose: React.MouseEventHandler<HTMLDivElement> }> = (props) => <Box
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
    }}>{props.children}</Box>
interface ITemplateModalState {
    open: boolean
}
export interface ITemplateContext {
    Close: () => void
    open: () => void
}
export const TemplateModalContext = React.createContext<ITemplateContext>({} as any);
export default class TemplateModal extends Component<ITemplateModalProps, ITemplateModalState> {
    constructor(props: ITemplateModalProps) {
        super(props)
        this.state = {
            open: props.open || false
        }
    }
    Close = () => {
        this.props.onClose && this.props.onClose()
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }
    renderContent = () => {
        return <TemplateModalContext.Provider value={this}>
            {this.props.children}
        </TemplateModalContext.Provider>
    }
    componentDidUpdate() {
        if (typeof this.props.open === 'boolean' && this.props.open !== this.state.open) {
            this.setState({ open: this.props.open })
        }
    }
    onClose = () => {
        this.Close()
    }
    render() {
        return (
            <Modal
                open={this.state.open}
                onClose={this.onClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{
                    padding: "10px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {this.renderContent()}
            </Modal>
        )
    }
}
