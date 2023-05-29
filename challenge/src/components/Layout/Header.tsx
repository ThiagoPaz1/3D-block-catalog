// Styles and images
import logoImg from "../../assets/logo.svg"
import { ContainerHeader } from "./styles/styles"

export function Header() {
  return (
    <ContainerHeader>
      <img src={logoImg} alt="Logo" />
    </ContainerHeader>
  )
}