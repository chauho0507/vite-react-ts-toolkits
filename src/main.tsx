import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import App from "./App"
import { ConfigProvider } from "antd"
import "./index.css"
import { BrowserRouter, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1069C1",
              colorPrimaryHover: "#0C5092",
              colorError: "#D11E00",
              // colorErrorHover: 'TBD',

              colorLink: "#1069C1",
              colorLinkHover: "#083663",
              controlHeight: 36,

              controlItemBgHover: "#E4F1FD",

              colorBorder: "#E9E9E6",
              borderRadius: 4,

              fontFamily: "Noto Sans JP",
            },
            components: {
              Button: {
                fontSize: 14,
                fontWeight: 700,
              },
              Select: {
                optionSelectedBg: "#E4F1FD",
              },
              Table: {
                rowHoverBg: "unset",
              },
            },
          }}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </ConfigProvider>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
