import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./store";
import { ColorModeContextProvider } from "./UIConfig/ThemeConfigProvider";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ColorModeContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </Provider>
    </BrowserRouter>
  </ColorModeContextProvider>
);
