import { useState, useEffect } from "react"
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
import { ContainerListFamilies, ContainerList } from "./styles/styles"

export function ListFamilies() {
  const [families, setFamilies] = useState<Family[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    addFamilies()
  }, [])

  async function addFamilies() {
    setIsLoading(true)

    const data = await getFamilies(0, 21)
    const familiesData: Family[] = data.map(i => ({
      id: i.id,
      name: i.details.name,
      description: i.details.description,
      premium: i.premium,
      image: familyImage(i.id)
    }))

    setFamilies(familiesData)
    setIsLoading(false)
  }

  return (
    <ContainerListFamilies>
      <h1>
        Resultados
      </h1>

      {
        families.length ?
          <ContainerList>
            {
              families.map(i =>
                <CardFamily
                  id={i.id}
                  name={i.name}
                  description={i.description}
                  image={i.image}
                />
              )
            }
          </ContainerList> :
          <TailSpin
            stroke="#A11CF3"
            style={{ marginTop: "5rem" }}
          />
      }
    </ContainerListFamilies>
  )
}