import { useState, useEffect, useRef } from "react"
import { TailSpin } from "react-loading-icons"

// Components
import { CardFamily } from "./CardFamily"

// Queries
import { getFamilies } from "../../api"

// Types
import { Family } from "./types"

// Helps
import { familyImage } from "../../helps/familyImage"

// Styles and images
import { ContainerListFamilies, ContainerList, LimitListWarning } from "./styles/styles"

export function ListFamilies() {
  const [families, setFamilies] = useState<Family[]>([])
  const [isLimit, setIsLimit] = useState(false)
  const [skip, setSkip] = useState(0)
  const pointForNewFetchRef = useRef<HTMLParagraphElement | null>(null)
  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    addFamilies()
  }, [skip])

  async function addFamilies() {
    const data = await getFamilies(skip, 21)

    if (data.length) {
      setIsLimit(false)

      const familiesData: Family[] = data.map(i => ({
        id: i.id,
        name: i.details.name,
        image: familyImage(i.id)
      }))

      setFamilies([...families, ...familiesData])
      return
    }

    setIsLimit(true)
  }

  function refetch() {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    }
    
    const intersectionObserver = new IntersectionObserver(entries => {
      const target = entries[0]
      if (target.isIntersecting) {
        setSkip(currentState => currentState + 10.5)
      }
    }, options)

    if (pointForNewFetchRef.current) {
      intersectionObserver.observe(pointForNewFetchRef.current)
    }
  }

  return (
    <ContainerListFamilies>
      <h1>
        Resultados
      </h1>

      <ContainerList>
        {
          families.map(i =>
            <CardFamily
              key={i.id}
              name={i.name}
              image={i.image}
            />
          )
        }
      </ContainerList>

      <p ref={pointForNewFetchRef}>
        {
          !isLimit &&
          <TailSpin
            stroke="#A11CF3"
            style={{ marginTop: "2rem" }}
          />
        }
      </p>

      {
        isLimit &&
        <LimitListWarning>
          Não á mais famílias :/
        </LimitListWarning>
      }
    </ContainerListFamilies>
  )
}