import { NoInfer } from "@react-spring/types";
import { ActionReducerMapBuilder, AsyncThunk, EntityAdapter, IdSelector, PayloadAction, Update } from "@reduxjs/toolkit";
import { ISliceBase } from "./type";
export declare const CreateCRUDSlice: <TModel, TSliceState extends ISliceBase<TModel> = ISliceBase<TModel>>(name: string, selectId?: IdSelector<TModel> | undefined, Initial?: (state: ISliceBase<TModel>) => TSliceState, extraReducers?: ((builder: ActionReducerMapBuilder<NoInfer<TSliceState>>, adapter: EntityAdapter<TModel>) => void) | undefined) => import("@reduxjs/toolkit").Slice<TSliceState, {
    Update: (state: import("@reduxjs/toolkit").Draft<TSliceState>, action: {
        payload: Update<TModel>;
        type: string;
    }) => void;
    Add: (state: import("@reduxjs/toolkit").Draft<TSliceState>, action: {
        payload: TModel;
        type: string;
    }) => void;
    Remove: (state: import("@reduxjs/toolkit").Draft<TSliceState>, action: PayloadAction<string>) => void;
    RemoveAll: (state: import("@reduxjs/toolkit").Draft<TSliceState>) => void;
    UpsetMany: (state: import("@reduxjs/toolkit").Draft<TSliceState>, action: {
        payload: TModel[];
        type: string;
    }) => void;
}, string>;
export declare const buildThunkDefault: <TModel>(builder: ActionReducerMapBuilder<ISliceBase<TModel>>, SliceAdapter: EntityAdapter<TModel>, fetchThunk: AsyncThunk<TModel[], any, any>) => void;
