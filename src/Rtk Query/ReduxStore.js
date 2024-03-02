import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./RtkQuery";

// Store to get Api data
const store = configureStore({
  reducer: {
    api: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export default store;
