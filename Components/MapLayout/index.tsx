import { Box, SxProps, Theme } from '@mui/material'
import React, { Component, ComponentType } from 'react'
import './index.css'
interface MapLayoutProps {
    sx?: SxProps<Theme>
}
interface ILayoutBase {
    width: number
    height: number
}
interface ILayout extends ILayoutBase {
    widthScroll: number
    heightScroll: number
}

interface IMapLayoutContext {
    layout: ILayout
    window: ILayoutBase
}

interface MapLayoutState {
    layout: ILayout
    window: ILayoutBase
}
export const MapLayoutContext = React.createContext<IMapLayoutContext>({} as any);
class MapLayout extends Component<MapLayoutProps, MapLayoutState> {
    constructor(props: MapLayoutProps) {
        super(props)
        this.state = {
            layout: {
                height: 0,
                width: 0,
                heightScroll: 0,
                widthScroll: 0
            },
            window: {
                height: window.innerHeight,
                width: window.innerWidth,
            }
        }
    }
    mapState = () => {
        this.setState({
            layout: {
                height: this.refContainer?.clientHeight ?? 0,
                width: this.refContainer?.clientWidth ?? 0,
                heightScroll: this.refContainer?.scrollHeight ?? 0,
                widthScroll: this.refContainer?.scrollWidth ?? 0
            },
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        })
    }
    componentDidMount() {
        this.mapState()
        window.addEventListener("resize", this.mapState)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.mapState)
    }
    getConfig = (): IMapLayoutContext => {
        return {
            layout: this.state.layout,
            window: this.state.window
        }
    }
    refContainer: HTMLDivElement | null = null
    render() {
        return (
            <Box component={"div"} ref={ref => this.refContainer = ref as any} sx={this.props.sx}>
                <MapLayoutContext.Provider value={this.getConfig()}>
                    {this.props.children}
                </MapLayoutContext.Provider>
            </Box>
        )
    }
}
export default MapLayout