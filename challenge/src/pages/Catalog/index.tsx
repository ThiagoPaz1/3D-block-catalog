// Components
import { ListFamilies } from "../../components/ListFamilies"

// Styles and images
import { ContainerCatalog } from "./styles/styles"

export function Catalog() {
  return (
    <div>
      <ContainerCatalog>
        <h1>
          Catálogo
        </h1>
        <span />
      </ContainerCatalog>

      <ListFamilies />
    </div>
  )
}