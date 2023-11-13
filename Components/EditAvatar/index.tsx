import { Box, Fade, IconButton, SxProps } from '@mui/material'
import Modal from "@mui/material/Modal";
import React, { Component } from 'react'
import './index.css'
import Avatar from "react-avatar-edit";
import { CSSProperties } from '@mui/styles';
import { Theme } from '@mui/system';
import { Edit } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
interface EditAvatarProps {
    sx?: SxProps<Theme>
    onSave?: (image: string) => void
    extra?: any
}
interface EditAvatarState {
    preview?: string
    src?: string
    labelStyle: CSSProperties,
}
export default class EditAvatar extends Component<EditAvatarProps, EditAvatarState> {
    constructor(props: EditAvatarProps) {
        super(props);
        this.state = {
            labelStyle: {
                color: "red",
                fontSize: "24px"
            },
        };
        this.onCrop = this.onCrop.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    onClose() {
        if (this.refInput) {
            this.refInput.value = ''
        }
        this.setState({ preview: undefined, src: undefined });
    }

    onCrop(preview: any) {
        this.setState({ preview });
    }
    renderEditAvatar = () => {
        return <Avatar
            width={390}
            height={295}
            minCropRadius={100}
            onCrop={this.onCrop}
            onClose={this.onClose}
            borderStyle={{ display: 'none' }}
            src={this.state.src}
            labelStyle={this.state.labelStyle}

        />
    }
    onEditClick = () => {
        this.refInput?.click()
    }
    onChange = () => {
        if (!this.refInput || !this.refInput.files) return
        const file = this.refInput.files[0]
        this.setState({ src: URL.createObjectURL(file) })
    }
    refInput: HTMLInputElement | null = null
    onSave = () => {
        this.onClose()
        this.state.preview && this.props.onSave && this.props.onSave(this.state.preview)
    }
    render() {
        return (
            <>
                <Box className='container-edit' sx={{ position: 'relative', minWidth: "100px", minHeight: "100px", ...(this.props.sx ?? {}) }}>
                    {this.props.children}
                    <a onClick={this.onEditClick} className='overlay-edit'>
                        <Edit />
                    </a>
                    <input onChange={this.onChange} accept='image/*' type='file' ref={ref => this.refInput = ref} hidden />
                </Box>
                <Modal
                    open={!!this.state.src}
                    aria-labelledby="edit-avatar-title"
                    aria-describedby="edit-avatar-description"
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#e0e0e0',
                        position: 'relative'
                    }}>{this.renderEditAvatar()}
                        <IconButton onClick={this.onSave} sx={{ color: 'white', position: 'absolute', right: 0, top: 0, p: '7px' }}>
                            <CheckCircleOutlineIcon />
                        </IconButton>
                    </Box>
                </Modal>
            </>
        )
    }
}
