import { NoInfer } from "@react-spring/types";
import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityAdapter,
  EntityState,
  IdSelector,
  PayloadAction,
  Update,
} from "@reduxjs/toolkit";
import { ISliceBase, LazyStatus } from "./type";
export const CreateCRUDSlice = <
  TModel,
  TSliceState extends ISliceBase<TModel> = ISliceBase<TModel>
>(
  name: string,
  selectId?: IdSelector<TModel>,
  Initial: (state: ISliceBase<TModel>) => TSliceState = (s) => s as TSliceState,
  extraReducers?: (
    builder: ActionReducerMapBuilder<NoInfer<TSliceState>>,
    adapter: EntityAdapter<TModel>
  ) => void
) => {
  const SliceAdapter = createEntityAdapter<TModel>({
    selectId,
  });
  // Define the initial state using that type
  const initialState: TSliceState = Initial({
    Status: LazyStatus.Loading,
    data: SliceAdapter.getInitialState(),
  });

  const ModelSlice = createSlice({
    name,
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      Update: (state, action: PayloadAction<Update<TModel>>) => {
        SliceAdapter.updateOne(
          state.data as EntityState<TModel>,
          action.payload
        );
      },
      Add: (state, action: PayloadAction<TModel>) => {
        SliceAdapter.addOne(state.data as EntityState<TModel>, action.payload);
      },
      Remove: (state, action: PayloadAction<string>) => {
        SliceAdapter.removeOne(
          state.data as EntityState<TModel>,
          action.payload
        );
      },
      RemoveAll: (state) => {
        SliceAdapter.removeAll(state.data as EntityState<TModel>);
      },
      UpsetMany: (state, action: PayloadAction<TModel[]>) => {
        SliceAdapter.removeAll(state.data as EntityState<TModel>);
        SliceAdapter.upsertMany(
          state.data as EntityState<TModel>,
          action.payload
        );
      },
    },
    extraReducers: (builder) =>
      extraReducers && extraReducers(builder, SliceAdapter),
  });
  return ModelSlice;
};

export const buildThunkDefault = <TModel>(
  builder: ActionReducerMapBuilder<NoInfer<ISliceBase<TModel>>>,
  SliceAdapter: EntityAdapter<TModel>,
  fetchThunk: AsyncThunk<TModel[], any, any>
) => {
  builder
    .addCase(fetchThunk.fulfilled, (state, action) => {
      if(state.RequestId !== action.meta.requestId ) return
      state.Status = LazyStatus.Loaded;
      
      SliceAdapter.removeAll(state.data as EntityState<TModel>);
      SliceAdapter.upsertMany(state.data as EntityState<TModel>, action);
    })
    .addCase(fetchThunk.rejected, (state, action) => {
      if(state.RequestId === action.meta.requestId ){
        state.Status = LazyStatus.Error;
      }
    })
    .addCase(fetchThunk.pending, (state, action) => {
      state.Status = LazyStatus.Loading;
      state.RequestId = action.meta.requestId
    });
};
