import React, { FC, useRef, useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem } from '@mui/material'
import * as SubLocal from 'local-lib/src/SubComponents/entry'
import * as SubCommon from '../../../SubComponent'
import { getErrorMessage } from '../../../Helper'
import { AssetResourceType, ChannelResourceType, IReport, IReportPayment, ISelectModel, ResourceType } from '../../../Models'
import ComponentAdminService from '../../../../../ClientAdmin/src/Services/Admin/ComponentAdminService'

interface BillingInfoProps extends SubCommon.FormBase<IReport> {
  Actions?: JSX.Element
  IsEdit: boolean
}

const SelectUser = SubCommon.CreateSelect2<ISelectModel>()

export const BillingInfo: FC<BillingInfoProps> = (props) => {
  const [NoDetails, setNoDetails] = useState(props.Model?.NoDetails ?? false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoDetails(event.target.checked)
  }
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px', justifyContent: 'space-between' }}>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <FormGroup className="group-input">
            <input hidden defaultValue={props.Model?.Id} name="Id" />
            <SelectUser
              title="LabelName"
              fetchData={ComponentAdminService.fetchLabelSelects}
              disabled={props.IsEdit}
              SelectValue={(m) => m.Id}
              GenerateLabel={(m) => m.Name}
              selectedItem={{ Id: '', Name: '' }}
              isOptionEqualToValue={(m1, m2) => m1.Id === m2.Id}
              defaultValue={props.Model?.ResourceId}
              searchInitial={(model) => {
                return props.Model?.ResourceId === model.Id
              }}
              {...getErrorMessage(props.MessageError, 'ResourceId')}
              onBlur={() => {
                props.onBlur && props.onBlur('ResourceId')
              }}
              name="ResourceId"
            />
          </FormGroup>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <SubLocal.InputOutline
            MaxLength={250}
            Title="Name"
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('Name')}
            {...getErrorMessage(props.MessageError, 'Name')}
            inputProps={{
              multiline: false,
              name: 'Name',
            }}
            defaultValue={props.Model?.Name}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <SubCommon.DatePickers
            MaxLength={250}
            Title="Start time"
            name="StartTime"
            inputFormat="dd/MM/yyyy"
            // onBlur={() => props.onBlur && props.onBlur("ForMonth")}
            Onchange={() => props.onBlur && props.onBlur('StartTime')}
            {...getErrorMessage(props.MessageError, 'StartTime')}
            defaultValue={props.Model?.StartTime ? new Date(props.Model?.StartTime) : new Date()}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <SubCommon.DatePickers
            MaxLength={250}
            Title="End time"
            name="EndTime"
            inputFormat="dd/MM/yyyy"
            // onBlur={() => props.onBlur && props.onBlur("ForMonth")}
            Onchange={() => props.onBlur && props.onBlur('EndTime')}
            {...getErrorMessage(props.MessageError, 'EndTime')}
            defaultValue={props.Model?.EndTime ? new Date(props.Model?.EndTime) : new Date()}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} fullWidth>
          <input name="NoDetails" hidden value={NoDetails.toString()} />
          <FormControlLabel
            disabled={props.IsEdit}
            control={<Checkbox defaultChecked={props.Model?.NoDetails} onChange={handleChange} />}
            label="No details"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} fullWidth>
          {props.IsEdit ? <input hidden defaultValue={props.Model?.ResourceType} name="ResourceType" /> : <></>}
          <SubLocal.InputOutline
            MaxLength={250}
            disabled={props.IsEdit}
            // disabled={!props.IsAdmin}
            Title="ResourceType"
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('ResourceType')}
            {...getErrorMessage(props.MessageError, 'ResourceType')}
            inputProps={{
              multiline: false,
              name: 'ResourceType',
              select: true,
              children: Object.keys(AssetResourceType).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              )),
            }}
            defaultValue={props.Model?.ResourceType ?? AssetResourceType.AudioLabel}
          />
        </FormControl>
        {!NoDetails ? (
          <input name="Payout" hidden value={0} />
        ) : (
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
            <SubLocal.InputOutline
              Title="Payout"
              MaxLength={250}
              maxRows={1}
              minRows={1}
              onBlur={() => props.onBlur && props.onBlur('Payout')}
              {...getErrorMessage(props.MessageError, 'Payout')}
              inputProps={{
                multiline: false,
                name: 'Payout',
                type: 'number',
                inputProps: {
                  maxLength: 250,
                  step: '0.01',
                },
              }}
              defaultValue={props.Model?.Payout}
            />
          </FormControl>
        )}
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          {props.Actions}
        </FormControl>
      </Box>
    </SubCommon.WrapFrom>
  )
}

interface PaymentInfoProps extends SubCommon.FormBase<Partial<IReportPayment>> {
  Actions?: JSX.Element
}

export const PaymentInfo: FC<PaymentInfoProps> = (props) => {
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px', justifyContent: 'space-between' }}>
        <input hidden name="ReportId" defaultValue={props.Model?.ReportId} />
        <input hidden name="Name" defaultValue={props.Model?.Name} />
        <input hidden name="USDRate" defaultValue={props.Model?.USDRate} />
        {/* <input hidden name="LabelName" defaultValue={props.Model?.re} /> */}
        <input hidden name="Payout" defaultValue={props.Model?.Payout} />
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <SubLocal.InputOutline
            MaxLength={250}
            Title="TransactionId"
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('TransactionId')}
            {...getErrorMessage(props.MessageError, 'TransactionId')}
            inputProps={{
              multiline: false,
              name: 'TransactionId',
            }}
            defaultValue={props.Model?.TransactionId}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <SubLocal.InputOutline
            MaxLength={500}
            Title="Description"
            maxRows={3}
            minRows={3}
            onBlur={() => props.onBlur && props.onBlur('Description')}
            {...getErrorMessage(props.MessageError, 'Description')}
            inputProps={{
              name: 'Description',
            }}
            defaultValue={props.Model?.Description}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          {props.Actions}
        </FormControl>
      </Box>
    </SubCommon.WrapFrom>
  )
}
