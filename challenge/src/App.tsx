// Components
import { Layout } from "./components/Layout"
import { AnnouncementBar } from "./components/AnnouncementBar"

// Hooks and contexts
import { useScreenWidth } from "./hooks/useScreenWidth"

function App() {
  const { screenWidth } = useScreenWidth()
  return (
    <>
      {
        screenWidth > 425 &&
        <AnnouncementBar />
      }

      <Layout>
        MAIN
      </Layout>

      {
        screenWidth <= 425 &&
        <AnnouncementBar />
      }
    </>
  )
}
export default App
