import { Component } from 'react';
type TLoadingType = 'square';
interface IProps {
    variant: TLoadingType;
}
export declare class LoadingAnimation extends Component<IProps> {
    render(): JSX.Element;
}
export default LoadingAnimation;
