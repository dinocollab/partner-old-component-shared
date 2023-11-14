import React, { FC } from 'react'
import { Box, FormControl, FormGroup } from '@mui/material'
import * as SubLocal from 'local-lib/src/SubComponents/entry'
import * as SubCommon from '../../../SubComponent'
import { getErrorMessage } from '../../../Helper'
import { IAssetReportView, IReport, IReportView, ISelectModel } from '../../../Models'
// import ComponentAdminService from '../../../../../ClientAdmin/src/Services/Admin/ComponentAdminService'

interface BillingDetailProps extends SubCommon.FormBase<IAssetReportView> {
  Actions?: JSX.Element
  Report: IReport
  fetchData: (value?: string, signal?: string) => Promise<any[]>
}

// const SelectMetaFile = SubCommon.CreateSelect2<ISelectModel>()
const SelectAsset = SubCommon.CreateSelect2<ISelectModel>()

export const BillingDetailInfo: FC<BillingDetailProps> = (props) => {
  const fetchAllAsset = (labelName: string) => {
    // return (value: string) => props.fetchAssetSelects_V2(value, labelName)
    return (value: string) => props.fetchData(value, labelName)
  }
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px', justifyContent: 'space-between' }}>
        <input hidden defaultValue={props.Model?.Id} name="Id" />
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <FormGroup className="group-input">
            <SelectAsset
              title="AssetId"
              fetchData={fetchAllAsset(props.Report.ResourceId)}
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
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <SubLocal.InputOutline
            defaultValue={props.Model?.TotalMoney}
            MaxLength={250}
            Title="TotalMoney"
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('TotalMoney')}
            {...getErrorMessage(props.MessageError, 'TotalMoney')}
            inputProps={{
              multiline: false,
              name: 'TotalMoney',
              type: 'number',
              inputProps: {
                maxLength: 250,
                step: '0.01',
              },
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <SubLocal.InputOutline
            defaultValue={props.Model?.Views}
            MaxLength={250}
            Title="Views"
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('Views')}
            {...getErrorMessage(props.MessageError, 'Views')}
            inputProps={{
              multiline: false,
              name: 'Views',
              type: 'number',
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <SubLocal.InputOutline
            defaultValue={props.Model?.Percentage ?? 25}
            MaxLength={250}
            Title="Percentage"
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('Percentage')}
            {...getErrorMessage(props.MessageError, 'Percentage')}
            inputProps={{
              multiline: false,
              name: 'Percentage',
              type: 'number',
            }}
          />
        </FormControl>
        {/* <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <FormGroup className='group-input'>
                    <SelectMetaFile
                        title='MetaFile'
                        fetchData={ComponentAdminService.fetchMetaFileSelects}
                        SelectValue={m => m.Id}
                        GenerateLabel={m => m.Name}
                        selectedItem={{ Id: '', Name: '' }}
                        isOptionEqualToValue={(m1, m2) => m1.Id === m2.Id}
                        defaultValue={props.Model?.MetaFileId}
                        searchInitial={model => {
                            return props.Model?.MetaFileId?.toLowerCase() === model.Id.toLowerCase()
                        }}
                        {...getErrorMessage(props.MessageError, "MetaFileId")}
                        onBlur={() => {
                            props.onBlur && props.onBlur("MetaFileId")
                        }}
                        name="MetaFileId"
                    />
                </FormGroup>
            </FormControl> */}
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          {props.Actions}
        </FormControl>
      </Box>
    </SubCommon.WrapFrom>
  )
}
