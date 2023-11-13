import React, { Component, FC } from 'react'
import { Box, Button, Typography } from '@mui/material';
interface IChannelImageProps {
    Id: string
    Thumb?: string
}
export const ChannelImage: FC<IChannelImageProps> = (props) => {
    return <img src={props.Thumb ? props.Thumb : `/api/user/v2/YoutubeReport/ChannelAvatar?Id=${props.Id}`}
        style={{ width: "30px", marginRight: "10px", borderRadius: '50%' }} />
}
interface IVideoImageProps {
    Id: string
    Thumb?: string
}
export const VideoImage: FC<IVideoImageProps> = (props) => {
    return <img src={props.Thumb ? props.Thumb : `/api/user/v2/YoutubeReport/VideoThumb?Id=${props.Id}`}
        style={{ width: "50px", marginRight: "10px", borderRadius: "5px" }} />
}

interface TitleProps {
    Id: string,
    type: "Channel" | "Video"
    Thumb?: string
}

export const RowTitle: FC<TitleProps> = (props) => {
    const getUrl = () => {
        return props.type === "Channel" ? `https://youtube.com/channel/${props.Id}` : `https://youtu.be/${props.Id}`
    }
    return <Box component={'a'} target={'_blank'} href={getUrl()} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        {props.type === "Channel" ? <ChannelImage Thumb={props.Thumb} Id={props.Id} /> : <VideoImage Thumb={props.Thumb} Id={props.Id} />}
        <Typography variant='subtitle2' noWrap sx={{ maxWidth: '250px' }}>{props.children}</Typography>
    </Box>
}