// Components
import { ListFamilies } from "../../components/ListFamilies"

// Styles and images
import { ContainerCatalogPage, ContainerCatalog } from "./styles/styles"

export function Catalog() {
  return (
    <ContainerCatalogPage>
      <ContainerCatalog>
        <h1>
          Catálogo
        </h1>
        <span />
      </ContainerCatalog>

      <ListFamilies />
    </ContainerCatalogPage>
  )
}