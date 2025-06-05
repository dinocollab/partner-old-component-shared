import { FC } from 'react';
interface IChannelImageProps {
    Id: string;
    Thumb?: string;
}
export declare const ChannelImage: FC<IChannelImageProps>;
interface IVideoImageProps {
    Id: string;
    Thumb?: string;
}
export declare const VideoImage: FC<IVideoImageProps>;
interface TitleProps {
    Id: string;
    type: "Channel" | "Video";
    Thumb?: string;
}
export declare const RowTitle: FC<TitleProps>;
export {};
