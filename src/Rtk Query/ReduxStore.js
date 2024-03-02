import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./RtkQuery";

const store = configureStore({
  reducer: {
    api: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export default store;
