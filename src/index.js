import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ruRU } from "@material-ui/core/locale";

import App from "./App";
import store from "./redux/store";

const theme = createMuiTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  ruRU
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
