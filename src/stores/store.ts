import { configureStore } from "@reduxjs/toolkit";

//app functionality
import navMenuFunctions from "./appFunctionality/navMenuFunctions";
import snackBar from "./appFunctionality/snackbar";
import networkStatus from "./appFunctionality/networkError";
import pageProperties from "./appFunctionality/pageProperties";
//app functionality

export const adminStore = () => {
  return configureStore({
    reducer: {
      //app functionality
      pageProperties: pageProperties,
      menuFunctions: navMenuFunctions,
      snackbar: snackBar,
      networkStatus: networkStatus,
    },
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof adminStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
