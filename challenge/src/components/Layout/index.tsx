// Components
import { Header } from "./Header"
import { Footer } from "./Footer"

// Types
import { LayoutProps } from "./types"

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}