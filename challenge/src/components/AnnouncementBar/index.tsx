import { useState } from "react"

// Hooks and images
import { useScreenWidth } from "../../hooks/useScreenWidth"

// Styles and images
import closeImg from "../../assets/close.svg"
import rightArrowImg from "../../assets/rightArrow.svg"
import { ContainerAnnouncementBar, Button } from "./style/styles"

export function AnnouncementBar() {
  const [closeAnnouncementBar, setCloseAnnouncementBar] = useState(false)
  const { isMatch } = useScreenWidth("(max-width: 425px)")

  function handleCloseAnnouncementBar() {
    setCloseAnnouncementBar(true)
  }

  return (
    <>
      {
        closeAnnouncementBar ?
          "" :
          <ContainerAnnouncementBar>
            {
              isMatch &&
              <div onClick={handleCloseAnnouncementBar}>
                Fechar
                <img src={closeImg} alt="Ícone de fechar" />
              </div>
            }

            <p>
              Não limite sua criatividade,
              junte-se a familia Blocks por apenas
              <span>
                BRL 19,99
              </span>
            </p>

            <Button>
              <a href="#">
                Quero ser Premium
              </a>
              <img
                src={rightArrowImg}
                alt="ícone de seta para direita"
              />
            </Button>
          </ContainerAnnouncementBar>
      }
    </>
  )
}