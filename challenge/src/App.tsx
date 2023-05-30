// Components
import { Layout } from "./components/Layout"
import { AnnouncementBar } from "./components/AnnouncementBar"

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
        MAIN
      </Layout>

      {
        isMatch &&
        <AnnouncementBar />
      }
    </>
  )
}
export default App
