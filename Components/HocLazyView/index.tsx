import React, { Component, ComponentType } from 'react'
import { LazyStatus } from '../Redux/core/type';
import { LazyView } from '../SubComponent';

interface IHocComponentState<TData = any> {
    status: LazyStatus
    data: TData | null
}
interface IHocComponentProps<TActionParam = any> {
    params?: TActionParam;
}
interface OptionsHocLazy<TActionParam = any, TData = any> {
    params?: TActionParam;
    FetchData: (params?: TActionParam, signal?: AbortSignal) => Promise<TData>
}
export interface IHocLazyViewWrappedProps<TActionParam = any, TData = any> {
    data: any | null
    FetchData: (params?: TActionParam, signal?: AbortController) => Promise<TData>
    SetData: (data: TData) => void
}
const HocLazyView = (options: OptionsHocLazy) => (WrappedComponent: ComponentType<IHocLazyViewWrappedProps>) => {

    class hocComponent extends Component<IHocComponentProps, IHocComponentState> {
        constructor(props: IHocComponentProps) {
            super(props)
            this.state = {
                status: LazyStatus.Loading,
                data: null
            }
            this.FetchData = this.FetchData.bind(this)
        }
        SwitchView = (status: LazyStatus) => {
            switch (status) {
                case LazyStatus.Loading:
                case LazyStatus.Loaded:
                    return (
                        <LazyView IsLazy={status === LazyStatus.Loading} sx={{
                            flex: 1, display: 'flex', flexDirection: 'column',
                        }}>
                            <WrappedComponent
                                {...this.props} data={this.state.data}
                                FetchData={this.FetchData}
                                SetData={this.SetData}
                            />
                        </LazyView>
                    )
                default:
                    return <div>Error...</div>;
            }
        }
        SetData = (data: any) => {
            this.setState({
                data
            })
        }
        componentDidMount = async () => {
            const param = Object.assign(
                {},
                options?.params ?? {},
                this.props.params ?? {},
            );
            this.TokenSources = new AbortController()
            await this.FetchData(param)
        };
        FetchData = async (params: any, controller?: AbortController) => {
            try {
                controller?.abort && this.TokenSources?.signal.addEventListener("abort", controller?.abort)
                const signal = controller ? controller.signal : this.TokenSources?.signal
                const data = await options.FetchData(params, signal)
                this.setState({
                    status: LazyStatus.Loaded,
                    data
                })
            } catch {
                this.setState({
                    status: LazyStatus.Error,
                })
            } finally {
                controller?.abort && this.TokenSources?.signal.removeEventListener("abort", controller?.abort)
            }
        }
        TokenSources?: AbortController
        componentWillUnmount() {
            console.log("componentWillUnmount")
            this.TokenSources?.abort()
        }
        public render() {
            return this.SwitchView(this.state.status)
        }
    }
    return hocComponent
}
export default HocLazyView