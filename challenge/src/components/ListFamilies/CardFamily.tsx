// Types
import { CardFamilyProps } from "./types"

// Styles and images
import arrowOutImg from "../../assets/arrowOut.svg"
import barImg from "../../assets/bar.svg"

export function CardFamily({
  id,
  name,
  description,
  image
}: CardFamilyProps) {
  return (
    <li key={id}>
      <img src={image} alt="Imagem do bloco 3D" />
      <div>
        <h3>
          {name}
        </h3>
        <p>
          {description}
        </p>
        <img src={barImg} alt="Ícone de barra vertical" />
        <img src={arrowOutImg} alt="Ícone de seta" />
      </div>
    </li>
  )
}