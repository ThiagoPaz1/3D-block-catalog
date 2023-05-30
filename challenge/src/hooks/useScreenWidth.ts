import { useState, useEffect } from "react"

type ScreenWidth = {
  screenWidth: number
}

export function useScreenWidth(): ScreenWidth {
  const [screenWidth, setScreenWidth] = useState(0)
  
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  return { screenWidth }
}