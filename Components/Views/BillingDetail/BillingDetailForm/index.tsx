import { Box, Button } from '@mui/material'
import React, { Component } from 'react'
import * as Sub from '../SubComponent'
import * as SubCommon from '../../../SubComponent'
import { IAssetReportView, IReport, IReportView } from '../../../Models'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { PartialError } from 'partner-local-lib/helper/ValidateModel'
interface BillingDetailFormProps {
    data?: IAssetReportView
    MessageError?: PartialError<IReportView> | any
    onBlur: (key: string) => void
    Name?: string
    Actions?: JSX.Element
    Report: IReport,
    fetchData: (value?: string, signal?: string) => Promise<any[]>
}
export default class BillingDetailForm extends Component<BillingDetailFormProps> {
    render() {
        return (
            <Box sx={{ flex: 1, display: 'flex' }}>
                <SubCommon.ErrorAll MessageError={this.props.MessageError}>
                    <SubCommon.BoxInfo icon={<RequestQuoteIcon color='info' />} mb={false} title={this.props.Name || 'BillingDetail'}>
                        <Sub.BillingDetailInfo
                            IdForm={'FormKey.Personal'}
                            Report={this.props.Report}
                            IsForm={false}
                            Model={this.props.data}
                            onBlur={this.props.onBlur} MessageError={this.props.MessageError}
                            Actions={this.props.Actions}
                            fetchData={this.props.fetchData}
                        />
                    </SubCommon.BoxInfo>
                </SubCommon.ErrorAll>
            </Box>
        )
    }
}
