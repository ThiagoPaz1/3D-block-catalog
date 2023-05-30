// Components
import { Layout } from "./components/Layout"
import { AnnouncementBar } from "./components/AnnouncementBar"
import { Catalog } from "./pages/Catalog"

// Hooks and contexts
import { useScreenWidth } from "./hooks/useScreenWidth"

function App() {
  const { isMatch } = useScreenWidth("(max-width: 425px)")

  return (
    <>
      {
        !isMatch &&
        <AnnouncementBar />
      }

      <Layout>
        <Catalog />
      </Layout>

      {
        isMatch &&
        <AnnouncementBar />
      }
    </>
  )
}
export default App
