import { configureStore } from "@reduxjs/toolkit";
import  dashboardSlice  from "./slices/dashboard";

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
});
