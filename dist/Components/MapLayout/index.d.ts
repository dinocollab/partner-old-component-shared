import { SxProps, Theme } from '@mui/material';
import React, { Component } from 'react';
import './index.css';
interface MapLayoutProps {
    sx?: SxProps<Theme>;
}
interface ILayoutBase {
    width: number;
    height: number;
}
interface ILayout extends ILayoutBase {
    widthScroll: number;
    heightScroll: number;
}
interface IMapLayoutContext {
    layout: ILayout;
    window: ILayoutBase;
}
interface MapLayoutState {
    layout: ILayout;
    window: ILayoutBase;
}
export declare const MapLayoutContext: React.Context<IMapLayoutContext>;
declare class MapLayout extends Component<MapLayoutProps, MapLayoutState> {
    constructor(props: MapLayoutProps);
    mapState: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getConfig: () => IMapLayoutContext;
    refContainer: HTMLDivElement | null;
    render(): JSX.Element;
}
export default MapLayout;
