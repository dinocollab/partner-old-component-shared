import React, { Component, FC, useCallback, useRef, useState } from 'react'
import { CardMedia, Typography } from '@mui/material'
import { Avatar, Box, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Link, Stack } from '@mui/material'
import { CopyAll, Edit } from '@mui/icons-material'
import { ApiAlertContext } from 'partner-local-lib/Views'
//TODO : fix remove fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGlobe, faKey } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { GlobeIcon, KeyIcon, FacebookIcon, GithubIcon, TwitterIcon, InstagramIcon } from '../Icons'

import { FormValidator, SingleRuleValidate } from 'partner-local-lib/helper'
import { getErrorMessage } from '../Helper'
import { ISelectModel, IUser, IContactInfo } from '../Models'
import { RoleKeyExternalSite, RoleKeyInternalSite } from '../Helper/RoleKey'
import InputFormBase, { InputFormContext } from '../TemplateTable/InputFormBase'
import ContactInfoForm from './ContactInfoForm'
import CopyToClipboard from '../CopyToClipboard'

import * as ReactTrap from 'reactstrap'
import * as SubCommon from '../SubComponent'
import * as SubLocal from 'partner-local-lib/SubComponents'
import './index.css'

interface IAvatarCardProps {
  data?: IUser
  extract?: any
}

export const AvatarCard: FC<IAvatarCardProps> = (props) => {
  return (
    <Box sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar src={props.data?.Avatar} sx={{ width: 200, height: 200, margin: '10px' }} />
      </CardMedia>
    </Box>
  )
}

interface UserFormBase extends SubCommon.FormBase<IUser> {
  isAdmin?: Boolean
}
interface FormPersonalInfoProps extends UserFormBase {
  Actions?: JSX.Element
  IsEdit?: boolean
}

export const FormPersonalInfo: FC<FormPersonalInfoProps> = (props) => {
  const renderDisplayName = () => {
    if (props.IsEdit) {
      return (
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='Display name'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('DisplayName')}
            {...getErrorMessage(props.MessageError, 'DisplayName')}
            inputProps={{ multiline: false, name: 'DisplayName' }}
            defaultValue={props.Model?.DisplayName}
          />
        </Grid>
      )
    }
    return <input name='DisplayName' hidden defaultValue={'DisplayName'} />
  }

  return (
    <SubCommon.WrapFrom onSubmit={props.onSubmit} Id={props.IdForm} IsForm={props.IsForm}>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='First name'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('FirstName')}
            {...getErrorMessage(props.MessageError, 'FirstName')}
            inputProps={{ multiline: false, name: 'FirstName' }}
            defaultValue={props.Model?.FirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='Last name'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('LastName')}
            {...getErrorMessage(props.MessageError, 'LastName')}
            inputProps={{ multiline: false, name: 'LastName' }}
            defaultValue={props.Model?.LastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {props.isAdmin !== true ? <input name='UserName' hidden defaultValue={props.Model?.UserName} /> : ''}
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='UserName'
            maxRows={1}
            minRows={1}
            disabled={props.isAdmin !== true}
            onBlur={() => props.onBlur && props.onBlur('UserName')}
            {...getErrorMessage(props.MessageError, 'UserName')}
            inputProps={{ multiline: false, name: 'UserName' }}
            defaultValue={props.Model?.UserName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='Email'
            disabled={props.isAdmin !== true}
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('Email')}
            {...getErrorMessage(props.MessageError, 'Email')}
            inputProps={{ multiline: false, name: 'Email' }}
            defaultValue={props.Model?.Email}
          />
        </Grid>
        {renderDisplayName()}
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='Identity card'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('PersonIdentityCard')}
            {...getErrorMessage(props.MessageError, 'PersonIdentityCard')}
            inputProps={{ multiline: false, name: 'PersonIdentityCard' }}
            defaultValue={props.Model?.PersonIdentityCard}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='Phone number'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('PhoneNumber')}
            {...getErrorMessage(props.MessageError, 'PhoneNumber')}
            inputProps={{ multiline: false, name: 'PhoneNumber' }}
            defaultValue={props.Model?.PhoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {props.isAdmin !== true ? <input name='SigningDate' hidden defaultValue={props.Model?.SigningDate} /> : ''}
          <SubCommon.DatePickers
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='Signing date'
            {...(props.isAdmin !== true ? { disable: true } : { name: 'SigningDate' })}
            inputFormat='MM/dd/yyyy'
            Onchange={() => props.onBlur && props.onBlur('SigningDate')}
            {...getErrorMessage(props.MessageError, 'SigningDate')}
            defaultValue={props.Model?.SigningDate ? new Date(props.Model?.SigningDate) : new Date()}
          />
        </Grid>
        <Grid item xs={12}>
          <SubLocal.InputOutline
            fullWidth
            variant='outlined'
            MaxLength={250}
            Title='Address'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('PersonAddress')}
            {...getErrorMessage(props.MessageError, 'PersonAddress')}
            inputProps={{ multiline: false, name: 'PersonAddress' }}
            defaultValue={props.Model?.PersonAddress}
          />
        </Grid>
        <Grid item xs={12}>
          {props.Actions}
        </Grid>
      </Grid>
    </SubCommon.WrapFrom>
  )
}

interface FormBusinessInfoProps extends UserFormBase {
  Actions?: JSX.Element
}

export const FormBusinessInfo: FC<FormBusinessInfoProps> = (props) => {
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            MaxLength={250}
            Title='Company name'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('CompanyName')}
            {...getErrorMessage(props.MessageError, 'CompanyName')}
            inputProps={{ multiline: false, name: 'CompanyName' }}
            defaultValue={props.Model?.CompanyName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            MaxLength={250}
            Title='Position'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('Position')}
            {...getErrorMessage(props.MessageError, 'Position')}
            inputProps={{ multiline: false, name: 'Position' }}
            defaultValue={props.Model?.Position}
          />
        </Grid>
        <Grid item xs={12}>
          <SubLocal.InputOutline
            MaxLength={500}
            Title='Business address'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('BusinessAddress')}
            {...getErrorMessage(props.MessageError, 'BusinessAddress')}
            inputProps={{ multiline: false, name: 'BusinessAddress' }}
            defaultValue={props.Model?.BusinessAddress}
          />
        </Grid>
        <Grid item xs={12}>
          {props.Actions}
        </Grid>
      </Grid>
    </SubCommon.WrapFrom>
  )
}

interface ITagData {
  Title: string
}

interface FormTagsInfoProps extends UserFormBase {
  Actions?: JSX.Element
  tags?: ITagData[]
}

const Tags = SubCommon.CreateMultipleTags()

export const FormTagsInfo: FC<FormTagsInfoProps> = (props) => {
  const tagData: ITagData[] = props.tags ?? []
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item xs={12}>
          <Tags
            data={tagData.map((option) => option.Title)}
            onBlur={() => props.onBlur && props.onBlur('Tags')}
            {...getErrorMessage(props.MessageError, 'Tags')}
            defaultValue={props.Model?.Tags ? JSON.parse(props.Model?.Tags) : undefined}
            name='Tags'
            title='Tags'
          />
        </Grid>
        <Grid item xs={12}>
          {props.Actions}
        </Grid>
      </Grid>
    </SubCommon.WrapFrom>
  )
}

interface FormPaymentInfoProps extends UserFormBase {
  Actions?: JSX.Element
}

export const FormPaymentInfo: FC<FormPaymentInfoProps> = (props) => {
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            MaxLength={250}
            Title='Account number'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('AccountNumber')}
            {...getErrorMessage(props.MessageError, 'AccountNumber')}
            inputProps={{ multiline: false, name: 'AccountNumber' }}
            defaultValue={props.Model?.AccountNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            MaxLength={250}
            Title='Bank name'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('BankName')}
            {...getErrorMessage(props.MessageError, 'BankName')}
            inputProps={{ multiline: false, name: 'BankName' }}
            defaultValue={props.Model?.BankName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            MaxLength={500}
            Title='IdentityCard'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('IdentityCard')}
            {...getErrorMessage(props.MessageError, 'IdentityCard')}
            inputProps={{ multiline: false, name: 'IdentityCard' }}
            defaultValue={props.Model?.IdentityCard}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubLocal.InputOutline
            MaxLength={500}
            Title='Swift number'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('SwiftNumber')}
            {...getErrorMessage(props.MessageError, 'SwiftNumber')}
            inputProps={{ multiline: false, name: 'SwiftNumber' }}
            defaultValue={props.Model?.SwiftNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <SubLocal.InputOutline
            MaxLength={500}
            Title='Beneficiary name'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('BeneficiaryName')}
            {...getErrorMessage(props.MessageError, 'BeneficiaryName')}
            inputProps={{ multiline: false, name: 'BeneficiaryName' }}
            defaultValue={props.Model?.BeneficiaryName}
          />
        </Grid>
        <Grid item xs={12}>
          <SubLocal.InputOutline
            MaxLength={500}
            Title='Bank address'
            maxRows={1}
            minRows={1}
            onBlur={() => props.onBlur && props.onBlur('BankAddress')}
            {...getErrorMessage(props.MessageError, 'BankAddress')}
            inputProps={{ multiline: false, name: 'BankAddress' }}
            defaultValue={props.Model?.BankAddress}
          />
        </Grid>
        <Grid item xs={12}>
          {props.Actions}
        </Grid>
      </Grid>
    </SubCommon.WrapFrom>
  )
}

interface FormChangePasswordProps extends UserFormBase {
  Actions?: JSX.Element
  IsPassRequired?: boolean
}
export const FormChangePassword: FC<FormChangePasswordProps> = (props) => {
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        {props.IsPassRequired && (
          <Grid item xs={12}>
            <SubLocal.InputOutlinePassword
              MaxLength={100}
              Title='Current password'
              onBlur={() => props.onBlur && props.onBlur('CurrentPassword')}
              {...getErrorMessage(props.MessageError, 'CurrentPassword')}
              inputProps={{ name: 'CurrentPassword' }}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <SubLocal.InputOutlinePassword
            MaxLength={100}
            Title='New password'
            onBlur={() => props.onBlur && props.onBlur('NewPassword')}
            {...getErrorMessage(props.MessageError, 'NewPassword')}
            inputProps={{ name: 'NewPassword' }}
          />
        </Grid>
        <Grid item xs={12}>
          <SubLocal.InputOutlinePassword
            MaxLength={100}
            Title='Confirm password'
            onBlur={() => props.onBlur && props.onBlur('ConfirmPassword')}
            {...getErrorMessage(props.MessageError, 'ConfirmPassword')}
            inputProps={{ name: 'ConfirmPassword' }}
          />
        </Grid>
        <Grid item xs={12}>
          {props.Actions}
        </Grid>
      </Grid>
    </SubCommon.WrapFrom>
  )
}

interface SocialInfoProps {
  data?: IUser
  EditService?: (data: Partial<IContactInfo>, signal: AbortSignal) => Promise<IContactInfo>
  AllowEdit?: boolean
}

const UserContact = {
  WebSite: { icon: <GlobeIcon sx={{ color: 'rgb(255, 193, 7)' }} /> },
  GitHub: { icon: <GithubIcon sx={{ color: '#333333' }} /> },
  Twitter: { icon: <TwitterIcon sx={{ color: '#55acee' }} /> },
  Instagram: { icon: <InstagramIcon sx={{ color: '#ac2bac' }} /> },
  Facebook: { icon: <FacebookIcon sx={{ color: '#3b5998' }} /> }
}

const FormValidate = new FormValidator<Partial<IContactInfo>>({
  Name: { Rules: [{ rule: SingleRuleValidate.Required }] },
  Link: { Rules: [{ rule: SingleRuleValidate.Required }] }
})

export const SocialInfo: FC<SocialInfoProps> = (props) => {
  const [state, setState] = useState<{
    dataModal?: IContactInfo
    IsLazy: boolean
  }>({ IsLazy: false })
  const _onItemClick = useCallback((Platform: string, user: IContactInfo) => {
    setState((st) => ({ ...st, dataModal: { ...user, Platform } }))
  }, [])
  const _renderSocialItem = useCallback(
    (data: any) => {
      return Object.keys(UserContact).map((key) => {
        const contact = (data[key] as IContactInfo) ?? { Platform: key, Name: key }
        return (
          <ReactTrap.ListGroupItem key={key} className='item-social d-flex justify-content-between align-items-center p-3 position-relative'>
            {(UserContact as any)[key].icon}
            {contact.Link ? (
              <Link className='mb-0' href={contact.Link} target='_blank'>
                {contact.Name}
              </Link>
            ) : (
              <Typography>{contact.Name}</Typography>
            )}
            {props.AllowEdit && (
              <Box className='position-absolute btn-edit'>
                <IconButton onClick={() => _onItemClick(key, contact)}>
                  <Edit color='info' />
                </IconButton>
              </Box>
            )}
          </ReactTrap.ListGroupItem>
        )
      })
    },
    [_onItemClick]
  )
  const controller = useRef(new AbortController())
  const _onSubmit = useCallback(
    async (user: Partial<IContactInfo>) => {
      if (!props.EditService) return
      setState((st) => ({ ...st, IsLazy: true }))
      try {
        user.UserId = props.data?.Id
        user.Platform = state.dataModal?.Platform
        await props.EditService(user, controller.current.signal)
        setState((st) => ({ ...st, IsLazy: false, dataModal: undefined }))
        ApiAlertContext.ApiAlert?.PushSuccess('Successfully edited!')
      } catch (error) {
        ApiAlertContext.ApiAlert?.PushError('edit failed!')
        setState((st) => ({ IsLazy: false, dataModal: undefined }))
      }
    },
    [props, state]
  )
  const _closeModal = useCallback(() => {
    setState((st) => ({ ...st, dataModal: undefined }))
  }, [])
  return (
    <ReactTrap.Card className='mb-4 mb-lg-0 position-relative'>
      <ReactTrap.CardBody className='p-0'>
        <ReactTrap.ListGroup flush className='rounded-3'>
          {_renderSocialItem(props.data?.ContactInfoMap ?? {})}
          {props.data?.AutoPassword ? (
            <ReactTrap.ListGroupItem className='d-flex justify-content-between align-items-center p-3'>
              <KeyIcon color='warning' />
              <strong className='mb-0'>{props.data?.AutoPassword}</strong>
              <CopyToClipboard>
                {({ copy }) => (
                  <IconButton onClick={() => copy(props.data?.AutoPassword)}>
                    <CopyAll />
                  </IconButton>
                )}
              </CopyToClipboard>
            </ReactTrap.ListGroupItem>
          ) : (
            <div></div>
          )}
        </ReactTrap.ListGroup>
      </ReactTrap.CardBody>
      <SubCommon.OverlayView open={!!state.dataModal}>
        <SubCommon.LazyView IsLazy={state.IsLazy} sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <InputFormBase key={new Date().getTime()} FormValidate={FormValidate} onSubmit={_onSubmit}>
            <InputFormContext.Consumer>
              {({ onBlur, MessageError }) => (
                <ContactInfoForm
                  onClose={_closeModal}
                  onBlur={onBlur}
                  Model={state.dataModal}
                  IsForm={false}
                  key={state.dataModal?.Id}
                  MessageError={MessageError}
                />
              )}
            </InputFormContext.Consumer>
          </InputFormBase>
        </SubCommon.LazyView>
      </SubCommon.OverlayView>
    </ReactTrap.Card>
  )
}

interface IAccountPermissionProps extends UserFormBase {
  Actions?: JSX.Element
}

export class AccountPermission extends Component<IAccountPermissionProps> {
  get MapCheck() {
    return new Set(this.props.Model?.Roles ?? [])
  }

  render() {
    const internalRoles = Object.values(RoleKeyInternalSite)
    const externalRoles = Object.values(RoleKeyExternalSite)
    return (
      <SubCommon.WrapFrom Id={this.props.IdForm} onSubmit={this.props.onSubmit} IsForm={this.props.IsForm}>
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant='caption' sx={{ fontWeight: 'bold' }}>
              Admin site (Internal)
            </Typography>
            <Stack sx={{ ml: '3px' }}>{this.renderContent(internalRoles)}</Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='caption' sx={{ fontWeight: 'bold' }}>
              Client site (Extenal)
            </Typography>
            <Stack sx={{ ml: '3px' }}>{this.renderContent(externalRoles)}</Stack>
          </Grid>
          <Grid item xs={12}>
            {this.props.Actions}
          </Grid>
        </Grid>
      </SubCommon.WrapFrom>
    )
  }

  renderContent = (roles: RoleKeyInternalSite[] | RoleKeyExternalSite[]) => {
    return roles.map((role) => (
      <FormControlLabel key={role} control={<Checkbox defaultChecked={this.MapCheck.has(role)} name='Roles' value={role} />} label={role} />
    ))
  }
}

interface IUserCreatorProps extends UserFormBase {
  Actions?: JSX.Element
  fetchData: (value?: string, signal?: AbortSignal) => Promise<ISelectModel[]>
}

const SelectUser = SubCommon.CreateSelect2<ISelectModel>()

export const UserCreator: FC<IUserCreatorProps> = (props) => {
  return (
    <SubCommon.WrapFrom Id={props.IdForm} onSubmit={props.onSubmit} IsForm={props.IsForm}>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item xs={12}>
          <FormGroup className='group-input'>
            <input hidden defaultValue={props.Model?.Id} name='Id' />
            <SelectUser
              title='UserCreator'
              fetchData={props.fetchData}
              SelectValue={(m) => m.Id}
              GenerateLabel={(m) => m.Name}
              selectedItem={{ Id: '', Name: '' }}
              isOptionEqualToValue={(m1, m2) => m1.Id === m2.Id}
              defaultValue={props.Model?.UserCreatorId}
              searchInitial={(model) => props.Model?.UserCreatorId === model.Id}
              {...getErrorMessage(props.MessageError, 'UserCreatorId')}
              onBlur={() => props.onBlur && props.onBlur('UserCreatorId')}
              name='UserCreatorId'
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          {props.Actions}
        </Grid>
      </Grid>
    </SubCommon.WrapFrom>
  )
}
