import { Box, Button } from '@mui/material'
import React, { Component } from 'react'
import * as Sub from '../SubBillingFormComponent'
import * as SubCommon from '../../../SubComponent'
import { IReport } from '../../../Models'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { PartialError } from 'partner-local-lib/helper/ValidateModel'
interface BillingFormProps {
    data?: IReport
    MessageError?: PartialError<IReport> | any
    onBlur: (key: string) => void
    Name?: string
    Actions?: JSX.Element
    IsEdit: boolean
    fetchData: (value?: string, signal?: AbortSignal) => Promise<any[]>
}
export default class BillingForm extends Component<BillingFormProps> {
    render() {
        return (
            <Box sx={{ flex: 1, display: 'flex' }}>
                <SubCommon.ErrorAll MessageError={this.props.MessageError}>
                    <SubCommon.BoxInfo icon={<RequestQuoteIcon color='info' />} mb={false} title={this.props.Name || 'Billing'}>
                        <Sub.BillingInfo
                            IdForm={'FormKey.Personal'}
                            IsEdit={this.props.IsEdit}
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
