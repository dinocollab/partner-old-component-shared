import React, { Component } from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material';
import './index.css'

export interface IItemRowMenuProps {
    data: any
    onEdit: () => void
    onDelete: () => void
    onDetailModal?: () => void
    HideEdit?: boolean
    HideDelete?: boolean
}
export default class ItemRowMenu extends Component<IItemRowMenuProps> {
    render() {
        return (
            <div className="wrap-title-video" >
                <span className="title">{this.props.children}</span>
                <div className="container-action" >
                    {this.props.HideEdit !== true ?
                        <Tooltip title="Edit" >
                            <IconButton onClick={this.props.onEdit}>
                                <Edit color='info' fontSize="small" />
                            </IconButton>
                        </Tooltip> : ''
                    }
                    {this.props.HideDelete !== true ?
                        <Tooltip title="Delete">
                            <IconButton onClick={this.props.onDelete}>
                                <Delete color='error' fontSize="small" />
                            </IconButton>
                        </Tooltip> : ''
                    }
                </div>
            </div>
        )
    }
}
