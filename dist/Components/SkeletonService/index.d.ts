import React, { ComponentType, FC } from 'react';
interface IOption<IData> {
    action: (param?: any, abort?: AbortSignal) => Promise<IData | undefined>;
}
export interface IParamSkeleton {
    param?: any;
    extract?: any;
    onResult?: (data?: any) => void;
}
export declare const SkeletonServiceCreate: <Tprop, IData>(option: IOption<IData>) => (WrappedComponent: React.ComponentType<Tprop>) => React.FunctionComponent<Omit<Tprop & IParamSkeleton, "data" | "IsLoading">>;
interface IRoleViewProps {
    Role: string[];
}
export declare const RoleView: FC<IRoleViewProps>;
export {};
