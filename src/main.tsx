import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "@redux/store"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App"
import { darkTheme } from "./themes"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
