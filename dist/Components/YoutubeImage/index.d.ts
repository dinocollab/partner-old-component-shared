import React, { Component } from 'react';
interface IYoutubeImageProps {
    imgProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    ContentId: string;
}
interface IYoutubeImageState {
    image: string;
}
export default class YoutubeImage extends Component<IYoutubeImageProps, IYoutubeImageState> {
    constructor(props: IYoutubeImageProps);
    ApiKey: string | undefined;
    componentDidMount: () => void;
    render(): JSX.Element;
}
export interface ResponseImage {
    items: Item[];
}
export interface Item {
    id: string;
    snippet: Snippet;
}
export interface Snippet {
    thumbnails: Thumbnails;
}
export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
}
export interface Default {
    url: string;
    width: number;
    height: number;
}
export interface Medium {
    url: string;
    width: number;
    height: number;
}
export interface High {
    url: string;
    width: number;
    height: number;
}
export {};
