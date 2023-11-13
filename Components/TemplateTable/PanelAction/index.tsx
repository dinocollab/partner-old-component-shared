import { Box, Button } from '@mui/material'
import React, { Component } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

export type IPanelActionProps = {
    onCreate: () => void
    ButtonText: string
}
export default class PanelAction extends Component<IPanelActionProps> {
    static defaultProps = {
        ButtonText: 'Create'
    }
    render() {
        return (
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', padding: "10px" }} >
                </Box>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: "10px" }}>
                    <Button onClick={this.props.onCreate} variant="contained" endIcon={<AddCircleIcon />}>
                        {this.props.ButtonText}
                    </Button>
                </Box>
            </Box>
        )
    }
}
