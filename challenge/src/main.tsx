import React from "react"
import ReactDOM from "react-dom/client"

// Components
import App from "./App.tsx"
import { Layout } from "./components/Layout/index.tsx"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
)
