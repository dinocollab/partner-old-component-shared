import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LazyStatus } from './type.js';

var CreateCRUDSlice = function CreateCRUDSlice(name, selectId) {
  var Initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (s) {
    return s;
  };
  var _extraReducers = arguments.length > 3 ? arguments[3] : undefined;
  var SliceAdapter = createEntityAdapter({
    selectId: selectId
  });
  // Define the initial state using that type
  var initialState = Initial({
    Status: LazyStatus.Loading,
    data: SliceAdapter.getInitialState()
  });
  var ModelSlice = createSlice({
    name: name,
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initialState,
    reducers: {
      Update: function Update(state, action) {
        SliceAdapter.updateOne(state.data, action.payload);
      },
      Add: function Add(state, action) {
        SliceAdapter.addOne(state.data, action.payload);
      },
      Remove: function Remove(state, action) {
        SliceAdapter.removeOne(state.data, action.payload);
      },
      RemoveAll: function RemoveAll(state) {
        SliceAdapter.removeAll(state.data);
      },
      UpsetMany: function UpsetMany(state, action) {
        SliceAdapter.removeAll(state.data);
        SliceAdapter.upsertMany(state.data, action.payload);
      }
    },
    extraReducers: function extraReducers(builder) {
      return _extraReducers && _extraReducers(builder, SliceAdapter);
    }
  });
  return ModelSlice;
};
var buildThunkDefault = function buildThunkDefault(builder, SliceAdapter, fetchThunk) {
  builder.addCase(fetchThunk.fulfilled, function (state, action) {
    if (state.RequestId !== action.meta.requestId) return;
    state.Status = LazyStatus.Loaded;
    SliceAdapter.removeAll(state.data);
    SliceAdapter.upsertMany(state.data, action);
  }).addCase(fetchThunk.rejected, function (state, action) {
    if (state.RequestId === action.meta.requestId) {
      state.Status = LazyStatus.Error;
    }
  }).addCase(fetchThunk.pending, function (state, action) {
    state.Status = LazyStatus.Loading;
    state.RequestId = action.meta.requestId;
  });
};

export { CreateCRUDSlice, buildThunkDefault };
//# sourceMappingURL=CRUDSlice.js.map
