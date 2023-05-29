// Components
import { Header } from "./Header"
import { Footer } from "./Footer"

// Types
import { LayoutProps } from "./types"

// Styles and images
import { ContainerLayout } from "./styles/styles"

export function Layout({ children }: LayoutProps) {
  return (
    <ContainerLayout>
      <Header />
      { children }
      <Footer />
    </ContainerLayout>
  )
}