import { Box } from '@mui/material'
import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface MessageBoxProps {

}
export interface IOptionDefault {
    Title: string,
    Content: JSX.Element | string,
    data: any,
    onSubmit?: (data: any) => void
    Footer?: JSX.Element
}
type IContent = () => JSX.Element

type IOption = IOptionDefault | IContent
interface MessageBoxState {
    option?: IOption
}
export interface IMessageBoxContext {
    Close: () => void,
    open: (option: IOption) => void
}
export const MessageBoxContext = React.createContext<IMessageBoxContext>({
    Close: () => { },
    open: () => { }
});

export default class MessageBox extends Component<MessageBoxProps, MessageBoxState> implements IMessageBoxContext {
    constructor(props: MessageBoxProps) {
        super(props)
        this.state = {}
    }
    Close = () => {
        this.setState({ option: undefined })
    }
    open = (option: IOption) => {
        this.setState({ option })
    }
    renderContent = () => {
        const { option } = this.state
        if (typeof option === 'function') {
            return option()
        } else if (typeof option === 'object') {
            return <>
                <DialogTitle>{option.Title}</DialogTitle>
                <DialogContent sx={{ padding: "0 24px" }}>
                    {option.Content}
                </DialogContent>
                <DialogActions>
                    {option.Footer ? option.Footer : <>
                        <Button onClick={() => {
                            this.Close();
                            option.onSubmit && option.onSubmit(option.data);
                        }}>Yes</Button>
                        <Button color='inherit' onClick={this.Close}>No</Button>
                    </>
                    }
                </DialogActions>
            </>
        }
    }
    render() {
        return (
            <MessageBoxContext.Provider value={this}>
                {this.props.children}
                <Dialog
                    open={!!this.state.option}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.Close}
                    aria-describedby="alert-dialog-global"
                    sx={{ zIndex: 5000 }}
                >
                    {this.renderContent()}
                </Dialog>
            </MessageBoxContext.Provider>

        )
    }
}
