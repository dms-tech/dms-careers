import { configureStore, Action } from "@reduxjs/toolkit";
import jobsSlice from "../features/jobs/jobsSlice";
import { ThunkAction } from "redux-thunk";

const store = configureStore({
  reducer: { jobsSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
