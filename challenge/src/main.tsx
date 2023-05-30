import React from "react"
import ReactDOM from "react-dom/client"

// Components
import App from "./App.tsx"

// Styles and images
import { GlobalStyle } from "./styles/global.ts"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
)
