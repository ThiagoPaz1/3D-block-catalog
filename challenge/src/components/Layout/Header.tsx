// Hooks and contexts
import { useScreenWidth } from "../../hooks/useScreenWidth"

// Styles and images
import logoImg from "../../assets/logo.svg"
import { ContainerHeader } from "./styles/styles"

export function Header() {
  const { screenWidth } = useScreenWidth()
  console.log("Screen width =>>", screenWidth)
  return (
    <ContainerHeader>
      <img src={logoImg} alt="Logo" />
    </ContainerHeader>
  )
}