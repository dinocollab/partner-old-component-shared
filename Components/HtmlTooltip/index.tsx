import React from 'react'
import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
    [`& .${tooltipClasses.arrow}:before`]: {
        color: '#f5f5f9',
        border: '1px solid #dadde9',
    }
}));