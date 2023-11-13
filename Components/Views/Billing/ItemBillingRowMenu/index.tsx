import React, { Component } from 'react'
import { IconButton, ListItemIcon, MenuItem, Tooltip } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material';
import GridOnIcon from '@mui/icons-material/GridOn';
import { IItemRowMenuProps } from 'component-shared/Components/TemplateTable/ItemRowMenu';
import { IReport, ReportStatus } from 'component-shared/Components/Models';
import MenuMore from 'component-shared/Components/Views/Billing/MenuMore';
import PaidIcon from '@mui/icons-material/Paid';
interface IItemBillingRowMenuProps extends IItemRowMenuProps {
    onDetail: (data: IReport) => void
    onPay?: (data: IReport) => void
}
export default class ItemBillingRowMenu extends Component<IItemBillingRowMenuProps> {
    onDetail = () => {
        this.props.onDetail(this.props.data)
    }
    onPay = () => {
        this.props.onPay && this.props.onPay(this.props.data)
    }
    IsDisablePay = () => {
        const data = this.props.data as IReport
        return data?.Status === ReportStatus.Paid || !(data?.Payout ?? 0)
    }
    IsPaid = () => {
        return this.props.data?.Status === ReportStatus.Paid
    }
    IsNoDetails = () => this.props.data?.NoDetails ?? false
    //menu folder
    renderMenuMore = () => {
        return <MenuMore
            renderItems={this.renderMenuItems}
        />
    }
    renderMenuItems = () => {
        return [<MenuItem key={"edit"} onClick={this.props.onEdit}>
            <ListItemIcon>
                <Edit color='info' />
            </ListItemIcon>
            Edit
        </MenuItem>,
        <MenuItem key={"Delete"} onClick={this.props.onDelete} disabled={this.IsPaid()}>
            <ListItemIcon>
                <Delete color='error' />
            </ListItemIcon>
            Delete
        </MenuItem>]
    }
    render() {
        return (
            <div className="wrap-title-video" >
                <span className="title">{this.props.children}</span>
                <div className="container-action" >
                    <Tooltip title="Pay" >
                        <span>
                            <IconButton disabled={this.IsDisablePay()} onClick={this.onPay}>
                                <PaidIcon sx={{ color: this.IsDisablePay() ? '' : "#b28900" }} fontSize="small" />
                            </IconButton>
                        </span>
                    </Tooltip>
                    <Tooltip title="Detail" >
                        <span>
                            <IconButton onClick={this.onDetail} disabled={this.IsNoDetails()}>
                                <GridOnIcon color={this.IsNoDetails() ? 'disabled' : 'primary'} fontSize="small" />
                            </IconButton>
                        </span>
                    </Tooltip>
                    {this.renderMenuMore()}
                </div>
            </div>
        )
    }
}

export class ItemManageRowMenu extends Component<IItemBillingRowMenuProps> {
    onDetail = () => {
        this.props.onDetail(this.props.data)
    }
    IsNoDetails = () => this.props.data?.NoDetails ?? false
    render() {
        return (
            <div className="wrap-title-video" >
                <span className="title">{this.props.children}</span>
                <div className="container-action" >
                    <Tooltip title="Detail" >
                        <IconButton onClick={this.onDetail} disabled={this.IsNoDetails()}>
                            <GridOnIcon color={this.IsNoDetails() ? 'disabled' : 'primary'} fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        )
    }
}

