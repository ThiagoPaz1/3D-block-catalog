// Types
import { CardFamilyProps } from "./types"

// Styles and images
import arrowOutImg from "../../assets/arrowOut.svg"
import barImg from "../../assets/bar.svg"
import {
    ContainerCardFamily,
    ContainerImgs,
    BarImg,
    ArrowOutImg,
    Block3DImg
  } from "./styles/styles"

export function CardFamily({
  name,
  image
}: CardFamilyProps) {
  return (
    <ContainerCardFamily>
      <Block3DImg src={image} alt="Imagem do bloco 3D" />
      <div>
        <h3>
          {name}
        </h3>

        <ContainerImgs>
          <BarImg src={barImg} alt="Ícone de barra vertical" />
          <ArrowOutImg src={arrowOutImg} alt="Ícone de seta" />
        </ContainerImgs>
      </div>
    </ContainerCardFamily>
  )
}