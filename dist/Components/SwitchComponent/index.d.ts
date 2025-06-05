import React, { Component, ComponentType } from 'react';
import { RoleKeyExternalSite, RoleKeyInternalSite } from '../Helper/RoleKey';
type RoleKey = RoleKeyExternalSite | RoleKeyInternalSite;
type MapComponent = {
    [key in RoleKey]?: ComponentType<any> | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
};
interface SwitchComponentProps {
    MapComponent: MapComponent;
}
interface SwitchComponentState {
    roles: string[];
}
export default class SwitchComponent extends Component<SwitchComponentProps, SwitchComponentState> {
    constructor(props: any);
    _isMounted: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getComponent: () => React.ComponentType<any> | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | undefined;
    render: () => JSX.Element;
}
export {};
