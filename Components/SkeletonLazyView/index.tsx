import { Box, BoxProps, Skeleton, SkeletonPropsVariantOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import React, { FC, } from 'react'

interface ItemWrapProps extends BoxProps {
    IsLoading: boolean
    variant?: OverridableStringUnion<
        'text' | 'rectangular' | 'circular',
        SkeletonPropsVariantOverrides
    >;
}


export const SkeletonLazyWrap: FC<ItemWrapProps> = React.forwardRef((props, ref) => {
    const { IsLoading, ...other } = props
    return <Box ref={ref} {...other} sx={IsLoading ? {
        position: 'relative', ...(props.sx || {}),
    } : props.sx}>
        {props.children}
        {IsLoading ? <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            background: 'white',
            top: 0,
            left: 0
        }} >
            <Skeleton variant={props.variant ?? "rectangular"} animation="wave" height={"100%"} width={"100%"} />
        </Box> : ''}
    </Box>
})