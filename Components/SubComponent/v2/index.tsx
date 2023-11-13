import React, { FC } from 'react'
import { Box, SxProps, Theme, Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import * as SubLocal from 'local-lib/src/SubComponents/entry'
import { getErrorMessage } from '../../Helper'
import { PartialError } from 'local-lib/src/helper/ValidateModel'

interface ErrorAllProps {
  MessageError?: PartialError<any>
}
export const ErrorAll: FC<ErrorAllProps> = (props) => {
  return (
    <SubLocal.ErrorBox position={'Top'} {...getErrorMessage(props.MessageError, 'All')}>
      {props.children}
    </SubLocal.ErrorBox>
  )
}

interface BoxInfoProps {
  title: string
  mb?: boolean
  icon?: JSX.Element
  MessageError?: PartialError<any> | any
  TitleExtends?: JSX.Element
  sx?: SxProps<Theme>
  variant?: Variant
  IsBorder?: boolean
}
export const BoxInfo: FC<BoxInfoProps> = (props) => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: '10px',
        marginBottom: props.mb === false ? '0' : '20px',
        ...(props.sx || {}),
      }}
      className={props.IsBorder === false ? '' : 'card'}
    >
      <ErrorAll MessageError={props.MessageError}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ margin: 1 }}>{props.icon}</Box>
            <Typography variant={props.variant || 'h5'} component="div">
              {props.title}
            </Typography>
          </Box>
          <Box sx={{marginTop: '-30px'}}>{props.TitleExtends ?? ''}</Box>
        </Box>
        {props.children}
      </ErrorAll>
    </Box>
  )
}
