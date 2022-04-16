import { StrictMode } from "react"
import { ThemeProvider } from "@mui/material/styles"
import { createRoot } from "react-dom/client"
import theme from "./theme"

import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
