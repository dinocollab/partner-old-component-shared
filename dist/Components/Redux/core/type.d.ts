import { EntityState } from "@reduxjs/toolkit";
export declare enum LazyStatus {
    Loading = "Loading",
    Loaded = "Loaded",
    Error = "Error"
}
export interface ISliceBase<TModel> {
    Status: LazyStatus;
    RequestId?: string;
    data: EntityState<TModel>;
}
