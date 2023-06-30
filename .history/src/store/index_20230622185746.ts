import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmAPI } from "./services/FilmService";
import { api, api2 } from "./services";
import { ImageAPI } from "./services/ImageService";

const rootReducer = combineReducers({
  [filmAPI.reducerPath]: filmAPI.reducer,
  [ImageAPI.reducerPath]: ImageAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(api.middleware, api2.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
