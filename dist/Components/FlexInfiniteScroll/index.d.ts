import { SxProps, Theme } from '@mui/material';
import React, { Component } from 'react';
export type TActionLoadMore = (sender: FlexInfiniteScroll) => void;
interface FlexInfiniteScrollProps {
    ContainerSx?: SxProps<Theme>;
    ContentSx?: SxProps<Theme>;
    onLoadMore?: TActionLoadMore;
    lock?: boolean;
    loading?: boolean;
}
interface FlexInfiniteScrollState {
    lock: boolean;
    loading: boolean;
}
export default class FlexInfiniteScroll extends Component<FlexInfiniteScrollProps, FlexInfiniteScrollState> {
    constructor(props: FlexInfiniteScrollProps);
    loadMore: () => void;
    lock: () => void;
    getHeightItem: () => number;
    isLoading: () => boolean;
    isPinShow: () => boolean;
    onScroll: React.UIEventHandler<HTMLDivElement>;
    refScrollView: HTMLDivElement | null;
    render(): JSX.Element;
}
export {};
