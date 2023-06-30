import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./store";
import { ColorModeContextProvider } from "./UIConfig/ThemeConfigProvider";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ColorModeContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ColorModeContextProvider>
);
