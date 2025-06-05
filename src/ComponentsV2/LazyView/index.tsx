import React, { FC } from 'react'
import { Box, Fade, LinearProgress, SxProps, Theme, styled } from '@mui/material'

interface IProps {
  in?: boolean
}
export const LazyView: FC<IProps> = (props) => {
  return (
    <>
      {props.children}
      <Fade in={props.in} unmountOnExit timeout={{ enter: 0, exit: 350 }}>
        <Wrapper>
          <LinearProgress />
        </Wrapper>
      </Fade>
    </>
  )
}

const Wrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.11)',
  zIndex: 1250,
})
