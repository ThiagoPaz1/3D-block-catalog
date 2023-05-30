// Styles and images
import rightArrowImg from "../../assets/rightArrow.svg"
import { ContainerAnnouncementBar } from "./style/styles"

export function AnnouncementBar() {
  return (
    <ContainerAnnouncementBar>
      <p>
        Não limite sua criatividade,
        junte-se a familia Blocks por apenas 
        <span>
          BRL 19,99
        </span>
      </p>

      <button>
        Quero ser Premium
        <img
          src={rightArrowImg}
          alt="ícone de seta para direita"
        />
      </button>
    </ContainerAnnouncementBar>
  )
}