// Styles and images
import rightArrowImg from "../../assets/rightArrow.svg"

export function Announcement() {
  return (
    <div>
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
    </div>
  )
}