import { Box, SxProps, Theme } from '@mui/material'
import React, { Component } from 'react'
import LazySpinner from '../../../ClientAdmin/src/Redux/HocLazy/LazySpinner'


export type TActionLoadMore = (sender: FlexInfiniteScroll) => void
interface FlexInfiniteScrollProps {
    ContainerSx?: SxProps<Theme>
    ContentSx?: SxProps<Theme>
    onLoadMore?: TActionLoadMore
    lock?: boolean
    loading?: boolean
}
interface FlexInfiniteScrollState {
    lock: boolean
    loading: boolean
}
export default class FlexInfiniteScroll extends Component<FlexInfiniteScrollProps, FlexInfiniteScrollState> {
    constructor(props: FlexInfiniteScrollProps) {
        super(props)
        this.state = {
            loading: props.loading || false,
            lock: props.lock || !props.onLoadMore
        }
    }
    loadMore = () => {
        if (!this.props.onLoadMore) return
        this.props.onLoadMore(this)
    }
    lock = () => {
        this.setState({ lock: true })
    }
    getHeightItem = () => 340
    isLoading = () => this.props.loading || this.props.lock || this.state.loading || this.state.lock
    isPinShow = () => (this.props.loading || this.state.loading) && (!this.state.lock || !this.props.lock)
    onScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
        if (this.isLoading()) return;
        const scrollHeight = this.refScrollView?.scrollHeight ?? 0
        const height = this.refScrollView?.offsetHeight ?? 0
        const position = this.refScrollView?.scrollTop ?? 0
        if (scrollHeight - position - height < this.getHeightItem() * 3) {
            this.loadMore()
        }
    }
    refScrollView: HTMLDivElement | null = null
    render() {
        return (
            <Box
                sx={{ display: 'flex', flex: 1, overflowY: "auto", ...(this.props.ContainerSx || {}) }}
                component={'div'}
                ref={ref => this.refScrollView = ref as HTMLDivElement}
                className="flex-infinite-scroll"
                onScroll={this.onScroll}
            >
                <Box sx={{ height: 0, ...(this.props.ContentSx || {}) }}>
                    {this.props.children}
                    {this.isPinShow() ?
                        <Box sx={{ width: '100%', margin: "10px 0" }}>
                            <LazySpinner />
                        </Box>
                        : ''
                    }
                </Box>
            </Box>
        )
    }
}
